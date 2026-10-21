(function () {
  const container = document.getElementById("charlas-list");
  if (!container) return;

  // Carpeta de las páginas: "charlas" (Apartado II) o "temas" (Apartado IV)
  const base = container.dataset.base || "charlas";
  const bloques = typeof BLOQUES !== "undefined" ? BLOQUES : [];

  function cardHTML(charla) {
    return `
      <li class="charla-card">
        <a class="card-title" href="${base}/${charla.slug}.html">${charla.titulo}</a>
      </li>
    `;
  }

  if (CHARLAS.length === 0) {
    container.innerHTML = `<p class="empty-state">Todavía no hay charlas cargadas.</p>`;
    return;
  }

  // Sin bloques: lista única
  if (bloques.length === 0) {
    container.innerHTML = `<ul class="charlas-grid">${CHARLAS.map(cardHTML).join("")}</ul>`;
    return;
  }

  const html = bloques.map((bloque) => {
    const charlasDelBloque = CHARLAS.filter((c) => c.bloque === bloque.id);
    if (charlasDelBloque.length === 0) return "";
    return `
      <section class="bloque bloque-${bloque.id}">
        <h2 class="bloque-titulo"><span class="bloque-letra">${bloque.id}</span> ${bloque.titulo}</h2>
        <ul class="charlas-grid">${charlasDelBloque.map(cardHTML).join("")}</ul>
      </section>
    `;
  }).join("");

  container.innerHTML = html;
})();
