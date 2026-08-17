# Resúmenes de charlas

Web estática con esquemas de las ideas fundamentales y las citas literales de
las charlas publicadas en [recursosformacion.org/apartado-2](https://recursosformacion.org/apartado-2/).

Sin build ni dependencias: HTML, CSS y JS planos, pensada para desplegarse
directamente en GitHub Pages.

## Estructura

```
index.html                 Portada: índice de charlas con buscador
assets/css/style.css       Estilos
assets/js/charlas.js       Índice de metadatos de charlas (fuente de la lista/buscador)
assets/js/main.js          Renderiza el índice y filtra la búsqueda
charlas/_plantilla.html    Plantilla para crear una charla nueva (no se enlaza)
charlas/<slug>.html        Una página por charla
```

## Añadir una charla nueva

1. Copiar `charlas/_plantilla.html` como `charlas/<slug>.html` (slug corto, en
   minúsculas y con guiones, ej. `charlas/gestion-del-tiempo.html`).
2. Rellenar en esa página:
   - Título y enlace a la fuente original.
   - **Ideas fundamentales**: esquema jerárquico (listas anidadas) con las
     ideas clave del guion, no un resumen en prosa.
   - **Citas del guion**: las citas literales tal cual aparecen en el guion
     original, en `<blockquote>`.
3. Añadir una entrada en `assets/js/charlas.js` con `slug`, `titulo`, `tema`
   y un `resumen` de una frase. Aparece automáticamente en la portada.

## Despliegue (GitHub Pages)

El repo incluye `.github/workflows/deploy-pages.yml`, que despliega
automáticamente en cada push a `main`. Solo hace falta activarlo una vez en
el repositorio: **Settings → Pages → Source: GitHub Actions**.

## Nota sobre las fuentes

El contenido de `recursosformacion.org` se incorpora pegando el texto del
guion de cada charla directamente en la conversación (no se hace scraping
automático del sitio).
