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

<<<<<<< Updated upstream
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

Por defecto el deploy corre en push a **`main`**. Cambia la rama en el YAML si usas otra.

### 4. Ruta remota

Por defecto se despliega a `public_html/`. Si tu cuenta usa otra carpeta, edita `server-dir` en el workflow.

### Limpieza del servidor

`dangerous-clean-slate: true` borra en `public_html` lo que no esté en `dist` (evita mezclar archivos viejos). Si en `public_html` tienes cosas que no quieres borrar, quita esa opción o mueve esos archivos fuera.

### Solo SFTP (sin FTP)

Este workflow usa FTP. Si Hostinger solo te da SFTP, usa otro action (p. ej. subir `dist/` con `rsync`/`scp` y una clave SSH) o el despliegue Git de Hostinger con comando de build si tu plan lo permite.
=======
## Rama `build` (solo contenido de `dist/`)

Tras trabajar en tu rama de desarrollo, puedes dejar la rama **`build`** con **únicamente** lo que saldría de `dist/` (ideal para conectar Hostinger solo a esa rama):

```bash
npm run publish:build-branch
```

Esto:

1. Ejecuta `npm run build`
2. Cambia a la rama `build` (la crea si no existe; si existe en `origin`, la rastrea)
3. Sustituye el contenido de la rama por el de `dist/`
4. Hace commit (si hay cambios) y `git push origin build`
5. Vuelve a la rama en la que estabas

Variables opcionales:

- `BUILD_BRANCH=nombre` — otra rama en lugar de `build`
- `DIST_DIR=carpeta` — otra carpeta de salida del build
>>>>>>> Stashed changes
