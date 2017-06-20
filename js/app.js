  // Initialize Firebase
  var config = {

    //TODO: Atualizar pelos dados do firebase da conta do devfest ou gdgrio
    apiKey: "apiKey",
    authDomain: "authDomain",
    databaseURL: "databaseURL",
    projectId: "projectId",
    storageBucket: "storageBucket",
    messagingSenderId: "messagingSenderId"
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
