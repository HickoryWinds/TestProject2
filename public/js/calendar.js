$(document).ready(function(){

    // get stored events for a user
    $.get('/api/event_data').then(function(data){
        console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx')
        console.log(data);
        if (data.length !== 0) {

            for (var i = 0; i < data.length; i++) {
        
              var row = $("<div>");
              row.addClass("event");
        
              row.append("<p>On " + data[i].date + " At " + data[i].time + " Event " + data[i].event + "</p>");
            //   row.append("<p>At " + data[i].time + "</p>");
            //   row.append("<p>" + data[i].event + "</p>");
            //   row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
        
              $("#event-area").prepend(row);
            }
         }
    });
   
    var userId = '';
    $.get("/api/user_data").then(function(data) {
        userId = data.id;
        console.log('userIdxxx')
        console.log(userId)
    });
    // store a new event for the logged in user
    // When user clicks add-btn
    $("#event-submit").on("click", function(event) {
        event.preventDefault();

            
            // Make a newEvent object
            var newEvent = {
                time: $("#time").val().trim(),
                date: $("#date").val().trim(),
                event: $("#event").val().trim(),
                UserId: 5
                // UserId: userId
                //   created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };
    console.log('&&&&&&&&&&&&&&&&&')
    console.log(newEvent);
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newEvent)
      // On success, run the following code
      .then(function() {
  
        var row = $("<div>");
        row.addClass("event");
  
        row.append("<p>Date: " + newEvent.date + " Time: " + newEvent.time + "Event: " + newEvent.event + "</p>");
        // row.append("<p>" + newEvent.time + "</p>");
        // row.append("<p>" + newEvent.event + "</p>");
        // row.append("<p>At " + moment(newEvent.created_at).format("h:mma on dddd") + "</p>");
  
        $("#event-area").prepend(row);
  
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#time").val("");
    $("#date").val("");
    $("#event").val("");
  });

});