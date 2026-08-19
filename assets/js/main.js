(function () {
  const container = document.getElementById("charlas-list");
  if (!container) return;

  function cardHTML(charla) {
    return `
      <li class="charla-card">
        <a class="card-title" href="charlas/${charla.slug}.html">${charla.titulo}</a>
      </li>
    `;
  }

  if (CHARLAS.length === 0) {
    container.innerHTML = `<p class="empty-state">Todavía no hay charlas cargadas.</p>`;
    return;
  }

  const html = BLOQUES.map((bloque) => {
    const charlasDelBloque = CHARLAS.filter((c) => c.bloque === bloque.id);
    if (charlasDelBloque.length === 0) return "";
    return `
      <section class="bloque bloque-${bloque.id}">
        <h2 class="bloque-titulo"><span class="bloque-letra">${bloque.id}</span> ${bloque.titulo}</h2>
        ${bloque.subtitulo ? `<p class="bloque-subtitulo">${bloque.subtitulo}</p>` : ""}
        <ul class="charlas-grid">${charlasDelBloque.map(cardHTML).join("")}</ul>
      </section>
    `;
  }).join("");

  container.innerHTML = html;
})();
