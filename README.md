# DOGO · Prototipo React + PWA

Frontend de demostración. No hay autenticación real, cobros ni reservas reales.

## Desarrollo local

Con Node.js 22 y pnpm 11: `pnpm install`, luego `pnpm dev`.
Abre la dirección que imprime Vite, incluyendo `/Dogo-mascotas/`.
Para compilar: `pnpm build`. Vista previa: `pnpm preview`.

## Publicar sin instalar Git

1. En https://github.com/lauraaher/Dogo-mascotas abre Add file > Upload files.
2. Sube src/, public/, .github/, index.html, package.json, pnpm-lock.yaml,
   pnpm-workspace.yaml, vite.config.js, .gitignore y README.md en la raíz.
   No subas node_modules/, dist/, .git/ ni .pnpm-store/.
3. Si no aparece .github, activa Elementos ocultos en el Explorador. También puedes
   crear .github/workflows/deploy.yml con Add file > Create new file y pegar su contenido.
4. En Settings > Pages elige Source: GitHub Actions.
5. En Actions ejecuta Publicar DOGO en GitHub Pages > Run workflow si no arrancó solo.
6. Espera a que finalice en verde. URL esperada: https://lauraaher.github.io/Dogo-mascotas/

Los cambios posteriores en main/master vuelven a publicar automáticamente.
La URL solo estará disponible después de subir los archivos, habilitar Pages y finalizar el despliegue.
La PWA funciona bajo HTTPS; las fotos y fuentes externas necesitan conexión.
Visita las pantallas en línea antes de probar la caché sin conexión.
