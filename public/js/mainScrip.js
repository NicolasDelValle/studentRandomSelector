document.querySelector("#add-list").addEventListener("click", (e) => {
  const lista = document.querySelector("#input-list").value + ",";

  const check = document.querySelector("#save-on-memory").checked;
  verificarContenido(lista, check);
});

function verificarContenido(lista, check) {
  if (lista.trim() === "") {
    document.querySelector("#input-list").style.borderColor = "#f00";
  } else {
    document.querySelector("#input-list").style.borderColor = "#adb5bd";
    const listaToArray = lista
      .replace(/\n|\r/g, "")
      .trim()
      .split(",")
      .filter(Boolean);
    console.log(listaToArray);
    for (const item of listaToArray) {
      document.querySelector("#tbody-list").insertAdjacentHTML(
        "beforeend",
        `<tr>
              <th scope="row"></th>
              <td>${item}</td>
            </tr>`
      );
    }
    document.querySelector("#input-list").value = "";
  }
}
