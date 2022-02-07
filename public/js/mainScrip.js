let listaParaGuardar = "";
let arrayParaSortear = [];

document.querySelector("#add-list").addEventListener("click", (e) => {
  const lista = document.querySelector("#input-list").value.trim() + ",";
  listar(lista);
});

function startFunction() {
  verificarMemoria();
  verificarGuardado();
}

function listar(lista) {
  listaParaGuardar += lista;
  if (verificarContenido(lista)) {
    document.querySelector("#input-list").style.borderColor = "#adb5bd"; //cambio de color(gris)
    //string to array
    const listaToArray = lista
      .replace(/\n|\r/g, "")
      .trim()
      .split(",")
      .filter(Boolean);
    arrayParaSortear = arrayParaSortear.concat(listaToArray);
    console.log(listaToArray);
    //Renderea el array
    for (const [index, value] of listaToArray.entries()) {
      document.querySelector("#tbody-list").insertAdjacentHTML(
        "beforeend",
        `<tr>
              <td>${value}</td>
            </tr>`
      );
    }
    document.querySelector("#input-list").value = ""; //Borra lo que escribiste
  } else {
    document.querySelector("#input-list").style.borderColor = "#f00"; //cambio de color(rojo)
  }
}

function verificarContenido() {
  if (listaParaGuardar === "") {
    return false;
  } else {
    return true;
  }
}

function guardarEnMemoria() {
  if (verificarContenido()) {
    window.localStorage.setItem("lista-alumnos-ssr", listaParaGuardar);
  }
}

function verificarMemoria() {
  if (window.localStorage.getItem("lista-alumnos-ssr") === null) {
    document.querySelector("#load-from-memory").setAttribute("disabled", "");
  } else {
    document.querySelector("#load-from-memory").removeAttribute("disabled");
  }

  setTimeout(verificarMemoria, 50);
}

function verificarGuardado() {
  if (window.localStorage.getItem("lista-alumnos-ssr") === listaParaGuardar) {
    document.querySelector("#save-on-memory").setAttribute("disabled", "");
  } else {
    if (listaParaGuardar.trim() === "") {
      document.querySelector("#save-on-memory").setAttribute("disabled", "");
    } else {
      document.querySelector("#save-on-memory").removeAttribute("disabled");
    }
  }

  setTimeout(verificarGuardado, 50);
}

function vaciarMemoria() {
  window.localStorage.removeItem("lista-alumnos-ssr");
}
function vaciarLista() {
  document.querySelector("#tbody-list").innerHTML = "";
  arrayParaSortear = [];
  document.querySelector("#usuario-sorteado").innerHTML = "";
}

function listarDesdeMemory() {
  listaParaGuardar = window.localStorage.getItem("lista-alumnos-ssr");
  document.querySelector("#tbody-list").innerHTML = "";
  listar(listaParaGuardar);
}

function sortear() {
  if (arrayParaSortear.length === 0) {
    document.querySelector("#usuario-sorteado").innerHTML = "";
  } else {
    let sorteado =
      Math.floor(Math.random() * (arrayParaSortear.length - 0)) + 0;
    document.querySelector("#usuario-sorteado").innerHTML =
      arrayParaSortear[sorteado];
  }
}
