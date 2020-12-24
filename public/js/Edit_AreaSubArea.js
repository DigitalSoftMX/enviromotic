$(function () {
     obtenerInformacionTraspaso();
     obtenerlistaclaves(null);
     obtenerlistacontenido(null);
     obtenerlistaSubAreas(null);
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
                                //obtenerProductoxidProdAlmacen(select_val);
                                obtenerlistacontenidoxIdProdAlmacen(select_val);
                                //obtenerInformacionTraspaso(select_val);
 
                                 console.log(select_val);
                                
                            });
                    //$("#cat_area_id").val(id).change();
                    if (data.length > 1) {
                        $("#cat_area_id").val("-1").change();

                    }
                }
            });
        }
    }
    function obtenerlistaSubAreas(id) {
        var idProd = (id === null) ? '' : '/' + id;
        if (id === null) {
            $.ajax({
                url: '../../SbArea',
                type: 'GET',
                dataType: 'json',
                data:{idArea: $("#id_area").val()},
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
                    $("#cat_sub_area_id").val(id).change();
                    if (data.length > 1) {
                        $("#cat_sub_area_id").val("-1").change();

                    }
                }
            });
        }
    }
    function obtenerlistacontenido(id) {
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
        $.get('../../ajax_listaSubAreasss/' + id, function (data) {

        });
    }

    function obtenerlistacontenidoxIdProdAlmacen(id) {
       //alert("lista contenido por id almace");
        $.ajax({
            url: ($("#hdd_idRequisicion").val() === '0') ? '../../ajax_listaSubAreas' : '../../ajax_listaSubAreas',
            type: 'POST',
            data: {idProducto: id, _token: $("#_token").val(), },
            dataType: 'json',
            success: function (data) {
               // consloe.log()
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

    function obtenerInformacionTraspaso(id) {
        if ($("#hdd_idTraspaso").val() !== '0') {
            $.ajax({
                url: '../../ajax_detalle/' + $("#hdd_idTraspaso").val(),
                type: 'GET',
                data:{idArea: $("#id_area").val()},
                dataType: 'JSON',
                success: function (data) {
                    var traspaso = data.data;

                    $("#cat_area_id").val(traspaso[0].cat_area_id).change();
                    $("#cat_sub_area_id").val(traspaso[0].cat_sub_area_id).change();
                }
            });
        }
    }
});