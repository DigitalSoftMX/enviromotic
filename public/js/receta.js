 $(document).ready(function () {

     $('#Nombre').change(function(){

            $.ajax({
                url: '../../articuloDatos',
                type: 'POST',
                data: {_token: $('#_token').val() , id: $('#Nombre').val()},
                success: function(datos) {

                      var nomhtml = '';  
                      if(datos.tamano > 1){
                        nomhtml='<select name="nombre" class="form-control" id="clave"><option value=""> Seleccione una opción </option>';   
                      }else{
                        nomhtml='<select name="nombre" class="form-control" id="clave">';   
                      }

                      $.each( datos.nombre , function(index, val){
                         nomhtml += '<option value="'+index+'">'+val+'</option>';
                      });               
                      nomhtml+='</select>';              
                      $('#NombreHtml').html(nomhtml);
                      $('#costoProd').val(datos.producto.precio);

                      // Tamaño igual a 1
                      if(datos.tamano == 1){
                          $.ajax({
                              url: '../../productoDatos',
                              type: 'POST',
                              data: {_token: $('#_token').val() , id: $('#clave').val()},
                                    success: function(datosClave)
                                    { 
                                      var size = Object.keys(datosClave.tipoPresentacion).length;
                                      var sizeUM = Object.keys(datosClave.unidadMedida).length;
                                      var tiphtml = '';
                                      if(size > 1)
                                      {
                                       tiphtml='<select name="presentacion" id="presentacion" class="form-control"><option value=""> Seleccione una opción </option>';
                                      }else{
                                        tiphtml='<select name="presentacion" id="presentacion" class="form-control">';
                                      }
                                      $.each( datosClave.tipoPresentacion, function(index, val){
                                          tiphtml += '<option value="'+index+'">'+val+'</option>';
                                      });
                                      tiphtml+='</select>';                                      
                                      $('#TipoPresenta').html(tiphtml);
                                      
                                      
                                     
                                    
                                      if(sizeUM > 1){
                                          option =  '<select name="unidadMed" id="unidadMed" class="form-control"><option> Seleccione una opción </option>';
                                      }else{
                                           option =  '<select name="unidadMed" id="unidadMed" class="form-control">';
                                      }
                                      $.each(datosClave.unidadMedida, function(index, value){
                                               option += '<option value="'+index+'">'+value+'</option>'; 
                                      });
                                      $('#selectUnidad').html(option + '</select>');

                                      if(sizeUM > 1)
                                      {
                                        $('#unidadMed').change(function(){
                                           $.ajax({
                                                  url: '../../cantidadReceta',
                                                  type: 'POST',
                                                  data: { _token: $('#_token').val() , tipoPresentacion: $('#presentacion').val(), unidadMedida: $('#unidadMed').val(), id: $('#clave').val() }, 
                                                  success: function(datOE) {
                                                       var tam = Object.keys(datOE).length;
                                                        var select = '';
                                                          if(tam > 1){
                                                              select = '<select id="contenido" name="contenido" class="form-control"><option> Seleccione una opción </option>';
                                                          }else{
                                                              select = '<select id="contenido" name="contenido" class="form-control">';
                                                          }
                                                         

                                                          $.each(datOE.cantidad, function(index, value){
                                                            select += '<option value="'+index+'">'+value+'</option>'; 
                                                          });                    
                                                          $('#selectCantidad').html(select + '</select>'); 
                                                          
                                                          console.log('DO:  \n' + datOE);
                                                  }                                 
                                              });
                                          });
                                      }
                                   
                                      else{
                                            $.ajax({
                                                  url: '../../cantidadReceta',
                                                  type: 'POST',
                                                  data: { _token: $('#_token').val() , tipoPresentacion: $('#presentacion').val(), unidadMedida: $('#unidadMed').val(), id: $('#clave').val() }, 
                                                  success: function(datOE) {
                                                      var tam = Object.keys(datOE).length; 
                                                      var select = '';
                                                      if(tam > 1){
                                                            select = '<select id="contenido" name="contenido" class="form-control"><option> Seleccione una opción </option>';
                                                      }else{
                                                            select = '<select id="contenido" name="contenido" class="form-control">';
                                                      }
                                                       

                                                      $.each(datOE.cantidad, function(index, value){
                                                          select += '<option value="'+index+'">'+value+'</option>'; 
                                                      });                    
                                                      $('#selectCantidad').html(select + '</select>'); 
                                                        
                                                      console.log('DO:  \n' + datOE);
                                                  }                                 
                                            });
                                      }

                                    }
                          });
                      }

                      //Tamaño igual a 2   
                      else{
                        $('#clave').change(function(){ 
                            $.ajax({
                                url: '../../productoDatos',
                                type: 'POST',
                                data: {_token: $('#_token').val() , id: $('#clave').val()},
                                success: function(datosClave)
                                {   
                                    
                                    var size = Object.keys(datosClave.tipoPresentacion).length;
                                    var sizeUM = Object.keys(datosClave.unidadMedida).length;
                                    var tiphtml = '';
                                    if(size > 1)
                                    {
                                     tiphtml='<select name="presentacion" id="presentacion" class="form-control"><option value=""> Seleccione una opción </option>';
                                    }else{
                                      tiphtml='<select name="presentacion" id="presentacion" class="form-control">';
                                    }
                                    $.each( datosClave.tipoPresentacion, function(index, val){
                                        tiphtml += '<option value="'+index+'">'+val+'</option>';
                                    });
                                    tiphtml+='</select>';                                      
                                    $('#TipoPresenta').html(tiphtml);

                                    if(sizeUM > 1)
                                    {
                                        option =  '<select name="unidadMed" id="unidadMed" class="form-control"><option> Seleccione una opción </option>';
                                    }else
                                    {
                                         option =  '<select name="unidadMed" id="unidadMed" class="form-control">';
                                    }
                                    $.each(datosClave.unidadMedida, function(index, value){
                                             option += '<option value="'+index+'">'+value+'</option>'; 
                                    });
                                    $('#selectUnidad').html(option + '</select>');

                                    if(sizeUM > 1)
                                    {
                                      $('#unidadMed').change(function(){
                                         $.ajax({
                                                url: '../../cantidadReceta',
                                                type: 'POST',
                                                data: { _token: $('#_token').val() , tipoPresentacion: $('#presentacion').val(), unidadMedida: $('#unidadMed').val(), id: $('#clave').val() }, 
                                                success: function(datOE) {
                                                   var tam = Object.keys(datOE).length; 
                                                   var select = '';
                                                    if(tam > 1){
                                                        select = '<select id="contenido" name="contenido" class="form-control"><option> Seleccione una opción </option>';
                                                    }else{
                                                        select = '<select id="contenido" name="contenido" class="form-control">';
                                                    }
                                                   

                                                    $.each(datOE.cantidad, function(index, value){
                                                      select += '<option value="'+index+'">'+value+'</option>'; 
                                                    });                    
                                                    $('#selectCantidad').html(select + '</select>'); 
                                                    
                                                    console.log('DO:  \n' + datOE);
                                                }                                 
                                            });
                                        });
                                    }else{
                                          $.ajax({
                                                url: '../../cantidadReceta',
                                                type: 'POST',
                                                data: { _token: $('#_token').val() , tipoPresentacion: $('#presentacion').val(), unidadMedida: $('#unidadMed').val(), id: $('#clave').val() }, 
                                                success: function(datOE) {
                                                    var tam = Object.keys(datOE).length;
                                                    var select = '';
                                                    if(tam > 1){
                                                        select = '<select id="contenido" name="contenido" class="form-control"><option> Seleccione una opción </option>';
                                                    }else{
                                                        select = '<select id="contenido" name="contenido" class="form-control">';
                                                    }
                                                   

                                                    $.each(datOE.cantidad, function(index, value){
                                                      select += '<option value="'+index+'">'+value+'</option>'; 
                                                    });                    
                                                    $('#selectCantidad').html(select + '</select>'); 
                                                    
                                                    console.log('DO:  \n' + datOE);
                                                }                                 
                                          });
                                    }

                                }
                            });
                          });
                       
                      } 
                   


                }  

        });
     }); 
}); 