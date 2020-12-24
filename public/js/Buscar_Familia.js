$(function () {

    obtenerlistaclaves(null);
    obtenerlistacontenido(null);
    obtenerlistaFamilia(null);
    function obtenerlistaclaves(id) {
        var idProd = (id === null) ? '' : '/' + id;
        if (id === null) {
            $.ajax({
                url: '../ajax_listaAreasArticulo',
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    $("#cat_area_id")
                            .html('')
                            .select2(
                                    {
                                        placeholder: {
                                            id: '-1',
                                            text: 'Seleccione una Area',
                                        },
                                        allowClear: true,
                                        data: data
                                    }
                            )
                            .on("select2:select", function (e) {
                                var select_val = $(e.currentTarget).val();
                                //$("#select2-cat_sub_area_id-container").val(select_val).change();
                               // obtenerProductoxidProdAlmacen(select_val);
                                $("#area_id").val(select_val).change;
                                obtenerlistaSubAreas(select_val);
                                //obtenerFamiliaProducto(select_val);
                                // console.log(select_val);
                                
                            });
                    if (data.length > 1) {
                        $("#cat_area_id").val("-1").change();
                        $("#catfamarticulo_id").val("-1").change();

                        //$("#catfamarticulo_id").val("-1").change();

                    }
                }
            });
        } else {
            $.ajax({
                url: ($("#hdd_idRequisicion").val() === '0') ? '../ajax_listaAreasArticulo' + idProd : '../ajax_listaAreasArticulo' + idProd,
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    $("#cat_area_id")
                            .html('')
                            .select2(
                                    {
                                        placeholder: {
                                            id: '-1',
                                            text: 'Seleccione una clave',
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
                            $("#catfamarticulo_id").val("-1").change();
                             //$('#txt_cantidad_requisicion').val("0").change();
                        }
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

    function obtenerlistaFamilia(id) {
            $("#catfamarticulo_id")
                    .html('')
                    .select2(
                            {
                                placeholder: {
                                    id: '-1',
                                    text: 'Seleccione Familia Articulo',
                                },
                                allowClear: true
                            }
                    );
        
        
    }
    function obtenerlistaSubAreas(id) {
       //alert("lista contenido por id almace");
        $.ajax({
            url: ($("#hdd_idRequisicion").val() === '0') ? '../ajax_listaSubAreasRASFS/' + id : '../ajax_listaSubAreasRASFS/'+id,
            type: 'POST',
            data: {idSubArea: id, _token: $("#_token").val()},
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
                        ).on("select2:select", function (e) {
                                var select_val = $(e.currentTarget).val();
                                $("#select2-cat_sub_area_id-container").val(select_val).change();
                                obtenerFamiliaProducto(select_val);
                                
                            });
                    if (data.length > 1) {
                        $("#cat_sub_area_id").val("-1").change();
                        $("#catfamarticulo_id").val("-1").change();

                    }
            }

        });
    }

    function obtenerFamiliaProducto(id) {
        $.ajax({
            url: ($("#hdd_idRequisicion").val() === '0') ? '../ajax_listaFamiliaASFS': '../ajax_listaFamiliaASFS',
            type: 'POST',
            data: {idFamilia: id, _token: $("#_token").val(), idArea: $("#area_id").val()},
            dataType: 'json',
            success: function (data) {
                $("#catfamarticulo_id")
                        .html('')
                        .select2(
                                {
                                    placeholder: {
                                        id: '-1',
                                        text: 'Seleccione Familia Articulo',
                                    },
                                    allowClear: true,
                                    'data': data
                                }
                        );
                        if (data.length > 1) {
                        $("#catfamarticulo_id").val("-1").change();
                        //$("#catfamarticulo_id").val("-1").change();

                    }
            }

        });
    }

});