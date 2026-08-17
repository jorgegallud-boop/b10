(function () {
  const list = document.getElementById("charlas-list");
  const search = document.getElementById("search");
  if (!list) return;

  function cardHTML(charla) {
    return `
      <li class="charla-card">
        <a class="card-title" href="charlas/${charla.slug}.html">${charla.titulo}</a>
        ${charla.tema ? `<p class="card-tema">${charla.tema}</p>` : ""}
        ${charla.resumen ? `<p class="card-resumen">${charla.resumen}</p>` : ""}
      </li>
    `;
  }

  function render(filterText) {
    const term = (filterText || "").trim().toLowerCase();
    const filtered = CHARLAS.filter((c) => {
      if (!term) return true;
      return [c.titulo, c.tema, c.resumen].join(" ").toLowerCase().includes(term);
    });

    if (filtered.length === 0) {
      list.innerHTML = `<li class="empty-state">${
        CHARLAS.length === 0
          ? "Todavía no hay charlas cargadas."
          : "No se ha encontrado ninguna charla con ese texto."
      }</li>`;
      return;
    }

    list.innerHTML = filtered.map(cardHTML).join("");
  }

  render();

  if (search) {
    search.addEventListener("input", (e) => render(e.target.value));
  }
})();
