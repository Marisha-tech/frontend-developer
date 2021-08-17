var event, ok

function andGamesOneAction(params) {
  do {
    ok = false
    event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры')
    if (event == -1) {
      break
    } else {
      ok = isAnswer(works.b0, event)
      if (ok) {
        if (event == 1) {
          answers.push(works.b1)
        } else {
          answers.push(works.b2)
        }
      }
    }
  } while (!ok)
}

function andGamesTwoAction(event) {
  do {
    ok = false
    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры')
    if (event == -1) {
      break
    } else {
      ok = isAnswer(works.d0, event)
      if (ok) {
        if (event == 1) {
          answers.push(works.d1)
        } else {
          answers.push(works.d2)
        }
      }
    }
  } while (!ok)
  return event
}

var answers = []
do {
  //Выводим первый вопрос
  ok = false
  event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры')

  if (event == -1) {
    break
  } else {
    ok = isAnswer(works.a0, event)
    //дописано из дз
    if (ok) {
      if (event == 1) {
        answers.push(works.a1)
      } else {
        answers.push(works.a2)
      }
    }
  }
} while (!ok)
switch (event) {
  case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
    andGamesOneAction()
    switch (event) {
      case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
        andGamesTwoAction()
        break
      case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
        andGamesTwoAction()

        break
      case -1: // Второе действие
        break
      default:
        alert('Ошибка')
    }
    break
  case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
    do {
      ok = false
      event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры')
      if (event == -1) {
        break
      } else {
        ok = isAnswer(works.c0, event)
      }
    } while (!ok)
    switch (event) {
      case 1: // Второе действие
        andGamesTwoAction()

        break
      case 2: // Второе действие
        andGamesTwoAction()

        break
      case -1: // Второе действие
        break
      default:
        alert('Ошибка')
    }
    break
  case -1: // Первое действие
    break
  default:
    alert('Ошибка')
}
alert('Спасибо за игру')
do {
  lookAnswer = +prompt(
    'Вы хотите посмотреть ответы на вопросы? Да = 1, нет = 0'
  )
  if (lookAnswer == 1) {
    let item = +prompt('Введите номер хода (1, 2, 3)')
    switch (item) {
      case 1:
        console.log(works.a00 + '\n' + answer[0])
        break
      case 2:
        console.log(works.b00 + '\n' + answer[1])
        break
      case 3:
        console.log(works.c00 + '\n' + answer[2])
        break
      default:
        break
    }
  } else {
    console.log('Пока')
  }
} while (lookAnswer == 1)

//------------------------------------------
function isAnswer(q, event) {
  if (isNaN(event) || !isFinite(event)) {
    alert('Вы ввели недопустимый символ')
    return false
  } else if (event < 1 || event > q) {
    alert('Ваше число выходит из допустимого диапозона')
    return false
  }
  return true
}
