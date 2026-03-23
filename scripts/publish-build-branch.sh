#!/usr/bin/env bash
set -euo pipefail

ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"

BUILD_BRANCH="${BUILD_BRANCH:-build}"
DIST_DIR="${DIST_DIR:-dist}"

echo "==> npm run build"
npm run build

if [ ! -d "$DIST_DIR" ]; then
  echo "Error: no existe la carpeta $DIST_DIR tras el build."
  exit 1
fi

CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"

cleanup_build_tree() {
  find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
}

echo "==> Preparando rama $BUILD_BRANCH (solo contenido de $DIST_DIR/)"

if git show-ref --verify --quiet "refs/heads/$BUILD_BRANCH"; then
  git checkout "$BUILD_BRANCH"
  cleanup_build_tree
elif git show-ref --verify --quiet "refs/remotes/origin/$BUILD_BRANCH" 2>/dev/null; then
  git fetch origin "$BUILD_BRANCH" 2>/dev/null || true
  git checkout -b "$BUILD_BRANCH" "origin/$BUILD_BRANCH"
  cleanup_build_tree
else
  git checkout --orphan "$BUILD_BRANCH"
  git rm -rf . 2>/dev/null || true
  cleanup_build_tree
fi

cp -R "$ROOT/$DIST_DIR/." .

git add -A

if git diff --staged --quiet; then
  echo "==> Sin cambios respecto al último commit en $BUILD_BRANCH."
else
  MSG="chore(build): deploy dist $(date -u +%Y-%m-%dT%H:%M:%SZ)"
  git commit -m "$MSG"
  echo "==> Commit creado en $BUILD_BRANCH"
fi

echo "==> git push origin $BUILD_BRANCH"
git push -u origin "$BUILD_BRANCH"

git checkout "$CURRENT_BRANCH"

echo "==> Listo. Rama $BUILD_BRANCH contiene solo el build estático."
