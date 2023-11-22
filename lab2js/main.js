// Посилання
function showInfo() {
  alert("Посилання на сайт гугль");
}


// Обчислення
function calculate() {
  // Отримуємо числа
  var number1 = parseFloat(document.querySelector("input[name='number1']").value);
  var number2 = parseFloat(document.querySelector("input[name='number2']").value);

  // Отримуємо операцію
  var operation = document.querySelector("select[name='operation']").value;

  // Перевіряємо операцію
  if (operation === "sum") {
    var result = number1 + number2;
  } else if (operation === "difference") {
    var result = number1 - number2;
  } else if (operation === "product") {
    var result = number1 * number2;
  } else if (operation === "division") {
    var result = number1 / number2;
  } else {
    // Повідомляємо користувача про помилку
    alert("Неправильний вибір операції");
    return;
  }

  // Встановлюємо результат
  document.querySelector("#result").textContent = result;
}

  
  