$(document).on("click", "#alerta", function(){
  navigator.notification.alert("Minha mensagem",null,"Aviso!","Sim");
});

$(document).on("click", "#confirm", function(){
  function confirma(buttonIndex){
    if(buttonIndex == 1){
      navigator.notification.alert("Você escolheu a opção A",null,"Aviso!","Ok");
    }else{
      navigator.notification.alert("Você escolheu a opção B",null,"Aviso!","Ok");
    }
  }

  navigator.notification.confirm("Escolha A ou B",confirma,"Escolha:",['A','B']);
});

$(document).on("click", "#beep", function(){
  navigator.notification.beep(2);
});

$(document).on("click", "#vibration", function(){
  navigator.vibrate(700);
});

function mostraMapa(lat,long){
  L.mapquest.key = 'GFc5oxiLfJhZkycazAjjAfpt42zNsWEV';

        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 18
        });

        map.addControl(L.mapquest.control());
}

$(document).on("click", "#local", function(){
  var onSuccess = function(position) {
    mostraMapa(position.coords.latitude,position.coords.longitude);
      
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});