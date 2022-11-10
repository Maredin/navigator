
let user;

/* --------Преобразуем Json файл в объект JS---------- */

let requestURL = 'data.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload = function() {
  user = request.response;
  console.log(user);
  nameFirst(user);
}

/* --------скрыть показать класс активности, запуск основной функции---------- */

let left = document.querySelector('.text__content'),
    right = document.querySelector('.numbers__user'),
    menu = document.querySelectorAll('.menu');

function hide() {
    menu.forEach(item => {
      item.classList.remove('active');
    });
}

(function show() {
  menu.forEach(item => {
    item.addEventListener('click', () => {
      hide();
      left.textContent = '';
      right.textContent = '';
      let step = item.textContent.toLowerCase();
      nameFirst(user, step);
      item.classList.add('active');
    });
  });
})();



/* --------Создание элемета списка---------- */

function nameFirst(jsonObj, step = 'income') {
  let data = jsonObj['data']
  for(let i = 0; i < data.length; i++) {
    if(data[i].type == step) {
      let names = data[i].name.first + ' ' + data[i].name.last;
      let div = document.createElement('div');
      div.classList.add('names');
      div.textContent = names;
      left.appendChild(div);

      let company = data[i].phone;
      let divCompany = document.createElement('div');
      divCompany.classList.add('names');
      divCompany.textContent = company;
      right.appendChild(divCompany);
    }
  }
}



