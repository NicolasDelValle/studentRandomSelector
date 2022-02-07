document.querySelector("#add-list").addEventListener("click", (e) => {
  const lista = document.querySelector("#input-list").value;

  const check = document.querySelector("#save-on-memory").checked;
  verificarContenido(lista, check);
});

function verificarContenido(lista, check) {
  if (lista.trim() === "") {
    document.querySelector("#input-list").style.borderColor = "#f00";
  } else {
    document.querySelector("#input-list").style.borderColor = "#adb5bd";
    const listaToArray = lista.trim().split(",").filter(Boolean);
    console.log(listaToArray);

    if (listaToArray.lenght === undefined && lista !== "") {
      console.log("es un solo item");
    } else {
      /* for (const item, index of lista) {
      document.querySelector("#tbody-list").insertAdjacentHTML(
        "beforeend",
        `<tr>
              <th scope="row">${index + 1}</th>
              <td>${item}</td>
            </tr>`
      );
    } */
      console.log("Hay mas de un item");
    }
  }
}
