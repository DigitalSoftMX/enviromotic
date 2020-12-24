

 $(document).ready(function () {

    var sex = $("#sex").val();
    //alert(sex);
     
//ADD
    $.ajax({                
        type: "GET",
        dataType: "json",
        url: selectarea,                
        success: function (data) {
            var item = [];
            for (var i = 0, max = data.data.length; i < max; i++) {
                item.push({id: data.data[i].id, text: data.data[i].Descripcion});
            }

            $("#sex")
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
            
                      $("#cat_area_id").val('-1').change();
                      
         }
    });



    $.ajax({                
        type: "GET",
        dataType: "json",
        url: $("#url_lista_subarea").val(),                
        success: function (data) {
            var item = [];
            for (var i = 0, max = data.data.length; i < max; i++) {
                item.push({id: data.data[i].id, text: data.data[i].Descripcion});
            }

            $("#cat_sub_area_id")
            .html('')
            .select2(
                    {
                        placeholder: {
                            id: '-1',
                            text: 'Seleccione subarea de origen'
                        },
                        allowClear: true,
                        'data': item
                    }
            )
                      $("#cat_sub_area_id").val('-1').change();
        }
    });


//EDIT
      
      $.ajax({                
        type: "GET",
        dataType: "json",
        url: $("#url_lista_areaedit").val() ,                
        success: function (data) {
            var item = [];
            for (var i = 0, max = data.data.length; i < max; i++) {
                item.push({id: data.data[i].id, text: data.data[i].Descripcion});
            }

            $("#cat_area_id")
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
     
                        $("#cat_area_id").val([area]).change();
                    
         }
    });


    var subarea = $("#url_lista_idsubarea_edit").val();
     

    $.ajax({                
        type: "POST",  
        dataType: "json",
        url: $("#url_lista_subareaedit").val(),
        data: {id: subarea, _token: $("#_token").val()},             
        success: function (data) {
            var item = [];
            for (var i = 0, max = data.data.length; i < max; i++) {
                item.push({id: data.data[i].id, text: data.data[i].Descripcion});
            }

            $("#cat_sub_area_id")
            .html('')
            .select2(
                    {
                        placeholder: {
                            id: '-1',
                            text: 'Seleccione subarea de origen'
                        },
                        allowClear: true,
                        'data': item
                    }
            )
            
              $("#cat_sub_area_id").val([subarea]).change();

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



