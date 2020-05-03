// based on Tom Spencer's tutorial

const setYear = (start, end) => {
  let years = "";
  for (let year = start; year <= end; year++) {                       
    years += "<option value='" + year + "'>" + year + "</option>";
  }
  return years;
}

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.querySelector("#year");
let selectMonth = document.querySelector("#month");


let createYear = setYear(2020, 2025);

document.querySelector("#year").innerHTML = createYear;

let calendar = document.querySelector("#calendar");
let lang = calendar.getAttribute("data-lang");

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let dayHeader = "<tr>";
for (day in days) {
  dayHeader += "<th data-days='" + days[day] + "'>" + days[day] + "</th>";
}
dayHeader += "</tr>";

document.querySelector("#theadMonth").innerHTML = dayHeader;

monthAndYear = document.querySelector("#monthYear");
showCalendar(currentMonth, currentYear);

const next = () => {
  currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentMonth, currentYear);
}

const previous = () => {
  currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
  currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
  showCalendar(currentMonth, currentYear);
}

const jump = () => {
  currentYear = parseInt(selectYear.value);
  currentMonth = parseInt(selectMonth.value);
  showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

  let firstDay = (new Date(year, month)).getDay();

  tbl = document.querySelector("#tbodyCalendar");

  tbl.innerHTML = "";

  monthAndYear.innerHTML = months[month] + " " + year;
  selectYear.value = year;
  selectMonth.value = month;

  let date = 1;
  for (let i = 0; i < 6; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        cell = document.createElement("td");
        cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (date > daysInMonth(month, year)) {
        break;
      } else {
        cell = document.createElement("td");
        cell.setAttribute("date", date);
        cell.setAttribute("month", month + 1);
        cell.setAttribute("year", year);
        cell.setAttribute("month_name", months[month]);
        cell.className = "pickDate";
        cell.innerHTML = "<span>" + date + "</span>";

        if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
          cell.className = "pickdate selected";
        }
        row.appendChild(cell);
        date++;
      }
    }
    tbl.appendChild(row);
  }
}
function daysInMonth(iMonth, iYear) {
  return 32 - new Date(iYear, iMonth, 32).getDate();
};
