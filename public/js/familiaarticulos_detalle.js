
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
                        text: 'Seleccione la familia'
                    },
                    allowClear: true,
                    'data': item
                }
            )

            $("#catfamarticulo_id").val('-1').change();
  
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
                        text: 'Seleccione el articulo'
                    },
                    allowClear: true,
                    'data': item
                }
            )

            $("#cat_clasificacion_articulo_id").val('-1').change();

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



