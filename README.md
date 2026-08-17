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
   - Un esquema jerárquico (listas anidadas) directo al grano, con las ideas
     clave del guion — sin cabecera de "Ideas fundamentales" ni apartado de
     "Objetivo de esta charla".
   - Las citas literales del guion van **integradas en la propia frase**
     donde encajan, envueltas en `<span class="cita-inline">` (se resaltan
     en otro color) y, si hay atribución, un `<span class="cita-fuente">`
     justo después entre paréntesis. No se agrupan en una sección aparte.
3. Añadir una entrada en `assets/js/charlas.js` con `slug` y `titulo`
   (número + título, ej. `"0. Clase introductoria"`). Aparece automáticamente
   en la portada, que solo muestra ese número/título por charla.

## Despliegue (GitHub Pages)

El repo incluye `.github/workflows/deploy-pages.yml`, que despliega
automáticamente en cada push a `main`. Solo hace falta activarlo una vez en
el repositorio: **Settings → Pages → Source: GitHub Actions**.

## Nota sobre las fuentes

El contenido de `recursosformacion.org` se incorpora pegando el texto del
guion de cada charla directamente en la conversación (no se hace scraping
automático del sitio).
