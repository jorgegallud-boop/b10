/*
 * Índice de charlas del Apartado II.
 *
 * Cada charla añadida aquí aparece automáticamente en la portada (index.html),
 * agrupada dentro de su bloque (ver BLOQUES más abajo).
 *
 * Campos de cada charla:
 *   slug     -> nombre de archivo sin extensión dentro de /charlas (ej. "slug" -> charlas/slug.html)
 *   titulo   -> número y título de la charla (ej. "0. Clase introductoria")
 *   bloque   -> id del bloque al que pertenece ("A", "B" o "C"), ver BLOQUES
 *
 * Ver README.md para el proceso de añadir una charla nueva.
 */
const BLOQUES = [
  {
    id: "A",
    titulo: "El espíritu del Opus Dei",
  },
  {
    id: "B",
    titulo: "Medios para la identificación con Jesucristo",
  },
  {
    id: "C",
    titulo: "La formación en el Opus Dei",
  },
];

const CHARLAS = [
  // A) El espíritu del Opus Dei
  { slug: "clase-introductoria", titulo: "0. Clase introductoria", bloque: "A" },
  { slug: "el-opus-dei-como-obra-de-dios", titulo: "1. El Opus Dei como obra de Dios", bloque: "A" },
  { slug: "dinamismo-de-la-vocacion-y-respuesta-personal", titulo: "2. Dinamismo de la vocación y respuesta personal", bloque: "A" },
  { slug: "gradualidad-de-la-vida-espiritual", titulo: "3. Gradualidad de la vida espiritual", bloque: "A" },
  { slug: "libertad-y-entrega", titulo: "4. Libertad y entrega", bloque: "A" },
  { slug: "colaborar-con-cristo-en-la-redencion-del-mundo", titulo: "5. Colaborar con Cristo en la redención del mundo", bloque: "A" },
  { slug: "somos-apostoles", titulo: "6. Somos apóstoles", bloque: "A" },
  { slug: "la-obra-es-familia-i", titulo: "7. La Obra es familia (I)", bloque: "A" },
  { slug: "la-obra-es-familia-ii", titulo: "8. La Obra es familia (II)", bloque: "A" },
  { slug: "unidad-de-vida-ser-opus-dei-para-hacer-el-opus-dei", titulo: "9. Unidad de vida: ser Opus Dei para hacer el Opus Dei", bloque: "A" },

  // B) Medios para la identificación con Jesucristo
  { slug: "plan-de-vida-espiritual", titulo: "10. Plan de vida espiritual", bloque: "B" },
  { slug: "primacia-de-los-sacramentos", titulo: "11. Primacía de los sacramentos", bloque: "B" },
  { slug: "vida-de-oracion-i-la-oracion-mental", titulo: "12. Vida de oración (I): la oración mental", bloque: "B" },
  { slug: "vida-de-oracion-ii-presencia-de-dios-amor-a-la-cruz", titulo: "13. Vida de oración (II): presencia de Dios, amor a la cruz", bloque: "B" },
  { slug: "amor-y-devocion-a-la-santisima-virgen", titulo: "14. Amor y devoción a la Santísima Virgen", bloque: "B" },
  { slug: "otras-devociones-y-costumbres", titulo: "15. Otras devociones y costumbres", bloque: "B" },

  // C) La formación en el Opus Dei
  { slug: "admision-e-incorporaciones-a-la-obra", titulo: "16. Admisión e incorporaciones a la Obra", bloque: "C" },
  { slug: "necesidad-de-la-formacion", titulo: "17. Necesidad de la formación", bloque: "C" },
  { slug: "formacion-humana-i-la-importancia-de-las-virtudes", titulo: "18. Formación humana (I): la importancia de las virtudes", bloque: "C" },
  { slug: "formacion-humana-ii-vista-panoramica-de-algunas-virtudes", titulo: "19. Formación humana (II): vista panorámica de algunas virtudes", bloque: "C" },
  { slug: "formacion-espiritual-y-doctrinal", titulo: "20. Formación espiritual y doctrinal", bloque: "C" },
  { slug: "formacion-apostolica", titulo: "21. Formación apostólica", bloque: "C" },
  { slug: "formacion-profesional", titulo: "22. Formación profesional", bloque: "C" },
];
