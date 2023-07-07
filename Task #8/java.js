function displayCalendar(year, month) {
    var container = document.getElementById("calendarContainer");
    
    var numDays = new Date(year, month + 1, 0).getDate();

    var firstDay = new Date(year, month, 1).getDay();
    
    var calendarHTML = "<table class='calendar'>";
    calendarHTML += "<tr><th>Sunday</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th></tr>";
    
    var day = 1;
    
    for (var i = 0; i < 6; i++) {
      calendarHTML += "<tr>";
      
      for (var j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          calendarHTML += "<td></td>"; 
        } else if (day <= numDays) {
          var currentDate = new Date();
          
          if (currentDate.getFullYear() === year && currentDate.getMonth() === month && currentDate.getDate() === day) {
            calendarHTML += "<td class='current-day'>" + day + "</td>"; // Highlight the current day
          } else {
            calendarHTML += "<td>" + day + "</td>";
          }
          
          day++;
        } else {
          calendarHTML += "<td></td>"; 
        }
      }
      
      calendarHTML += "</tr>";
      
      if (day > numDays) {
        break;
      }
    }
    
    calendarHTML += "</table>";
    
    container.innerHTML = calendarHTML;
  }
  
  window.onload = function() {
    var currentDate = new Date();
    displayCalendar(currentDate.getFullYear(), currentDate.getMonth());
  }