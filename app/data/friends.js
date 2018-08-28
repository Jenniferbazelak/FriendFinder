
var friends = [];

    $("#submit-btn").on("click", function(event) {
      event.preventDefault();
        
      var newUser = {
        name: $("#name").val().trim(),
        photo: $("#photo").val(),
        answers: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()]
        
      };


      $("#name").val(""); 
      $("#photo").val("");
      $("#q1").val("");
      $("#q2").val("");
      $("#q3").val("");
      $("#q4").val("");
      $("#q5").val("");
      $("#q6").val("");
      $("#q7").val("");
      $("#q8").val("");
      $("#q9").val("");
      $("#q10").val("");


      $.post("/api/data/friends", newUser)
        .then(function(data) {
          // accept t or f then populate the modal
        });

    });
