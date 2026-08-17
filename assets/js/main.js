(function () {
  const list = document.getElementById("charlas-list");
  if (!list) return;

  function cardHTML(charla) {
    return `
      <li class="charla-card">
        <a class="card-title" href="charlas/${charla.slug}.html">${charla.titulo}</a>
      </li>
    `;
  }

  if (CHARLAS.length === 0) {
    list.innerHTML = `<li class="empty-state">Todavía no hay charlas cargadas.</li>`;
    return;
  }

  list.innerHTML = CHARLAS.map(cardHTML).join("");
})();
