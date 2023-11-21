// Визначення масивів

let exhibitions = [];
let today = new Date();

// Функція для отримання кількості днів, що залишилися до заданої дати

function getDaysLeft(date) {
  let diff = date - today;
  return Math.round(diff / (1000 * 3600 * 24));
}

// Функція для додавання виставки

function add() {
    let theme = document.getElementById("theme").value;
    let place = document.getElementById("place").value;
    let organizer = document.getElementById("organizer").value;
    let startDateStr = document.getElementById("startDate").value;
    let endDateStr = document.getElementById("endDate").value;
  
    // Перевірка на правильність введених даних
  
    if (theme === "") {
      alert("Необхідно вказати тематику виставки");
      return;
    }
    if (place === "") {
      alert("Необхідно вказати місце проведення виставки");
      return;
    }
  
    let startDate = new Date(Date.parse(startDateStr));
    let endDate = new Date(Date.parse(endDateStr));
  
    // Перевірка коректності введених дат
  
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      alert("Некоректно введена дата");
      return;
    }
  
    // Додавання виставки до масиву
  
    exhibitions.push({
      theme: theme,
      place: place,
      organizer: organizer,
      startDate: startDate,
      endDate: endDate,
    });
  
    // Оновлення таблиці
  
    result();
  }

// Функція для виведення інформації про виставки

// Функція для додавання виставки

function add() {
    let theme = document.getElementById("theme").value;
    let place = document.getElementById("place").value;
    let organizer = document.getElementById("organizer").value;
    let startDate = new Date(document.getElementById("startDate").value);
    let endDate = new Date(document.getElementById("endDate").value);
  
    // Перевірка на правильність введених даних
  
    if (theme === "") {
      alert("Необхідно вказати тематику виставки");
      return;
    }
    if (place === "") {
      alert("Необхідно вказати місце проведення виставки");
      return;
    }
    if (startDate > endDate) {
      alert("Дата початку не може бути пізніше за дату закінчення");
      return;
    }
  
    // Додавання виставки до масивів
  
    exhibitions.push({
      theme: theme,
      place: place,
      organizer: organizer,
      startDate: startDate,
      endDate: endDate,
    });
  
    // Оновлення таблиці
  
    result();
  }
  
  // Оновлена функція result
  
  function result() {
    let html = "";
    html += "<table style='table; background:oldlace;'>";
    html += "<tr><td>Тематика</td>" +
            "<td>Місце проведення</td>" +
            "<td>Організатор</td>" +
            "<td>Дата початку</td>" +
            "<td>Дата закінчення</td>" +
            "<td>Дні до початку</td>" +
            "<td>Дні до закінчення</td>" +
            "<td>Сьогодні проводиться?</td>";
  
    for (let i = 0; i < exhibitions.length; i++) {
      let exhibition = exhibitions[i];
  
      // Визначення кількості днів, що залишилися до початку виставки
  
      let daysLeftStart = getDaysLeft(exhibition.startDate);
  
      // Визначення кількості днів, що залишилися до закінчення виставки
  
      let daysLeftEnd = getDaysLeft(exhibition.endDate);
  
      // Визначення, чи проводиться виставка сьогодні
  
      let isToday = today >= exhibition.startDate && today <= exhibition.endDate;
  
      html += "<tr>";
      html += "<td>" + exhibition.theme + "</td>";
      html += "<td>" + exhibition.place + "</td>";
      html += "<td>" + (exhibition.organizer || "Не вказано") + "</td>";
      html += "<td>" + exhibition.startDate.toISOString().slice(0, 10) + "</td>";
      html += "<td>" + exhibition.endDate.toISOString().slice(0, 10) + "</td>";
  
      // Перевірка кількості днів до початку виставки
  
      if (daysLeftStart < 0) {
        html += "<td>Почалося</td>";
      } else {
        html += "<td>" + daysLeftStart + "</td>";
      }
  
      // Перевірка кількості днів до закінчення виставки
  
      if (daysLeftEnd < 0) {
        html += "<td>Завершено</td>";
      } else {
        html += "<td>" + daysLeftEnd + "</td>";
      }
  
      // Визначення, чи проводиться виставка сьогодні
  
      html += "<td>" + (isToday ? "Так" : "Ні") + "</td>";
  
      
  
      html += "</tr>";
    }
  
    html += "</table>";
    document.getElementById("finish").innerHTML = html;
  }
  
  
  
  
  
  

