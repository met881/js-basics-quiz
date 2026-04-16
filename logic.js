// Проверка совершеннолетия (Filter и Map)
const users = [
    { name: 'Иван', age: 25 },
    { name: 'Анна', age: 17 },
    { name: 'Петр', age: 30 }
];
const adults = users.filter(u => u.age >= 18).map(u => u.name);
console.log('Взрослые пользователи:', adults);

// Работа с DOM (изменение контента)
function updateStatus() {
    const statusElement = document.getElementById('status');
    if (statusElement) {
        statusElement.textContent = 'Задание выполнено успешно!';
        statusElement.style.color = 'green';
    }
}
