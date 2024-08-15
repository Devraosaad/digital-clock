const clock = document.getElementById('clock')

//document.querySelector('#clock')
setInterval(function(){
    let date =  new Date()
console.log(date.toLocaleString());
clock.innerHTML = date.toLocaleString();
},1000)



























// <script>
// function updateClock() {
//     const now = new Date();
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const seconds = String(now.getSeconds()).padStart(2, '0');
//     const timeString = `${hours}:${minutes}:${seconds}`;

//     document.getElementById('clock').textContent = timeString;
// }

// setInterval(updateClock, 1000);
// updateClock(); // Initial call to display clock immediately
// </script>