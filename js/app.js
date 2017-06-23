  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAKLv-ecHmJek66cpi96ZucfOAMFMh5m0E",
    authDomain: "dfrio2017.firebaseapp.com",
    databaseURL: "https://dfrio2017.firebaseio.com",
    projectId: "dfrio2017",
    storageBucket: "dfrio2017.appspot.com",
    messagingSenderId: "34296415824"
  };

  firebase.initializeApp(config);

  function writeUserData(email) {
    var email = $("#mce-EMAIL").val();
    firebase.database().ref('emails').push({
      email: email
    });

    var jPopupDemo = new jPopup({
      contentHtml: '<strong>Pronto!</strong>\
              <p>Assim que as inscrições abrirem você ficará por dentro!</p>'
    });

    $("#mce-EMAIL").val("");
  }
