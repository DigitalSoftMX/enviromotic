$(function () {

    obtenerlistaclaves(null);
    obtenerlistacontenido(null);
       
    function obtenerlistaclaves(id) {
        var idProd = (id === null) ? '' : '/' + id;
        if (id === null) {
            $.ajax({
                url: '../ajax_listaAreasASFA',
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    $("#cat_area_id")
                            .html('')
                            .select2(
                                    {
                                        placeholder: {
                                            id: '-1',
                                            text: 'Seleccione la Area',
                                        },
                                        allowClear: true,
                                        data: data
                                    }
                            )
                            .on("select2:select", function (e) {
                                var select_val = $(e.currentTarget).val();
                                //$("#select2-cat_sub_area_id-container").val(select_val).change();
                                obtenerProductoxidProdAlmacen(select_val);
                                obtenerlistacontenidoxIdProdAlmacen(select_val);

                                 console.log(select_val);
                                
                            });
                    if (data.length > 1) {
                        $("#cat_area_id").val("-1").change();

                    }
                }
            });
        } else {
            $.ajax({
                url: ($("#hdd_idRequisicion").val() === '0') ? '../ajax_listaAreasASFA' + idProd : '../ajax_listaAreasASFA' + idProd,
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    $("#cat_area_id")
                            .html('')
                            .select2(
                                    {
                                        placeholder: {
                                            id: '-1',
                                            text: 'Seleccione la clave',
                                        },
                                        allowClear: true,
                                        data: data
                                    }
                            )
                            .on("select2:select", function (e) {
                                var select_val = $(e.currentTarget).val();
                                $("#cat_sub_area_id").val(select_val).change();
                                 //$('#txt_cantidad_requisicion').val("0").change();

                            });
                    if (data.length > 1) {
                        if ($("#hdd_idRequisicion").val() === '0') {
                            $("#cat_area_id").val("-1").change();
                             //$('#txt_cantidad_requisicion').val("0").change();
                        }
                    }
                }
            });
        }
    }


    function obtenerfamilia(id){
     var idProd = (id === null) ? '' : '/' + id;
        if (id === null) {
          $.ajax({
                url: '../catfamarticulo',
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    $("#cat_area_id")
                            .html('')
                            .select2(
                                    {
                                        placeholder: {
                                            id: '-1',
                                            text: 'Seleccione la Area',
                                        },
                                        allowClear: true,
                                        data: data
                                    }
                            )
                            .on("select2:select", function (e) {
                                var select_val = $(e.currentTarget).val();
                                //$("#select2-cat_sub_area_id-container").val(select_val).change();
                                obtenerProductoxidProdAlmacen(select_val);
                                obtenerlistacontenidoxIdProdAlmacen(select_val);

                                 console.log(select_val);
                                
                            });
                    if (data.length > 1) {
                        $("#cat_area_id").val("-1").change();

                    }
                }
            });
      }

    }

    function obtenerlistacontenido(id) {
       // alert(id);

            $("#cat_sub_area_id")
                    .html('')
                    .select2(
                            {
                                placeholder: {
                                    id: '-1',
                                    text: 'Seleccione la SubArea',
                                },
                                allowClear: true
                            }
                    );
        
        
    }

    function obtenerProductoxidProdAlmacen(id) {
        $.get('../ajax_listaSubAreasss/' + id, function (data) {

        });
    }

    function obtenerlistacontenidoxIdProdAlmacen(id) {
       //alert("lista contenido por id almace");
        $.ajax({
            url: ($("#hdd_idRequisicion").val() === '0') ? '../ajax_listaSubAreasASFA' : '../ajax_listaSubAreasASFA',
            type: 'POST',
            data: {idProducto: id, _token: $("#_token").val()},
            dataType: 'json',
            success: function (data) {
                $("#cat_sub_area_id")
                        .html('')
                        .select2(
                                {
                                    placeholder: {
                                        id: '-1',
                                        text: 'Seleccione la SubArea',
                                    },
                                    allowClear: true,
                                    'data': data
                                }
                        );
            }

        });
    }
    function obtenerInformacionTraspaso() {
        if ($("#hdd_idTraspaso").val() !== '0') {
            $.ajax({
                url: '../../ajax_detalle/' + $("#hdd_idTraspaso").val(),
                type: 'GET',
                dataType: 'JSON',
                success: function (data) {
                    var traspaso = data.traspaso;
                    $("#cat_area_id").val(traspaso[0].IdAlmacenDestino).change();
                    $("#cat_sub_area_id").val(traspaso[0].IdAlmacenOrigen).change();
                    
                }
            });
        }
    }

});
