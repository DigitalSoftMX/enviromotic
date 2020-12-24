$(function () {

    obtenerInformacionArticulo();
    obtenerlistaclaves(null);
    obtenerlistacontenido(null);
    obtenerlistaFamilia(null);
    obtenerlistaSubFamilia(null);
    obtenerlistaSubAreasArticuloRelacionales(null);
    obtenerlistaArticuloFamRelacionales(null);
    obtenerlistaSubArticuloFamRelacionales(null);
    function obtenerlistaclaves(id) {
        var idProd = (id === null) ? '' : '/' + id;
        if (id === null) {
            $.ajax({
                url: '../../ajax_listaAreas',
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
                                $("#area_id").val(select_val).change();
                                obtenerlistaSubAreas(select_val);
                                //obtenerFamiliaProducto(select_val);
                                // console.log(select_val);
                                
                            });
                    if (data.length > 1) {
                        $("#cat_area_id").val("-1").change();
                        $("#cat_sub_familia_articulo_id").val("-1").change();
                        //$("#catfamarticulo_id").val("-1").change();

                    }
                }
            });
        }
    }
    function obtenerlistaSubAreasArticuloRelacionales(id) {
        var idProd = (id === null) ? '' : '/' + id;
        if (id === null) {
            $.ajax({
                url: '../../SbAreaRelacionales',
                type: 'GET',
                dataType: 'json',
                data:{idArea: $("#area_id").val()},
                success: function (data) {
                    $("#cat_sub_area_id")
                            .html('')
                            .select2(
                                    {
                                        placeholder: {
                                            id: '-1',
                                            text: 'Seleccione una SubArea',
                                        },
                                        allowClear: true,
                                        data: data
                                    }
                            )
                            .on("select2:select", function (e) {
                                var select_val = $(e.currentTarget).val();
                                //obtenerlistacontenidoxIdProdAlmacen(select_val);
                                
                                
                            });

                    if (data.length > 1) {
                        $("#cat_area_id").val("-1").change();
                        $("#cat_sub_area_id").val("-1").change();
                        $("#catfamarticulo_id").val("-1").change();
                    }
                }
            });
        }
    }
    function obtenerlistaArticuloFamRelacionales(id) {
        var idProd = (id === null) ? '' : '/' + id;
        if (id === null) {
            $.ajax({
                url: '../../FamiliaRelacionales',
                type: 'GET',
                dataType: 'json',
                data:{idArea: $("#area_id").val(), idSubArea: $("#Sarea_id").val()},
                success: function (data) {
                    $("#catfamarticulo_id")
                            .html('')
                            .select2(
                                    {
                                        placeholder: {
                                            id: '-1',
                                            text: 'Seleccione una Familia',
                                        },
                                        allowClear: true,
                                        data: data
                                    }
                            )
                            .on("select2:select", function (e) {
                                var select_val = $(e.currentTarget).val();
                                
                                
                            });
                    if (data.length > 1) {
                        $("#cat_sub_area_id").val("-1").change();
                        $("#catfamarticulo_id").val("-1").change();

                    }
                }
            });
        }
    }
    function obtenerlistaSubArticuloFamRelacionales(id) {
        var idProd = (id === null) ? '' : '/' + id;
        if (id === null) {
            $.ajax({
                url: '../../SUbFamiliaArticuloRelacionales',
                type: 'GET',
                dataType: 'json',
                data:{idArea: $("#area_id").val(), idSubArea: $("#Sarea_id").val(), idFamilia: $("#fam_id").val()},
                success: function (data) {
                    $("#cat_sub_familia_articulo_id")
                            .html('')
                            .select2(
                                    {
                                        placeholder: {
                                            id: '-1',
                                            text: 'Seleccione SubFamilia Articulo',
                                        },
                                        allowClear: true,
                                        data: data
                                    }
                            )
                            .on("select2:select", function (e) {
                                var select_val = $(e.currentTarget).val();
                                
                                
                            });
                    if (data.length > 1) {
                        $("#cat_sub_area_id").val("-1").change();
                        $("#cat_sub_familia_articulo_id").val("-1").change();

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

    function obtenerlistaSubFamilia(id) {
            $("#cat_sub_familia_articulo_id")
                    .html('')
                    .select2(
                            {
                                placeholder: {
                                    id: '-1',
                                    text: 'Seleccione SubFamilia Articulo',
                                },
                                allowClear: true
                            }
                    );
        
        
    }

    function obtenerlistaSubAreas(id) {
       //alert("lista contenido por id almace");
        $.ajax({
            url: ($("#hdd_idRequisicion").val() === '0') ? '../../ajax_listaSubAreasR/' + id : '../../ajax_listaSubAreasR/'+id,
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
                                $("#Sarea_id").val(select_val).change()
                                obtenerFamiliaProducto(select_val);

                                
                            });
                    if (data.length > 0) {
                        $("#cat_sub_area_id").val("-1").change();
                        $("#catfamarticulo_id").val("-1").change();
                        $("#cat_sub_familia_articulo_id").val("-1").change();

                    }
            }

        });
    }

    function obtenerFamiliaProducto(id) {
        $.ajax({
            url: ($("#hdd_idRequisicion").val() === '0') ? '../../ajax_listaFamilia': '../../ajax_listaFamilia',
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
                                    
                                    'data': data

                                }
                        ).on("select2:select", function (e) {
                                var select_val = $(e.currentTarget).val();
                                $("#select2-cat_sub_area_id-container").val(select_val).change();
                                obtenerSubFamiliaArticulo(select_val);
                                $("#fam_id").val(select_val).change()
                                
                                
                            });
                        if (data.length > 0) {
                             //$("#fam_id").val(id).change();
                        $("#catfamarticulo_id").val("-1").change();
                        $("#cat_sub_familia_articulo_id").val("-1").change();

                    }
            }

        });
    }
    function obtenerSubFamiliaArticulo(id) {
        $.ajax({
            url: ($("#hdd_idRequisicion").val() === '0') ? '../../ajax_listaSubFamilia': '../../ajax_listaSubFamilia',
            type: 'POST',
            data: {idFamiliaR: id, _token: $("#_token").val(), idArea: $("#area_id").val(), idFamilia: $("#Sarea_id").val()},
            dataType: 'json',
            success: function (data) {
                $("#cat_sub_familia_articulo_id")
                        .html('')
                        .select2(
                                {
                                    placeholder: {
                                        id: '-1',
                                        text: 'Seleccione SubFamilia Articulo',
                                    },
                                    allowClear: true,
                                    'data': data
                                }
                        );
                        if (data.length > 0) {
                        $("#cat_sub_familia_articulo_id").val("-1").change();
                  }
             }
        });
    }

    function obtenerInformacionArticulo(id) {
        if ($("#hdd_idRequisicion").val() !== '0') {
            $.ajax({
                url: '../../Ajax_detalle_Arcticulo/' + $("#hdd_idRequisicion").val(),
                type: 'GET',
                data:{idArea: $("#id_area").val()},
                dataType: 'JSON',
                success: function (data) {
                    var traspaso = data.data;

                    $("#cat_area_id").val(traspaso[0].cat_area_id).change();
                    $("#cat_sub_area_id").val(traspaso[0].cat_sub_area_id).change();
                    $("#catfamarticulo_id").val(traspaso[0].catfamarticulo_id).change();
                    $("#cat_sub_familia_articulo_id").val(traspaso[0].cat_sub_familia_articulo_id).change();
                }
            });
        }
    }
});