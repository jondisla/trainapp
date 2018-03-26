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
  var database = firebase.database();

  // Initializing our click count at 0
  var clickCounter = 0;

  // Functions
  // ================================================================================

  // On Click
  $("#submit").on("click", function(event) {
    event.preventDefault();
    // Add 1 to clickCounter
    clickCounter++;

    // **** Store Click Data to Firebase in a JSON property called clickCount *****
    // **** Note how we are using the Firebase .set() method ****
    // **** .ref() refers to the path you want to save your data to
    // **** Since we left .ref() blank, it will save to the root directory
    database.ref().set({
      clickCount: clickCounter
    })})


    //using .on("value", function(snapshot)) syntax will retrieve the data
    //from the database (both initally and every time something changes)
    //This will then store tha data inside the variable "snapshot". We could rename "snapshot" to anything
    database.ref().on("value", function(snapshot) {

        //console.log the value of snapshot
        console.log('snapshot.val:', snapshot.val());

        $('#train-value').text(snapshot.val().clickCount);
        $('#destination-value').text(snapshot.val().clickCount);
        $('#frequency-value').text(snapshot.val().clickCount);
        $('#click-value').text(snapshot.val().clickCount);

    }, function(errorObject) {
        console.log("The read failed: " + errorObject.code)
        
    })