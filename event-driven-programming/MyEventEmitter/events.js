// В этом файле приведён пример того, как слушатели и события
// хранятся в внутри класса

// Слушатели
const func1 = () => console.log('слушатель № 1')
const func2 = () => console.log('слушатель № 2')
const func3 = () => console.log('слушатель № 3')
const func4 = () => console.log('слушатель № 4')

// Класс EventEmitter
class MyEventEmitter {
  // Примерно так хранятся события и слушатели на уровне кода
  events = {
    close: [func1, func2, func3, func4],
    drop: [func1, func3, func4],
    error: [func2, func3, func4],
  }

  // А здесь находится код, который реализует функционал по созданию новых
  // событий, генерации событий, подписке и отписке от событий и прочее.
}
