 $(document).ready(function () {

 var usuarios = $("#id_users").val();

//Usuario
    $.ajax({                
        type: "GET",
        dataType: "json",
        url: "http://enviromotic.digitalsoftlealtad.com/public/selectusuarios",               
        success: function (data) {
            var item = [];
            for (var i = 0, max = data.data.length; i < max; i++) {
                item.push({id: data.data[i].id, text: data.data[i].name});
            }

            $("#id_users")
            .html('')
            .select2(
                    {
                        placeholder: {
                            id: '-1',
                            text: 'Seleccione'
                        },
                        allowClear: true,
                        'data': item
                    }
            )
                        $("#id_users").val([usuarios]).change();            
         }
    }); 
 
  var comes = $("#id_priority").val();

//Proviene
    $.ajax({                
        type: "GET",
        dataType: "json",
        url: "http://enviromotic.digitalsoftlealtad.com/public/selectpriority",               
        success: function (data) {
            var item = [];
            for (var i = 0, max = data.data.length; i < max; i++) {
                item.push({id: data.data[i].id, text: data.data[i].name});
            }

            $("#id_priority")
            .html('')
            .select2(
                    {
                        placeholder: {
                            id: '-1',
                            text: 'Seleccione'
                        },
                        allowClear: true,
                        'data': item
                    }
            )
                        $("#id_priority").val([priority]).change();            
         }
    }); 


   
    
       var userss = $("#id_user").val();
//Usuario Administrador
    $.ajax({                
        type: "GET",
        dataType: "json",
        url: "http://enviromotic.digitalsoftlealtad.com/public/selectusuario",               
        success: function (data) {
            var item = [];
            for (var i = 0, max = data.data.length; i < max; i++) {
                item.push({id: data.data[i].id, text: data.data[i].name});
            }

            $("#id_user")
            .html('')
            .select2(
                    {
                        placeholder: {
                            id: '-1',
                            text: 'Seleccione'
                        },
                        allowClear: true,
                        'data': item
                    }
            )
                        $("#id_user").val([userss]).change();            
         }
    }); 
    
    
    
    var type = $("#id_area").val();

//Tipo
    $.ajax({                
        type: "GET",
        dataType: "json",
        url: "http://enviromotic.digitalsoftlealtad.com/public/selectarea",               
        success: function (data) {
            var item = [];
            for (var i = 0, max = data.data.length; i < max; i++) {
                item.push({id: data.data[i].id, text: data.data[i].name});
            }

            $("#id_area")
            .html('')
            .select2(
                    {
                        placeholder: {
                            id: '-1',
                            text: 'Seleccione'
                        },
                        allowClear: true,
                        'data': item
                    }
            ) .on("select2:select", function (e) {
                var select_val = $(e.currentTarget).val();
                $('#id_area').attr('disabled', false);
                obtenerlistaalmacennombre(select_val);
            });
              if (data.data.length > 1) {
               $("#id_area").val('-1').change();
          }
         }
    }); 
    
    
        $.ajax({
        url: "http://enviromotic.digitalsoftlealtad.com/public/ajax_listaAreas/" + ids,               
        type: "GET",
        dataType: "json",
        success: function (data) {
            var item = [];
            for (var i = 0, max = data.data.length; i < max; i++) {
                item.push({id: data.data[i].id, text: data.data[i].name});
            }

            $("#id_userarea")
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
        }
    });


       var status = $("#id_status").val();

//Estatus
    $.ajax({                
        type: "GET",
        dataType: "json",
        url: "http://enviromotic.digitalsoftlealtad.com/public/selectstatus",               
        success: function (data) {
            var item = [];
            for (var i = 0, max = data.data.length; i < max; i++) {
                item.push({id: data.data[i].id, text: data.data[i].name});
            }

            $("#id_status")
            .html('')
            .select2(
                    {
                        placeholder: {
                            id: '-1',
                            text: 'Seleccione'
                        },
                        allowClear: true,
                        'data': item
                    }
            )
                        $("#id_status").val([status]).change();            
         }
    }); 



 var sex = $("#sex").val();

//Sexo
    $.ajax({                
        type: "GET",
        dataType: "json",
        url: "http://enviromotic.digitalsoftlealtad.com/public/selectsex",               
        success: function (data) {
            var item = [];
            for (var i = 0, max = data.data.length; i < max; i++) {
                item.push({id: data.data[i].id, text: data.data[i].name});
            }

            $("#sex")
            .html('')
            .select2(
                    {
                        placeholder: {
                            id: '-1',
                            text: 'Seleccione'
                        },
                        allowClear: true,
                        'data': item
                    }
            )
                        $("#sex").val([sex]).change();            
         }
    });     
    
    
      var active = $("#sex").val();

//Active
    $.ajax({                
        type: "GET",
        dataType: "json",
        url: "http://localhost/enviromotic/public/selectsex",               
        success: function (data) {
            var item = [];
            for (var i = 0, max = data.data.length; i < max; i++) {
                item.push({id: data.data[i].id, text: data.data[i].name_active});
            }

            $("#sex")
            .html('')
            .select2(
                    {
                        placeholder: {
                            id: '-1',
                            text: 'Seleccione'
                        },
                        allowClear: true,
                        'data': item
                    }
            )
                        $("#sex").val([active]).change();            
         }
    });
    
     
 
 });


function obtenerlistaalmacennombre(id) {

 $('#id_userarea').prop("disabled", false);
   
    //document.getElementById("#id_userarea").disabled = false;
     var ids = id;
    $.ajax({
        url: "http://enviromotic.digitalsoftlealtad.com/public/ajax_listaAreas/" + ids,               
        //data: {id: id},
        type: "GET",
        dataType: "json",
        success: function (data) {
            var item = [];
            for (var i = 0, max = data.data.length; i < max; i++) {
                item.push({id: data.data[i].id, text: data.data[i].name});
            }

            $("#id_userarea")
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
                $("#id_userarea").select2('val', item[0].id, true);
               
            }

        }
    });
    //}
}




