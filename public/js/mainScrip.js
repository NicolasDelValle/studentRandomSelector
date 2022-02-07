document.querySelector("#add-list").addEventListener("click", (e) => {
  const lista = document
    .querySelector("#input-list")
    .value.trim()
    .split(",")
    .filter(Boolean);
  const check = document.querySelector("#save-on-memory").checked;
  verificarContenido(lista, check);
});

function verificarContenido(lista, check) {
  if (lista.length === 0) {
    document.querySelector("#input-list").style.borderColor = "#f00";
  } else {
    document.querySelector("#input-list").style.borderColor = "#adb5bd";
    for (const item, index of lista) {
      document.querySelector("#tbody-list").insertAdjacentHTML(
        "beforeend",
        `<tr>
              <th scope="row">${index + 1}</th>
              <td>${item}</td>
            </tr>`
      );
    }
  }
}
