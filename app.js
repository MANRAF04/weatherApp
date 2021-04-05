const ft = new Fetch();
const ui = new UI();

const search = document.getElementById("searchUser");
const button = document.getElementById("submit");
button.addEventListener("click", () => {
  const currentVal = search.value;

  ft.getCurrent(currentVal).then((data) => {
    ui.populateUI(data);
  });
});