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
