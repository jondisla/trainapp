$('document').ready(function(){

    // Initialize Firebase
    // This is the code we copied and pasted from our app page
var config = {
    apiKey: "AIzaSyCJM36jPMcT7EPKpmBg9im8xidQEQz2_Es",
    authDomain: "fir-project-62378.firebaseapp.com",
    databaseURL: "https://fir-project-62378.firebaseio.com",
    projectId: "fir-project-62378",
    storageBucket: "fir-project-62378.appspot.com",
    messagingSenderId: "916331995458"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database().ref();

  var train = $("#trainName").val().trim();
  var destination = $("#destination").val().trim();
  var time = $("#time").val().trim();
  var frequency = $("#frequency").val().trim();

  // Functions
  // ================================================================================

  // On Click
  $("#submit").on("click", function() {
    event.preventDefault();

    database.child("trains").push($("#trainName").val().trim())
    database.child("destination").set($("#destination").val().trim())
    database.child("time").set($("#time").val().trim())
    database.child("frequency").set($("#frequency").val().trim())
    })

    function addData() {

        // Deleting the carArray prior to adding new carArray
        // (this is necessary otherwise you will have repeat buttons)
        // $("#gifButton").empty();

        // Looping through the array of carArray

          // Then dynamicaly generating buttons for each userInput in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var table = $("#tableid").append('<tr><th>'+ train.val() + '</th></tr>');
          var root = firebase.database().ref().child("")
          // Adding a class of userInput-btn to our button
          a.addClass("userInput-btn");
          // Adding a data-attribute
          a.attr("data-name", carArray[i]);
          // Providing the initial button text
          a.text(carArray[i]);
          // Adding the button to the gifButton div
          $("#gifButton").append(a);
        }
      

      addData();

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // var name = "";
    // var email = "";
    // var age = 0;
    // var comment = "";

    // // Capture Button Click
    // $("#add-user").on("click", function(event) {
    //   event.preventDefault();

    //   // YOUR TASK!!!
    //   // Code in the logic for storing and retrieving the most recent user.
    //   // Don't forget to provide initial data to your Firebase database.
    //   name = $("#name-input").val().trim();
    //   email = $("#email-input").val().trim();
    //   age = $("#age-input").val().trim();
    //   comment = $("#comment-input").val().trim();

    //   // Code for the push
    //   database.ref().push({

    //     name: name,
    //     email: email,
    //     age: age,
    //     comment: comment,
    //     dateAdded: firebase.database.ServerValue.TIMESTAMP
    //   });
    // });

    // // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
    // database.ref().on("child_added", function(childSnapshot) {

    //   // Log everything that's coming out of snapshot
    //   console.log(childSnapshot.val().train);
    //   console.log(childSnapshot.val().name);
    //   console.log(childSnapshot.val().email);
    //   console.log(childSnapshot.val().age);

    //   // full list of items to the well
    //   $("#tableid").append("<div class='well'><span class='member-name'> " + childSnapshot.val().train +
    //     " </span><span class='member-email'> " + childSnapshot.val().email +
    //     " </span><span class='member-age'> " + childSnapshot.val().age +
    //     " </span><span class='member-comment'> " + childSnapshot.val().comment + " </span></div>");

    // // Handle the errors
    // }, function(errorObject) {
    //   console.log("Errors handled: " + errorObject.code);
    // });

    // database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {

    //   // Change the HTML to reflect
    //   $("#trainName").text(snapshot.val().name);
    //   $("#email-display").text(snapshot.val().email);
    //   $("#age-display").text(snapshot.val().age);
    //   $("#comment-display").text(snapshot.val().comment);
});