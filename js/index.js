let template = `
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      admin
    </div>
    <button type="button" class="user-delete btn btn-outline-primary">Х</button>
  </li>
`;

let container = document.querySelector(`.users-container`);
let input = document.querySelector(`.form-control`);
let result = document.querySelector(`#result`);

let usernames = [`admin`, `tester`, `xyz`];

// Функция отрисовки массива
function render() {
  container.innerHTML = ``;
  for (let i = 0; i < usernames.length; i++) {
    container.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      ${usernames[i]}
    </div>
    <button type="button" class="user-delete btn btn-outline-primary">Х</button>
  </li>
  `;
  }
  //Удаление пользователя
  let buttons = document.querySelectorAll(`.user-delete`);
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener(`click`, function () {
      usernames.splice(i, 1);
      render();
    });
  }
}

render();

// Добавление пользователя
let add = document.querySelector(`#add`);

add.addEventListener(`click`, function () {
  let newUser = input.value;
  if (usernames.indexOf(newUser) != -1) {
    result.innerHTML = `Имя пользователя уже существует`;
  } else {
    usernames.push(newUser);
    render();
    result.innerHTML = `Пользователь ${newUser} добавлен`;
    input.value = ``;
  }
});
