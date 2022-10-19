const net = require('net')

// Создаём Стаса
const Stas = new net.Socket()

// Задаём координаты Жени
const Zhenya = { host: '127.0.0.1', port: 2000 }

// Стас пробует познакомиться с Женей
Stas.connect(Zhenya, (socket) => {

  // Приветствие от Стаса
  const greetings = 'Стас: Привет, Ты веришь в любовь с первого взгляда, или мне пройти мимо тебя еще раз?'

  Stas.write(greetings) // Стас говорит Жене приветствие
  console.log(greetings) // Выведем в консоль приветствие
})

// Если Света ответит на приветствие, выведем в консоль ответ Светы
Stas.on('data', (data) => {
  console.log(`${data}`)
})
