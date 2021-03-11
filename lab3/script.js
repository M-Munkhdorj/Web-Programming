const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();

var calendar = {jan: {day1: "Сайхан амарна"}, 
                    feb: {day1: "Сагсны тэмцээнтэй", day3: "Шагнал гардуулна даа", day17: "Жавхлан багшийн лаб 2-ыг хийнэ"}, 
                    mar: {day2: "Энэ лабынхаа хугацааг сунгах уу яах вэ гэдэгээ шийднэ", day6: "Энд юу бичье дээ байз", day8: "Эмэгтэйчүүддээ баяр хүргэнэ дээ"}, 
                    apr: {day1: "Бүгдээрээ худлаа ярьцаагаагаарай"}, 
                    may: {day10: "Энэ сард ч ёстой юу ч болдоггүй сар даа"}, 
                    jun: {day6: "Жавхлан багшийн төрсөн өдөр"},  
                    jul: {day4: "Хичээл амарсаан ураа"}, 
                    aug: {day1: "Хөдөө явдаг цаг даа", day25: "Хичээл сонголт эхэллээ"}, 
                    sep: {day1: "9-н сарын нэгэн боллоо ерөөсөө бидний баяр даа"}, 
                    oct: {day13: "Сур сур бас дахин сур"}, 
                    nov: {day2: "Сурсаар л бай"}, 
                    dec: {day20: "Өвлийн семистер хаагдах нь дээ", day30: "Дүн гаргаж дууслаа баярлалаа баяртай"} }

const list = document.getElementById('list');

function setList(group){
    clearList();

    for(const day of group){
      const item = document.createElement('li');
      item.classList.add('list-group-item');
      const text = document.createTextNode(calendar.jan)
      item.appendChild(text);
      list.appendChild(item);
         }
    if(group.length === 0){
      setNoResult();
    }
}

function clearList(){
    while(list.firstChild){
      list.removeChild(list.firstChild);
    }
}

function setNoResult() {
        const item = document.createElement('li');
      item.classList.add('list-group-item');
      const text = document.createTextNode('no result')
      item.appendChild(text);
      list.appendChild(item);
}

function getRelevancy(value, searchTerm){
    if(value === searchTerm){
      return 2;
    }
    else if(value.startsWith(searchTerm)){
      return 1;
    }
    else{
      return 0;
    }
}

const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (event) =>{
  let value = event.target.value;
  if(value && value.trim.length > 0){
      value = value.trim().toLowerCase();
      setList(calendar.filter(day =>{
        return calendar[i].includes(value);
        
      }).sort((dayA, dayB) =>{
        return getRelevancy(dayA.jan, value) - getRelevancy(dayAjan, value);
      }))
  }
  else {
    clearList();
  }
})