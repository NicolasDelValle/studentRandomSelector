document.querySelector("#add-list").addEventListener("click", (e) => {
  const lista = document.querySelector("#input-list").value + ",";
  listar(lista, check);
});

function listar(lista, check) {
  console.log(check);
  if (verificarContenido(lista)) {
    document.querySelector("#input-list").style.borderColor = "#adb5bd"; //cambio de color(gris)
    //string to array
    const listaToArray = lista
      .replace(/\n|\r/g, "")
      .trim()
      .split(",")
      .filter(Boolean);
    console.log(listaToArray);
    //Renderea el array
    for (const item of listaToArray) {
      document.querySelector("#tbody-list").insertAdjacentHTML(
        "beforeend",
        `<tr>
              <th scope="row"></th>
              <td>${item}</td>
            </tr>`
      );
    }
    //Guardado en memoria
    if (check) {
      guardarEnMemoria(lista);
    }
    document.querySelector("#input-list").value = ""; //
  } else {
    document.querySelector("#input-list").style.borderColor = "#f00"; //cambio de color(rojo)
  }
}

function verificarContenido(lista) {
  if (lista.trim() === "") {
    return false;
  } else {
    return true;
  }
}

function guardarEnMemoria(lista) {
  if (window.localStorage.getItem("lista-alumnos-ssr") !== null) {
    console.log(window.localStorage.getItem("lista-alumnos-ssr"));
  } else {
    window.localStorage.setItem("lista-alumnos-ssr", lista);
  }
}
