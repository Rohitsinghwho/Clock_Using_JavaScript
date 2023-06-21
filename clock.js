




// Getting Element from DOM 
let displayTime= document.getElementById('time');
let displayDate= document.getElementById('Date');
let a;
let times;
let Dates;
// Set interval so that the time and date gets updated
setInterval(() => {
    a=new Date();
    // Function to display time
     times= a.toLocaleTimeString()
    //   function to display Date
     Dates=a.toLocaleDateString();
//    Writing inside the HTML element
     displayTime.innerHTML= times ;
    displayDate.innerHTML= Dates;
}, 1000);