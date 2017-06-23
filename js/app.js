  // Initialize Firebase
  var config = {

    //TODO: Atualizar pelos dados do firebase da conta do devfest ou gdgrio
    apiKey: "AIzaSyBTfT1sRCmXK4PAfq9SmFOE6zXArlfZ7_Y",
    authDomain: "dfrio-3ab08.firebaseapp.com",
    databaseURL: "https://dfrio-3ab08.firebaseio.com",
    projectId: "dfrio-3ab08",
    storageBucket: "dfrio-3ab08.appspot.com",
    messagingSenderId: "263686375294"
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
