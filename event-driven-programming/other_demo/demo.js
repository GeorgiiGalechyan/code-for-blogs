// Импорт модуля событий
const events = require('events')

// Создание объекта myEventEmitter
const myEventEmitter = new events.EventEmitter()

// Создание обработчик connectHandler.
// Обработчик в процессе выполнения вызовет событие "data_received"
const connectHandler = () => {
  console.log('Успешное соединение.')

  // Запуск события data_received
  myEventEmitter.emit('data_received')
}

// Подписываем обработчик connectHandler к событию "connection"
myEventEmitter.on('connection', connectHandler)

// Подписываем на событие "data_received" обработчик в виде анонимной функции
myEventEmitter.on('data_received', function () {
  console.log('Данные успешно переданы.')
})

// Запуск события "connection"
myEventEmitter.emit('connection')

console.log('Программа завершена.')
