document.addEventListener('DOMContentLoaded', function () {
    console.log('El dom ya fue construido');
});

const title = document.getElementById('title');
title.innerHTML = 'Courses';

const description = document.getElementById('description');
description.textContent = 'Course List';
description.innerHTML = '<strong>' + description.textContent + '</strong>';
console.log(description.textContent);

//const items = document.getElementsByClassName('list-group-item');

// li:nth-child(odd) para los elementos par de la lista y impares li:nth-child(even)
const items = document.querySelectorAll('li:nth-child(odd)');
for (var i = 0; i < items.length; i++) {
    let element = items[i];
    element.style.background = '#f2f2f2';
}
// por id
// const element = document.querySelector('#first-course');
// const element = document.querySelector('.list-group-item');
// por clase de css
// const element = document.querySelector('.list-group-item');

// const list = document.querySelector('ul');
// console.log(list);
// console.log(list.childElementCount);
// for (var i = 0; i < list.children.length; i++) {
//     console.log(list.children[i]);
// }
// console.log(list.firstElementChild);
// console.log(list.lastElementChild);
// console.log(list.firstElementChild.innerHTML);
// console.log(list.lastElementChild.innerHTML);
// const element = document.querySelector('div.row > ul.list-group > li');
// // para saber el papa
// console.log(element.parentElement);
// // para saber el abuelo
// console.log(element.parentElement.parentElement);
// // para conocer el sgte hermano
// console.log(element.nextElementSibling);

// const last_element = document.getElementById('last-course');
// console.log(last_element);
// console.log(last_element.previousElementSibling);

// const elemento = document.getElementById('first-course');
// console.log(elemento.childElementCount);
// console.log(elemento.childNodes.length);

// const button = document.querySelector('.btn.btn-primary');
// button.addEventListener('click', function (e) {
//     console.log(e);
//     if (title.style.display != 'none') {
//         title.style.display = 'none';
//         description.style.display = 'none';
//         button.textContent = 'Mostrar';
//     } else {
//         title.style.display = 'block';
//         description.style.display = 'block';
//         // button.textContent = 'Ocultar';
//         // e.target.textContent = 'Ocultar';
//         this.textContent = 'Ocultar';
//     }
// });

// button.addEventListener('mouseenter', function(){
//     this.className = 'btn btn-danger';
// });

// button.addEventListener('mouseout', function(){
//     this.className = 'btn btn-primary';
// });

setTimeout(function (p1, p2, p3) {
    console.log('Hola mundo');
    console.log(p1);
    console.log(p2);
    console.log(p3);
}, 3000, 'argumento1', 'argumento2', 'argumento3');


// const input = document.getElementById('input');
// input.addEventListener('keydown', function (e) {
//     console.log('Tecla presionada:' + e.key + ' con un codigo ' + e.keyCode);
// })
const row = document.querySelector('.row');

const form = document.getElementById('course-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    let title = document.getElementById('title-form').value;
    let description = document.getElementById('description-form').value;
    create_card(title, description);
});

let div = null;

function create_card(title, description) {
    div = document.createElement('div');
    div.className = 'col-sm-6 col-md-4'
    
    let thumbnail = document.createElement('div');
    thumbnail.className = 'thumbnail';
    
    let caption = document.createElement('div');
    caption.className = 'caption';
    
    let h3 = document.createElement('h3');
    h3.textContent = title;
    
    let p1 = document.createElement('p');
    p1.textContent = description;

    let p2 = document.createElement('p');
    let a = document.createElement('a');
    a.className = 'btn btn-danger';
    a.textContent = 'Eliminar';

    p2.addEventListener('click',delete_card);
    p2.appendChild(a);
    caption.appendChild(h3);
    caption.appendChild(p1);
    caption.appendChild(p2);

    thumbnail.appendChild(caption);
    div.appendChild(thumbnail);
    row.appendChild(div);
}

function create_card_by_innerHTML(title, description) {
    let html = `<div class="col-sm-6 col-md-4">\
                    <div class="thumbnail">\
                         <div class="caption">\
                             <h3 id="title_card">${title}</h3>\
                              <p id="description_card">${description}</p>\
                               <p> <a href="#" class="btn btn-danger">Accion</a></p>\
                         </div>\
                     </div>\
                </div>`;
    row.innerHTML += html;
}

function delete_card(e){
    let ancestor = get_ancestors(e.target, 4);
    row.removeChild(ancestor)
}

function get_ancestors(ancestor, level){
    if(level == 0){
        return ancestor;
    }
    level--;
    return get_ancestors(ancestor.parentElement, level);
}


const checkbox = document.getElementById('checkbox');
let title_form = document.getElementById('title-form');
checkbox.addEventListener('change', function () {
    console.log('cambio de valor');
});
title_form.addEventListener('change', function () {
    console.log('cambio de valor');
});

// for (let element of document.querySelectorAll('*')) {
//     element.addEventListener('click', show_messages);
// }
// const elements = document.querySelector('li');
// const list = document.querySelector('ul');
// const div_row = document.querySelector('.row');
// const div_container = document.querySelector('.container');
// const body = document.querySelector('body');

// elements.addEventListener('click', show_messages);
// list.addEventListener('click', show_messages);
// div_row.addEventListener('click', show_messages);
// div_container.addEventListener('click', show_messages);
// body.addEventListener('click', show_messages);

function show_messages(e) {
    console.log("Elemento actual " + this.tagName);
    console.log("Elemento que disparo el evento " + e.target.tagName);
    console.log("n");
}


