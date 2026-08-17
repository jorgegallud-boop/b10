# Apartado II — guiones de repaso

Web estática con el esquema de cada charla del apartado II de
[recursosformacion.org](https://recursosformacion.org/apartado-2/), pensada
como **guión de repaso rápido** para quien ya conoce el contenido y las ha
dado muchas veces — no como material introductorio para quien no lo conoce.

Sin build ni dependencias: HTML, CSS y JS planos, pensada para desplegarse
directamente en GitHub Pages.

## Reglas de contenido (no negociables)

- **Fidelidad total al guion**: el esquema de cada charla se construye
  exclusivamente a partir del texto que se pega en la conversación. No se
  añade, interpreta ni completa nada que no esté en ese texto.
- **Ninguna idea se queda fuera**: antes de dar una charla por terminada, se
  repasa el guion original frase a frase para comprobar que cada idea y cada
  matiz están recogidos en el esquema, aunque sea de forma breve.
- **Las citas literales** van integradas en la propia frase del esquema
  donde encajan (no en una sección aparte), envueltas en
  `<span class="cita-inline">` y, si hay atribución, un
  `<span class="cita-fuente">` justo después entre paréntesis.

## Estructura

```
index.html                 Portada: índice de charlas (número y título)
assets/css/style.css       Estilos
assets/js/charlas.js       Índice de charlas (fuente de la portada)
assets/js/main.js          Renderiza el índice
charlas/_plantilla.html    Plantilla para crear una charla nueva (no se enlaza)
charlas/<slug>.html        Una página por charla
```

## Añadir una charla nueva

1. Copiar `charlas/_plantilla.html` como `charlas/<slug>.html` (slug corto, en
   minúsculas y con guiones, ej. `charlas/gestion-del-tiempo.html`).
2. Rellenar en esa página, siguiendo las reglas de contenido de arriba:
   - Título y enlace a la fuente original.
   - Un esquema jerárquico (listas anidadas) directo al grano, con las ideas
     clave del guion — sin cabecera de "Ideas fundamentales" ni apartado de
     "Objetivo de esta charla".
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
