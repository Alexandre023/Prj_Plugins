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
