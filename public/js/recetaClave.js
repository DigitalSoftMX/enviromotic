$(document).ready(function () {
    $('#clave').change(function(){ 
        $.ajax({
            url: '../../ProductClave',
            type: 'POST',
            data: {_token: $('#_token').val() , id: $('#clave').val()},
            success: function(datosClave)
            {   
                var nomhtml='<select name="cat_producto_id" class="form-control" id="Nombre">';
                $.each( datosClave.nombre , function(index, val){
                     nomhtml += '<option value="'+index+'">'+val+'</option>';
                });
                nomhtml+='</select>';              
                $('#productoNom').html(nomhtml);
                console.log(datosClave.producto);
                $('#costoProd').val(datosClave.producto.precio);
                
                var tiphtml = '<select name="presentacion" id="presentacion" class="form-control">';
                $.each( datosClave.tipoPresentacion, function(index, val){
                        tiphtml += '<option value="'+index+'">'+val+'</option>';
                });
                tiphtml+='</select>'; 
                $('#TipoPresenta').html(tiphtml);

                var unmed =  '<select name="unidadMed" id="unidadMed" class="form-control">';
                $.each(datosClave.unidadMedida, function(index, value){
                         unmed += '<option value="'+index+'">'+value+'</option>'; 
                });
                $('#selectUnidad').html(unmed + '</select>');

                var  select = '<select id="contenido" name="contenido" class="form-control">';
                $.each(datosClave.cantidad, function(index, value){
                    select += '<option value="'+index+'">'+value+'</option>'; 
                });                    
                $('#selectCantidad').html(select + '</select>'); 

            }  
       });            
    });
});   