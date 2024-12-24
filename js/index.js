const shoppingList = document.querySelector("#shopping-list");
const productInput = document.querySelector("#product-input");
const addBtn = document.querySelector("#add-item-btn");
const removeBtn = document.querySelector("#remove-item-btn");
const infoText = document.querySelector("#info");

addBtn.addEventListener("click", () => {
  let listChilderens = shoppingList.querySelectorAll("li");
  productInput.value = productInput.value.trim();
  let isIncludingSameItem = false;
  listChilderens.forEach((item) => {
    if (item.textContent === productInput.value) {
      isIncludingSameItem = true;
    }
  });
  if (productInput.value === "" || isIncludingSameItem === true) {
    productInput.value = "";
    return;
  }
  if (listChilderens.length === 0) {
    shoppingList.innerHTML = "";
  }
  shoppingList.insertAdjacentHTML(
    "beforeend",
    `<li>${productInput.value}</li>`
  );
  listChilderens = shoppingList.querySelectorAll("li");
  productInput.value = "";
  infoText.textContent = listChilderens.length;
});

removeBtn.addEventListener("click", () => {
  let listChilderens = shoppingList.querySelectorAll("li");
  productInput.value = productInput.value.trim();
  if (productInput.value === "") {
    productInput.value = "";
    return;
  }
  listChilderens.forEach((item) => {
    if (item.textContent === productInput.value) {
      shoppingList.removeChild(item);
      listChilderens = shoppingList.querySelectorAll("li");
    }
  });
  if (listChilderens.length === 0) {
    shoppingList.innerHTML = "У вас немає покупок";
  }
  productInput.value = "";
  infoText.textContent = listChilderens.length;
});
