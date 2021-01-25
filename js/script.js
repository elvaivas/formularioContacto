$(document).ready(function(){
    
    $('#btnSend').click(function(){
        
        var errores = '';

        //Validando NOMBRE -------

        if($('#names').val() == ''){
            errores += '<p>Escriba un nombre</p>';
            $('#names').css("border-bottom-color", "#f14b4b")
        } else{
            $('#names').css("border-bottom-color", "#d1d1d1")
        }
    
        //Validando CORREO -------
        if($('#email').val() == ''){
            errores += '<p>Escriba un correo electronico</p>';
            $('#email').css("border-bottom-color", "#f14b4b")
        } else{
            $('#email').css("border-bottom-color", "#d1d1d1")
        }
        //Validando MENSAJE -------
        if($('#mensaje').val() == ''){
            errores += '<p>Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#f14b4b")
        } else{
            $('#mensaje').css("border-bottom-color", "#d1d1d1")
        }
    
        //ENVIANDO MENSAJE -------
        if(errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores Encontrados</h3>'+
                                            errores+
                                                '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'
            $('body').append(mensajeModal);
            
        }

        //CERRAR MODAL -------
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });
    });

});