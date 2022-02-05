document.querySelector("#add-list").addEventListener("click", (e) => {
  const lista = document.querySelector("#input-list").value;
  const check = document.querySelector("#save-on-memory").checked;
  verificarContenido(lista, check);
});

function verificarContenido(lista, check) {
  if (!lista) {
    console.log("Esta vacio");
  }
}
