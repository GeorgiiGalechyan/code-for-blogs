const net = require('net')

// Создаём Антона
const Anton = new net.Socket()

// Задаём координаты Жени
const Zhenya = { host: '127.0.0.1', port: 2000 }

// Антон пробует познакомиться с Женей
Anton.connect(Zhenya, () => {
  // Приветствие от Антона
  const greetings =
    'Антон: Привет!) Можно, я провожу тебя до дома? Мои родители говорили что надо идти за своей мечтой!)'

  Anton.write(greetings) // Стас говорит Жене приветствие
  console.log(greetings) // Выведем в консоль приветствие
})

// Если Света ответит на приветствие, выведем в консоль ответ Светы
Anton.on('data', (data) => {
  console.log(`${data}`)
})
