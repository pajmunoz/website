#!/usr/bin/env bash
set -euo pipefail

ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"

# Rama destino: por defecto "deploy" (override: DEPLOY_BRANCH o BUILD_BRANCH)
DEPLOY_BRANCH="${DEPLOY_BRANCH:-${BUILD_BRANCH:-deploy}}"
DIST_DIR="${DIST_DIR:-dist}"

echo "==> npm run build"
npm run build

if [ ! -d "$DIST_DIR" ]; then
  echo "Error: no existe la carpeta $DIST_DIR tras el build."
  exit 1
fi

CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"

# Borra todo el árbol de trabajo salvo .git y node_modules (no tocar dependencias locales).
cleanup_deploy_tree() {
  find . -mindepth 1 -maxdepth 1 \
    ! -name '.git' \
    ! -name 'node_modules' \
    -exec rm -rf {} +
}

echo "==> Preparando rama $DEPLOY_BRANCH (copia de $DIST_DIR/; se conserva node_modules/)"

if git show-ref --verify --quiet "refs/heads/$DEPLOY_BRANCH"; then
  git checkout "$DEPLOY_BRANCH"
  cleanup_deploy_tree
elif git show-ref --verify --quiet "refs/remotes/origin/$DEPLOY_BRANCH" 2>/dev/null; then
  git fetch origin "$DEPLOY_BRANCH" 2>/dev/null || true
  git checkout -b "$DEPLOY_BRANCH" "origin/$DEPLOY_BRANCH"
  cleanup_deploy_tree
else
  git checkout --orphan "$DEPLOY_BRANCH"
  git rm -rf . 2>/dev/null || true
  cleanup_deploy_tree
fi

cp -R "$ROOT/$DIST_DIR/." .

git add -A

if git diff --staged --quiet; then
  echo "==> Sin cambios respecto al último commit en $DEPLOY_BRANCH."
else
  MSG="chore(deploy): dist $(date -u +%Y-%m-%dT%H:%M:%SZ)"
  git commit -m "$MSG"
  echo "==> Commit creado en $DEPLOY_BRANCH"
fi

echo "==> git push origin $DEPLOY_BRANCH"
git push -u origin "$DEPLOY_BRANCH"

git checkout "$CURRENT_BRANCH"

echo "==> Listo. Rama $DEPLOY_BRANCH actualizada con el contenido de $DIST_DIR/ (node_modules no se borró en disco)."
