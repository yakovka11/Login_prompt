'use strict'

var login = prompt('Логин:');
if (login === 'Админ') {
    var password = prompt('Пароль:');
    if (password === 'Чёрный Властелин') {
        alert('Добро пожаловать!')
    } else if (password === null) {
        alert('Вход отменён')
    } else {
        alert('Пароль неверен')
    }
} else if (login === null) {
    alert('Вход отменён')
}