# SierraLabs Website

Proyecto React + TypeScript con Vite.

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
```

Esto genera la carpeta `dist/` con archivos estáticos listos para subir a hosting.

## Hostinger (solo código buildeado)

1. Ejecuta:

```bash
npm run build:hostinger
```

2. Sube **el contenido** de `dist/` a `public_html/` en Hostinger.

3. Opcional: generar zip para subir directo:

```bash
npm run zip:dist
```

Se creará `dist.zip` en la raíz del proyecto.

## Preview local de dist

```bash
npm run preview
```

## Rama `deploy` (contenido de `dist/` en Git)

Tras trabajar en tu rama de desarrollo, puedes copiar el build a la rama **`deploy`** (para Hostinger Git o revisión):

```bash
npm run publish:deploy-branch
```

Alias: `npm run publish:build-branch` (mismo script).

Esto:

1. Ejecuta `npm run build`
2. Cambia a la rama `deploy` (la crea si no existe; si existe en `origin`, la rastrea)
3. Limpia el árbol de la rama **sin borrar `node_modules`** en disco
4. Copia el contenido de `dist/` a la raíz del repo en esa rama
5. Hace commit (si hay cambios) y `git push origin deploy`
6. Vuelve a la rama en la que estabas

`node_modules` suele estar en `.gitignore`, así que no se sube al remoto; solo se conserva localmente para no tener que reinstalar dependencias al cambiar de rama.

Variables opcionales:

- `DEPLOY_BRANCH=nombre` — otra rama en lugar de `deploy` (también acepta `BUILD_BRANCH` por compatibilidad)
- `DIST_DIR=carpeta` — otra carpeta de salida del build

## Automatizar: solo subir `dist` desde GitHub

El workflow `.github/workflows/deploy-hostinger.yml` hace en cada push a `main`:

1. `npm ci` + `npm run build`
2. Sube **solo el contenido de `dist/`** a `public_html/` en Hostinger por FTP.

### 1. Credenciales FTP en Hostinger

En hPanel: **Archivos → Cuentas FTP** (o **FTP**). Anota:

- Host (ej. `ftp.tudominio.com` o el que indique Hostinger)
- Usuario FTP
- Contraseña FTP

### 2. Secrets en GitHub

En el repo: **Settings → Secrets and variables → Actions → New repository secret**

| Secret | Valor |
|--------|--------|
| `HOSTINGER_FTP_HOST` | Host FTP |
| `HOSTINGER_FTP_USER` | Usuario FTP |
| `HOSTINGER_FTP_PASSWORD` | Contraseña FTP |

### 3. Rama

Por defecto el deploy corre en push a **`main`**. Cambia la rama en el YAML si usas otra (por ejemplo `deploy`).

### 4. Ruta remota

Por defecto se despliega a `public_html/`. Si tu cuenta usa otra carpeta, edita `server-dir` en el workflow.

### Limpieza del servidor

`dangerous-clean-slate: true` borra en `public_html` lo que no esté en `dist` (evita mezclar archivos viejos). Si en `public_html` tienes cosas que no quieres borrar, quita esa opción o mueve esos archivos fuera.

### Solo SFTP (sin FTP)

Este workflow usa FTP. Si Hostinger solo te da SFTP, usa otro action (p. ej. subir `dist/` con `rsync`/`scp` y una clave SSH) o el despliegue Git de Hostinger con comando de build si tu plan lo permite.
