//function clock(){
//var today = new Date();
//var h = today.getHours();
//var m = today.getMinutes();
//var s = today.getSeconds();
//m = checkTime(m);
//s = checkTime (s);
 // document.getElementById("main").innerHTML = h+m+s;

  //var t = setTimeout(clock, 500);
//}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    // s = message(s);
   var classHours = document.getElementsByClassName('hours')
    classHours[0].innerHTML = h + ":";
var classMinutes = document.getElementsByClassName('minutes')
    classMinutes[0].innerHTML = m + ":";
var classSeconds = document.getElementsByClassName('seconds')
    classSeconds[0].innerHTML = s ;

function message(){
    var mes = "you are dieing slowly";
    var message = document.getElementsByClassName('message')
    message[0].innerHTML = mes;
    console.log("check")    
}

// function messageoff(){
// if (mes > 1000){
// var mes = "         ";
//     var message = document.getElementsByClassName('message')
//     message[0].innerHTML = mes;
//     console.log("check")
//     }


  
var t = setTimeout(startTime, 500 );

    
}



function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

// function messageTwo(){
//      var mesTwo = "you are still dieing slowly"
//      var messageTwo = document.getElementsByClassName('message')
//     messageTwo[0].innerHTML = mesTwo;
// }
  
// var mesTwo = setTimeout(message,2000);

