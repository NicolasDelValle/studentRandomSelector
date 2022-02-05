document.querySelector("#add-list").addEventListener("click", (e) => {
  const lista = document.querySelector("#input-list").value;
  const check = document.querySelector("#save-on-memory").checked;
  console.log(lista);
  console.log(check);
});
