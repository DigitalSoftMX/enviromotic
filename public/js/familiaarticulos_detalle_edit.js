
$(document).ready(function () {

    toastr.options = {
        closeButton: true,
        progressBar: true,
        showMethod: 'slideDown',
        positionClass: "toast-top-full-width",
        timeOut: 4500
    };

    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green'
    });

    $(".touchspin1").TouchSpin({
        buttondown_class: 'btn btn-white',
        buttonup_class: 'btn btn-white'
    });


    var articulo = $("#url_lista_idarticulo_edit").val();
    var familia = $("#url_lista_idfamilia_edit").val();


    $.ajax({
        type: "GET",
        dataType: "json",
        url: $("#url_lista_familia").val() ,
        success: function (data) {
            var item = [];
            for (var i = 0, max = data.data.length; i < max; i++) {
                item.push({id: data.data[i].id, text: data.data[i].Descripcion});
            }

            $("#catfamarticulo_id")
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
            $("#catfamarticulo_id").val([familia]).change();

        }
    });

    $.ajax({
        type: "GET",
        dataType: "json",
        url: $("#url_lista_articulo").val() ,
        success: function (data) {
            var item = [];
            for (var i = 0, max = data.data.length; i < max; i++) {
                item.push({id: data.data[i].id, text: data.data[i].Descripcion});
            }

            $("#cat_clasificacion_articulo_id")
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

            $("#cat_clasificacion_articulo_id").val([familia]).change();

        }
    });


//EDIT

var area = $("#url_lista_idarea_edit").val();

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
            .on("select2:select", function (e) {
                var select_val = $(e.currentTarget).val();
                $('#cat_sub_area_id').attr('disabled', false);
                obtenerlistaarea(select_val);
            });
        if (data.data.length > 1) {

            $("#cat_area_id").val([area]).change();

        }

    }
});


var subarea = $("#url_lista_idsubarea_edit").val();


$.ajax({
    url: $("#url_lista_subareaedit").val(),
    data: {id: subarea, ids: area, _token: $("#_token").val()},
    type: "POST",
    dataType: "json",   
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
                    text: 'Seleccione area de origen'
                },
                allowClear: true,
                'data': item
            }
        ).on("select2:select", function (e) {
                var select_val = $(e.currentTarget).val();
                $('#cat_area_id').attr('disabled', false);
            });
        if (data.data.length > 1) {
            $("#cat_sub_area_id").val([subarea]).change();
        }
    }
});
});


function obtenerlistaarea(id) {

    //var content = $("#select-subarea").val();
    //if(content == null){
    $.ajax({
        url: $("#url_lista_concentradoarea").val(),
        data: {id: id, _token: $("#_token").val()},
        type: "POST",
        dataType: "json",
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
                        text: 'Seleccione area de origen'
                    },
                    allowClear: true,
                    'data' : item

                }
            )
            if(data.data.length > 1){
                $("#cat_sub_area_id").select2('val', item[0].id, true);

            }

        }
    });
    //}
}

function obtenerlistasubarea(id) {

    var content = $("#cat_area_id").val();
    if(content == null){
        $.ajax({
            url: $("#url_lista_concentradosubarea").val(),
            data: {id: id, _token: $("#_token").val()},
            type: "POST",
            dataType: "json",
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
                        'data' : item

                    }
                )
                if(data.data.length > 1){
                    $("#cat_area_id").select2('val', item[0].id, true);

                }
            }
        });

    }
}


function anular(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    return (tecla != 13);
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    console.log(evt.keyCode);
    if ((evt.shiftKey || (charCode < 48 || charCode > 57))) {

        return false;
    }
    return true;
}


function isDecimal(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    console.log(evt.keyCode);
    if(charCode == 46){
        return true;
    }
    if ((evt.shiftKey || (charCode < 48 || charCode > 57) )) {
        return false;
    }
    return true;
}


$('#porcentajePropina').keyup (function (e){


    var r = /^\d+(\.[0-9]{1,2})?$/;

    if(r.test(this.value)){
        if(this.value.length < 4){
            //toastr.error('', 'El valor debe contener dos decimales');
            //$(this).val('');
        }else{
            console.log(r.test(this.value));
        }
    }else{
        //toastr.error('', 'El valor debe contener dos decimales');
    }
});

