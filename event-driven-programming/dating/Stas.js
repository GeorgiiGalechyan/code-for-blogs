const net = require('net')

const Stas = new net.Socket()

const Zhenya = { host: '127.0.0.1', port: 2000 }

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
