$(document).ready(function(){
    $(".rodapes").hide();
    
    //$(".efeito").hide();
    //$(".efeitoNome").hide();




$(document).on("click","#camera",function(){

  navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI });

function onSuccess(imageURI) {
    var image = document.getElementById('imagem');
    image.src = imageURI;
    $(".rodapes").show();
    $(".foto").hide();
    
}

function onFail(message) {
    alert('falha por causa: ' + message);
}

  })

})
