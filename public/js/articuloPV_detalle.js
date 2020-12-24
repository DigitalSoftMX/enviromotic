$(document).ready(function () {

    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });


//ADD


 $.ajax({                
        type: "GET",
        dataType: "json",
        url: $("#url_lista_articulo").val() ,                
        success: function (data) {
            var item = [];
            for (var i = 0, max = data.data.length; i < max; i++) {
                item.push({id: data.data[i].id, text: data.data[i].articulo});
            }

            $("#cat_articulo_id")
            .html('')
            .select2(
                    {
                        placeholder: {
                            id: '-1',
                            text: 'Seleccione area de origen'
                        },
                        allowClear: true,
                        'data': item
                    }
            )

            .on("select2:select", function (e) {
                var select_val = $(e.currentTarget).val();
                $('#cat_articulo_name').attr('disabled', false);
                obtenerlistaalmacen(select_val);
            });
        if (data.data.length > 1) {

            $("#cat_articulo_id").val('-1').change();

        }


            
                      
         }
    });


$.ajax({                
        type: "GET",
        dataType: "json",
        url: $("#url_lista_articuloname").val() ,                
        success: function (data) {
            var item = [];
            for (var i = 0, max = data.data.length; i < max; i++) {
                item.push({id: data.data[i].id, text: data.data[i].nombre});
            }
            $("#cat_articulo_name")
            .html('')
            .select2(
                    {
                        placeholder: {
                            id: '-1',
                            text: 'Seleccione area de origen'
                        },
                        allowClear: true,
                        'data': item
                    }
            )
             .on("select2:select", function (e) {
                var select_val = $(e.currentTarget).val();
                $('#cat_articulo_name').attr('disabled', false);
                obtenerlistaalmacennombre(select_val);
            });
              if (data.data.length > 1) {
               $("#cat_articulo_name").val('-1').change();
          }
                      
         }
    });


 $.ajax({                
        type: "GET",
        dataType: "json",
        url: $("#url_lista_almacen").val() ,                
        success: function (data) {
            var item = [];
            for (var i = 0, max = data.data.length; i < max; i++) {
                item.push({id: data.data[i].id, text: data.data[i].Descripcion});
            }
            $("#cat_almacen_id")
            .html('')
            .select2(
                    {
                        placeholder: {
                            id: '-1',
                            text: 'Seleccione area de origen'
                        },
                        allowClear: true,
                        'data': item
                    }
            )     
             $("#cat_almacen_id").val('-1').change();
                      
         }
    });

//EDIT

var id_edit = $("#url_lista_area").val();
    
     $.ajax({                
        type: "GET",
        dataType: "json",
        url: $("#url_lista_articulo").val() ,                
        success: function (data) {
            var item = [];
            for (var i = 0, max = data.data.length; i < max; i++) {
                item.push({id: data.data[i].id, text: data.data[i].articulo});
            }

            $("#cat_articulo_id_edit")
            .html('')
            .select2(
                    {
                        placeholder: {
                            id: '-1',
                            text: 'Seleccione area de origen'
                        },
                        allowClear: true,
                        'data': item
                    }
            )
            $("#cat_articulo_id_edit").val([id_edit]).change();           
         }
    });


var id_edit_almacen = $("#url_lista_almacen_id").val();
    
     $.ajax({                
        type: "GET",
        dataType: "json",
        url: $("#url_lista_almacen").val() ,                
        success: function (data) {
            var item = [];
            for (var i = 0, max = data.data.length; i < max; i++) {
                item.push({id: data.data[i].id, text: data.data[i].Descripcion});
            }

            $("#cat_almacen_id_edit")
            .html('')
            .select2(
                    {
                        placeholder: {
                            id: '-1',
                            text: 'Seleccione area de origen'
                        },
                        allowClear: true,
                        'data': item
                    }
            )
            $("#cat_almacen_id_edit").val([id_edit_almacen]).change();           
         }
    });



 });



function obtenerlistaalmacen(id) {

    var id = $("#cat_articulo_id").val();
     
    //if(content == null){
    $.ajax({
        url: $("#url_lista_concentradoalmacen").val(),
        data: {id: id, _token: $("#_token").val()},
        type: "POST",
        dataType: "json",
        success: function (data) {
            var item = [];
            for (var i = 0, max = data.data.length; i < max; i++) {
                item.push({id: data.data[i].id, text: data.data[i].nombre});
            }

            $("#cat_articulo_name")
                .html('')
                .select2(
                {
                    placeholder: {
                        id: '-1',
                        text: 'Seleccione area de origen'
                    },
                    allowClear: true,
                    'data' : item

                }
            )
            if(data.data.length > 1){
                $("#cat_articulo_name").select2('val', item[0].id, true);

            }

        }
    });
    //}
}



function obtenerlistaalmacennombre(id) {

    var id = $("#cat_articulo_name").val();
     
    //if(content == null){
    $.ajax({
        url: $("#url_lista_concentradoalmacen").val(),
        data: {id: id, _token: $("#_token").val()},
        type: "POST",
        dataType: "json",
        success: function (data) {
            var item = [];
            for (var i = 0, max = data.data.length; i < max; i++) {
                item.push({id: data.data[i].id, text: data.data[i].articulo});
            }

            $("#cat_articulo_id")
                .html('')
                .select2(
                {
                    placeholder: {
                        id: '-1',
                        text: 'Seleccione area de origen'
                    },
                    allowClear: true,
                    'data' : item

                }
            )
            if(data.data.length > 1){
                $("#cat_articulo_id").select2('val', item[0].id, true);

            }

        }
    });
    //}
}

 


     function anular(e) {
          tecla = (document.all) ? e.keyCode : e.which;
          return (tecla != 13);
     }

     function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;

        if ((evt.shiftKey || (charCode < 48 || charCode > 57))) {

        return false;
    }
    return true;

}



