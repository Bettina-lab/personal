function getDate() {

  var time = new Date();
  var year = time.getFullYear();

  var day = time.getDate();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "Septeber", "October", "November", "December"];
  var month = monthNames[time.getMonth()];



  if (day.toString().length === 1) {
    day = '0' + day;
  }


  if (hour.toString().length === 1) {
    hour = '0' + hour;
  }


  if (minute.toString().length === 1) {
    minute = '0' + minute;
  }


  if (second.toString().length === 1) {
    second = '0' + second;
  }



  var date = year + '.' + month + '.' + day;
  var time = hour + ":" + minute + ":" + second;

  var dateTime = `${date} ~ ${time}`;
  return dateTime;

};


setInterval(function () {
  currentTime = getDate();
  document.getElementById("current-time").innerHTML = currentTime;
}, 1000);



const toggleModal = () => {
  document.querySelector('.modal').classList.toggle('modal--hidden');
};

document.querySelector('#show-modal').addEventListener('click', toggleModal);

document.querySelector("#main-page").
addEventListener('submit', event => {
  event.preventDefault();
  toggleModal();
});

document.querySelector('#close-btn').addEventListener('click', toggleModal);