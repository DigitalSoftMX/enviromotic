$(document).ready(function () {

    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
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


