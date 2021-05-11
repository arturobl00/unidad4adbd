 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBy6MZz_JABisvy0NOtKjcWH7roNRcnY5A",
    authDomain: "unidad4adbd.firebaseapp.com",
    databaseURL: "https://unidad4adbd-default-rtdb.firebaseio.com",
    projectId: "unidad4adbd",
    storageBucket: "unidad4adbd.appspot.com",
    messagingSenderId: "937125118150",
    appId: "1:937125118150:web:092c13783f33bf121017c7"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //obtener datos del html

  
  var txtUsuario = document.getElementById("usuario");
  var txtMensaje = document.getElementById("mensaje");
  var btnEnviar = document.getElementById("btnenviar");
  var chatlista = document.getElementById("chatlista");

  //Ejecutar accion en el boton
  btnEnviar.addEventListener("click",function(){
    var usuario = txtUsuario.value;
    var mensaje = txtMensaje.value;
    var html = "<li>"+usuario+" dice: "+mensaje+"</li>";

    chatlista.innerHTML += html;

    firebase.database().ref('chat').push({
        user: usuario,
        message: mensaje
    })
  });

  /*Mostrar datos*/
  firebase.database().ref('chat').on('value', (snapshot) => {
    var html1 = '';
    //console.log(snapshot.val());
    snapshot.forEach(function (e){
      var elemento = e.val();
      var usuario1 = elemento.user;
      var mensaje1 = elemento.message;
      html1 += "<li>"+usuario1+" dice: "+mensaje1+"</li>";
    });
    chatlista.innerHTML = html1;
  })