$(function () {
    $('input[name=opcion_unidades]').iCheck({
        radioClass: 'iradio_square-green',
    });

    $('input[name=chk_seleccionar],#chk_prod').iCheck({
        checkboxClass: 'icheckbox_square-green',
    });

    $('#chk_seleccionar').on('ifClicked', function (e) {
        var checked = e.currentTarget.checked;
        if (!checked) {
            $("#tabla-requision-traspaso tbody #chk_prod:not(:checked)").attr("checked", true);
        } else {
            $("#tabla-requision-traspaso tbody #chk_prod:checked").attr("checked", false);
        }
    });

    $('#chk_seleccionar_piezas').on('ifClicked', function (e) {
        var checked = e.currentTarget.checked;
        if (!checked) {
            $("#tabla-requision-traspaso tbody #chk_prod_pieza:not(:checked)").attr("checked", true);
        } else {
            $("#tabla-requision-traspaso tbody #chk_prod_pieza:checked").attr("checked", false);
        }
    });

    $('#txt_cantidad_traspaso').attr('disabled', true);
    $('#txt_producto_traspaso').attr('disabled', true);
    $('#select-claveProd-traspaso').attr('disabled', true);
    $('#select-contenido-traspaso').attr('disabled', true);

    var dataTable_almacen =
            $("#tabla-almacen-traspaso").dataTable({
        "bDeferRender": true,
        "iDisplayLength": 10,
        //"sPaginationType": "bootstrap",
        "bProcessing": true,
        "bFilter": false,
        //"bServerSide": true,
        //"sAjaxSource": '../traspaso/ajax_listaalmacen',
        //"sServerMethod": "GET",
        "aoColumns": [
            {"mData": "id"},
            {
                "mData": "Descripcion",
                "bSortable": false,
            },
        ],
//        "fnServerParams": function (aoData) {
//            aoData.push({"name": "tipoMov", "value": $("#tipoMov").val()});
//        },
        "aLengthMenu": [
            [5, 10, -1],
            [5, 10, "Todo"]
        ],
        "language": {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Registros del _START_ al _END_  total: _TOTAL_ ",
            "sInfoEmpty": "Sin registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        }
    });

    var dataTable_traspaso =
            $("#tabla-traspaso-detalle").dataTable({
        "bDeferRender": true,
        "bFilter": false,
        "bPaginate": false,
        "bInfo": false,
        "bLenghtChange": false,
        "iDisplayLength": 25,
        "bProcessing": true,
        "aoColumnDefs": [
            {
                "bVisible": false, //Id del producto
                "aTargets": [0]
            },
            {
                "bsortable": false, //Nombre del producto
                "aTargets": [1]
            },
            {
                "bsortable": false, //Presentacion del producto
                "aTargets": [2]
            },
            {
                "bsortable": false, //Cantidad
                "aTargets": [3],
                "mRender": function (data) {
                    return '<input type="text" id="txt_cantidad_detalle" class="form-control" disabled value="' + data + '">';
                }
            },
            {
                "bsortable": false, //Costo Unitario
                "aTargets": [4],
                "mRender": function (data) {
                    return '<input type="text" id="txt_costoUnitario_detalle" class="form-control" disabled value="' + data + '">';
                }
            },
            {
                "bsortable": false, //Costo Promedio
                "aTargets": [5],
                "mRender": function (data) {
                    return '<input type="text" id="txt_costoProm_detale" class="form-control" disabled value="' + data + '">';
                }
            },
            {
                "bsortable": false,
                "aTargets": [6],
                "mRender": function (index) {
                    var disabledButton = ($("#hdd_idTraspaso").val() === '0') ? '' : 'disabled';
                    return '<button class="btn btn-danger btn-xs" id="btn-quitar-item" type="button" ' + disabledButton + '><i class="glyphicon glyphicon-trash"></i></button>';
                }
            }
        ],
        "aLengthMenu": [
            [5, 10, -1],
            [5, 10, "Todo"]
        ],
        "language": {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Registros del _START_ al _END_  total: _TOTAL_ ",
            "sInfoEmpty": "Sin registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        }
    }
    );

    var tRequisicion = $("#tabla-requision-traspaso").dataTable({
        "bDeferRender": true,
        "iDisplayLength": 10,
        "bProcessing": true,
        "bFilter": false,
        "bPaginate": false,
        "bInfo": false,
        "bLenghtChange": false,
        "responsive": true,
        "sAjaxSource": '../traspaso/ajax_requisicion',
        "sServerMethod": "POST",
        "fnServerParams": function (aoData) {
            aoData.push({"name": "_token", "value": $("#_token").val()});
            aoData.push({"name": "id", "value": ($("#txt_buscarRequisition").val() === '') ? '0' : $("#txt_buscarRequisition").val()});
        },
        "aoColumns": [
            {
                "bVisible": false, //Id del producto
                "mData": "id"
            },
            {
                "bsortable": false, //Clave del producto
                "mData": "clave"
            },
            {
                "bsortable": false, //Descripcion del producto
                "mData": "Descripcion"
            },
            {
                "bsortable": false, //Descripcion del producto
                "mData": "Presentacion"
            },

            {
                "bsortable": false, //Cantidad
                "mData": null,
                "mRender": function (full) {
                    return '<input type="text" id="txt_cantidad_detalle" class="form-control" value="' + full.cantidad + '">';
                }
            },
            {
                "bsortable": false, //Costo Unitario
                "mData": null,
                "mRender": function (full) {
                    return '<input type="text" id="txt_costoUnitario_detalle" class="form-control" value="' + full.precio + '">';
                }
            },
            {
                "bsortable": false,
                "mData": null,
                "mRender": function (full) {
                    return '<input type="checkbox" id="chk_prod" class="form-control">';
                }
            },
            {
                "bsortable": false,
                "mData": null,
                "mRender": function (full) {
                    return '<input type="checkbox" id="chk_prod_pieza" class="form-control">';
                }
            },
            {
                "bsortable": false,
                "mData": "Contenido"
            }
        ],
        "language": {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Registros del _START_ al _END_  total: _TOTAL_ ",
            "sInfoEmpty": "Sin registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        }
    }
    );

    var dataTable_productos =
            $("#tabla-producto-traspaso").dataTable({
        "bDeferRender": true,
        "iDisplayLength": 10,
        "bProcessing": true,
        //"bServerSide": true,
//        "sAjaxSource": 'traspaso/ajax_listado',
//        "sServerMethod": "GET",

//        "fnServerParams": function (aoData) {
//            aoData.push({"name": "tipoMov", "value": $("#tipoMov").val()});
//        },
        "aLengthMenu": [
            [5, 10, -1],
            [5, 10, "Todo"]
        ],
        "language": {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Registros del _START_ al _END_  total: _TOTAL_ ",
            "sInfoEmpty": "Sin registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        }
    }
    );

//    $("#select-almacenDestino-traspaso").select2({
//        placeholder: {
//            id: '-1',
//            text: 'Seleccione almacen destino'
//        },
//        allowClear: true
//    });
//
//    $("#select-almacenOrigen-traspaso").select2({
//        placeholder: {
//            id: '-1',
//            text: 'Seleccione almacen origen'
//        },
//        allowClear: true
//    });

    $.ajax({
        url: ($("#hdd_idTraspaso").val() === '0') ? "../traspaso/ajax_listaalmacen" : "../ajax_listaalmacen",
        type: "GET",
        dataType: "json",
        success: function (data) {
            //console.log(data.data.length);
            var item = [];
            for (var i = 0, max = data.data.length; i < max; i++) {
                item.push({id: data.data[i].id, text: data.data[i].Descripcion});
            }

            $("#select-almacenOrigen-traspaso")
                    .html('')
                    .select2(
                            {
                                placeholder: {
                                    id: '-1',
                                    text: 'Seleccione almacen origen'
                                },
                                allowClear: true,
                                'data': item
                            }
                    )
                    .on("select2:select", function (e) {
                        var select_val = $(e.currentTarget).val();
                        if (select_val === $("#select-almacenDestino-traspaso").val()) {

                            toastr.options = {
                                closeButton: true,
                                progressBar: true,
                                showMethod: 'slideDown',
                                positionClass: "toast-top-full-width",
                                timeOut: 4000
                            };
                            $(e.currentTarget).val('-1').change();
                            toastr.error('', 'El origen de almacen debe ser diferente al origen del almacen');
                        }

                    });
            $("#select-almacenOrigen-traspaso").val('-1').change();

            $("#select-almacenDestino-traspaso")
                    .html('')
                    .select2(
                            {
                                placeholder: {
                                    id: '-1',
                                    text: 'Seleccione almacen destino'
                                },
                                allowClear: true,
                                'data': item
                            }
                    )
                    .on("select2:select", function (e) {


                        var select_val = $(e.currentTarget).val();
                        if (select_val !== $("#select-almacenOrigen-traspaso").val()) {
                            $('#txt_producto_traspaso').attr('disabled', false);
                            $('#select-claveProd-traspaso').attr('disabled', false);
                            $('#select-contenido-traspaso').attr('disabled', false);
                        } else {
                            toastr.options = {
                                closeButton: true,
                                progressBar: true,
                                showMethod: 'slideDown',
                                positionClass: "toast-top-full-width",
                                timeOut: 4000
                            };
                            $(e.currentTarget).val('-1').change();
                            toastr.error('', 'El destino de almacen debe ser diferente al origen del almacen');
                        }

                    })
                    .on("select2:unselect", function () {
                        $('#txt_producto_traspaso').attr('disabled', true);
                        $('#select-claveProd-traspaso').attr('disabled', true);
                        $('#select-contenido-traspaso').attr('disabled', true);
                    });
            $("#select-almacenDestino-traspaso").val('-1').change();

        }
    });

    $("#txt_producto_traspaso").autocomplete({
        source: function (request, response) {
            $.ajax({
                url: ($("#hdd_idTraspaso").val() === '0') ? '../searchajax' : '/searchajax',
                dataType: "json",
                data: {
                    term: request.term
                },
                success: function (data) {
                    response(data);
                }
            });
        },
        autoFocus: true,
        minLength: 2,
        select: function (event, ui)
        {
            $("#hdd_IdProducto").val(ui.item.id);
            obtenerlistaclaves(ui.item.id);
            obtenerlistacontenido(ui.item.id);
            obtenerProductoxNombre(ui.item.id);
            if ($("#hdd_idTraspaso").val() === '0') {
                $('#txt_cantidad_traspaso').attr('disabled', false);
            }
        },
        change: function (event, ui)
        {

            //alert(ui.item.id);
            //obtenerProductoxNombre(ui.item.id);
//            if ($("#hdd_idTraspaso").val() === '0') {
//                $('#txt_cantidad_traspaso').attr('disabled', false);
//            }
        },
        messages: {
            noResults: '',
            results: function () {}
        }
    });

//    $("#txt_producto_traspaso").keydown(function (e) {
//        if (e.keyCode == 8) {
//            $("#txt_producto_traspaso").val("");
//            $("#txt_cantidad_traspaso").val("0");
//            $('#txt_cantidad_traspaso').attr('disabled', true);
//            $("#txt_existenciaAlmacen_traspaso").val("0");
//            $("#txt_presentacion_traspaso").val("");
//            $("#txt_uMedida_traspaso").val("");
//            $("#txt_costoUnitario_traspaso").val("0.0000");
//            $("#txt_costoProm_traspaso").val("0.0000");
//            obtenerlistacontenido(null);
//            obtenerlistaclaves(null);
//        }
//    });

    $("#btn-requisicion").click(function () {
        $("#tabla-requision-traspaso").dataTable()._fnAjaxUpdate();
    });

    $("#btn_cargarRequisicion").click(function () {
        var row_data = [];
        var total_promedio = 0;
        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'slideDown',
            positionClass: "toast-top-full-width",
            timeOut: 4000
        };

        if (tRequisicion.fnGetData().length === 0) {
            toastr.error('', 'Es neceserario ingresar la clave de requisición para realizar el traspaso');
            return;
        }
        //console.log(tRequisicion.fnGetNodes());
        $(tRequisicion.fnGetNodes()).each(function (index, elem) {
            var aPos = tRequisicion.fnGetPosition(this);
            var aData = tRequisicion.fnGetData(aPos[0]);

            //se obtiene arreglo de strings
            var tdArray = aData[index];
            //console.log(tdArray);
            //se detecta la etiqueta input para poder obtener el valor verdadero dentro de la fila
            var nRow = $('#tabla-requision-traspaso tbody tr:eq(' + index + ') td').parent('tr')[0];

            //se obtiene todas las etiquetas input detectadas dentro de la fila(etiqueta tr)
            var jqInputs = $('input', nRow);

            var input_cantidad = jqInputs[0];
            var input_precio = jqInputs[1];
            var checked = jqInputs[2].checked;
            var pieza = (jqInputs[3].checked) ? (input_cantidad.value * input_precio.value) : (input_cantidad.value / tdArray.Contenido);
            if (checked && input_cantidad.value !== '0') {
                row_data.push([tdArray.id, tdArray.Descripcion, tdArray.Presentacion, pieza, input_precio.value, (parseFloat(pieza).toFixed(4) * parseFloat(input_precio.value)).toFixed(4)]);
//                total_promedio += (parseInt(pieza) * parseFloat(input_precio.value).toFixed(4));
            }
        });

        if (row_data.length >= 1){
            $("#txt_total_traspaso").val(total_promedio.toFixed(4));
            dataTable_traspaso.fnAddData(row_data);
            obtenerTotal();
            tRequisicion.fnClearTable();
            $("#txt_buscarRequisition").val("");
            $('#chk_seleccionar').iCheck('uncheck');
            $('#chk_seleccionar_piezas').iCheck('uncheck');
            $("#modal-form-requisicion").modal("hide");
        }else{
            toastr.error('', 'Es neceserario que seleccione un producto de la requisición');
        }
    });

    $("#txt_cantidad_traspaso").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });

    $("#txt_cantidad_traspaso").keyup(function () {
        console.log(this.value);
        if ($(this).val().length >= 1) {
            obtenerTotalxCantidad();
        } else {
            $("#txt_costoProm_traspaso").val("0.0000");
        }
    });

    obtenerlistaclaves(null);
    obtenerlistacontenido(null);
    obtenerInformacionTraspaso();

    $("#btn_agregarTr").click(function () {
        var row_data = [];
        var totalCantidad = 0;
        var cantidad = 0;
        var contenido = 0;
        var tipo = $("input[name=opcion_unidades]:checked").val();

        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'slideDown',
            positionClass: "toast-top-full-width",
            timeOut: 4000
        };

        if ($("#select-contenido-traspaso").val() === null) {
            toastr.error('', 'Es necesario seleccionar el producto');
            return;
        }

        if ($("#txt_cantidad_traspaso").val() === '' || $("#txt_cantidad_traspaso").val() === '0') {
            toastr.error('', 'Es necesario ingresar una cantidad');
            return;
        }

//        if ($("#txt_producto_traspaso").val() === '') {
//            toastr.error('', 'Es necesario escribir el nombre del producto');
//            return;
//        }


        cantidad = parseFloat($("#txt_cantidad_traspaso").val());
        contenido = parseFloat($("#select-contenido-traspaso").select2("data")[0].text);

        switch (tipo) {
            case "unidad":
                totalCantidad = (cantidad / contenido);
                break;
            case "pieza":
                totalCantidad = cantidad;
                break;
        }

        row_data.push([
            $("#select-claveProd-traspaso").select2("data")[0].id, 
            $("#txt_producto_traspaso").val(), 
            $("#txt_presentacion_traspaso").val(), 
            totalCantidad,
            $("#txt_costoUnitario_traspaso").val(), 
            $("#txt_costoProm_traspaso").val()]);

        var arrayDatatable = dataTable_traspaso.fnGetData();
        //console.log(arrayDatatable[0]);
        if (arrayDatatable.length === 0) {
            dataTable_traspaso.fnAddData(row_data);
        } else {
            var nuevaFila = true;
            $.each(arrayDatatable, function (index, element) {
                if (element[0] === row_data[0][0]) {
                    element[3] = element[3] + row_data[0][3];
                    element[5] = parseFloat(element[5]) + parseFloat(row_data[0][5]);
                    dataTable_traspaso.fnUpdate(element[3], index, 3);
                    dataTable_traspaso.fnUpdate(parseFloat(element[5]).toFixed(4), index, 5);
                    nuevaFila = false;
                    //console.log(index + ':' + element[0] + ';' + element[1] + ';' + element[2] + ';' + element[3] + ';' + element[4] + ';' + element[5]);
                    return false;
                }
            });

            if (nuevaFila) {
                dataTable_traspaso.fnAddData(row_data);
            }
        }

        $("#txt_producto_traspaso").val("");
        $("#txt_cantidad_traspaso").val("0");
        $('#txt_cantidad_traspaso').attr('disabled', true);
        $("#txt_existenciaAlmacen_traspaso").val("0");
        $("#txt_presentacion_traspaso").val("");
        $("#txt_uMedida_traspaso").val("");
        $("#txt_costoUnitario_traspaso").val("0.0000");
        $("#txt_costoProm_traspaso").val("0.0000");
        obtenerlistacontenido(null);
        obtenerlistaclaves(null);
        obtenerTotal();
    });
    //Termina agregar a la tabla un renglon

    $("#btn_limpiar").click(function () {
        $("#txt_producto_traspaso").val("");
        $('#txt_cantidad_traspaso').attr('disabled', true);
        $("#txt_cantidad_traspaso").val("0");
        $("#txt_existenciaAlmacen_traspaso").val("0");
        $("#txt_presentacion_traspaso").val("");
        $("#txt_uMedida_traspaso").val("");
        $("#txt_costoUnitario_traspaso").val("0.0000");
        $("#txt_costoProm_traspaso").val("0.0000");
        obtenerlistacontenido(null);
        obtenerlistaclaves(null);
    });
    // Termina la funcion limpiar

//    $("#txt_cantidad_traspaso").blur(function () {
//        obtenerTotalxCantidad();
//    });

    $("input[name=opcion_unidades]:radio").on('ifChecked', function (event) {
        $("#txt_cantidad_traspaso").val("0");
        $("#txt_costoProm_traspaso").val("0.0000");
    });

    $(document).on("click", "#btn-quitar-item", function () {
        var tr = $(this).closest('tr').get(0);
        dataTable_traspaso.fnDeleteRow(tr);
        obtenerTotal();
    });


    $("#btn_guardar_traspaso").click(function (e) {
        var sItemsTraspaso = [];
//        console.log(dataTable_traspaso.fnGetData().length);
        var msg = '';

        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'slideDown',
            positionClass: "toast-top-full-width",
            timeOut: 4000
        };

        if ($("#select-almacenDestino-traspaso").val() === null || $("#select-almacenOrigen-traspaso").val() === null) {
            msg += 'Uno de los campos de almacen no se encuentra seleccionado<br>';
        } else {
            if ($("#select-almacenDestino-traspaso").select2("data")[0].id === $("#select-almacenOrigen-traspaso").select2("data")[0].id) {
                msg += 'El destino de almacen debe ser diferente al origen del almacen<br>';
            }
        }


        if ($("#txt_referenciaTraspaso").val() === '') {
            msg += 'Es necesario escribir la referencia <br>';
        }

        if (dataTable_traspaso.fnGetData().length === 0) {
            msg += 'Es necesario agregar un producto para realizar el traspaso';

        }

        if (msg !== '') {
            toastr.error('', msg);
            return;
        }

        $(dataTable_traspaso.fnGetNodes()).each(function (index, elem) {
            var aPos = dataTable_traspaso.fnGetPosition(this);
            var aData = dataTable_traspaso.fnGetData(aPos[0]);

            //se obtiene arreglo de strings
            var tdArray = aData[index];
            //console.log(tdArray[0]+' '+tdArray[4]+' '+tdArray[5]);
            //se detecta la etiqueta input para poder obtener el valor verdadero dentro de la fila
            var nRow = $('#tabla-traspaso-detalle tbody tr:eq(' + index + ') td').parent('tr')[0];

            //se obtiene todas las etiquetas input detectadas dentro de la fila(etiqueta tr)
            var jqInputs = $('input', nRow);

            var input_cantidad = jqInputs[0];//Se obtiene el valor de cantidad
            var input_cUnitario = jqInputs[1];
            var input_cPromedio = jqInputs[2];
            //console.log(input);

            //console.log(input.name);
            //console.log(input.value);
            sItemsTraspaso.push({'IdProducto': tdArray[0], 'Cantidad': input_cantidad.value, 'CostoUnitario': input_cUnitario.value, 'CostoPromedio': input_cPromedio.value});
        });

        $.ajax({
            'url': '../traspaso/guardar_traspaso',
            'type': 'POST',
            'data':
                    {
                        _token: $('#_token').val(),
                        idAlmacenDestino: $("#select-almacenDestino-traspaso").select2("data")[0].id,
                        idAlmacenOrigen: $("#select-almacenOrigen-traspaso").select2("data")[0].id,
                        referencia: $("#txt_referenciaTraspaso").val(),
                        total_traspaso: $("#txt_total_traspaso").val(),
                        idUsuario: $("#hdd_IdUsuario").val(),
                        jsonItem: JSON.stringify(sItemsTraspaso)
                    },
            'dataType': 'json',
            'success': function (data) {
                var estatus = data.Estatus
                console.log(data);

                if (estatus === 'Ok') {
                    toastr.success('', data.Mensaje);
                } else {
                    toastr.error('', data.Mensaje);
                }

                setTimeout(function () {
                    window.location.href = '../traspaso';
                }, 4000);
            }
        });
    });

    if ($("#hdd_idTraspaso").val() !== '0') {
        $("#tabla-traspaso-detalle tbody").on("click", "tr", function (event) {
            var id = dataTable_traspaso.fnGetData(this)[0];
            obtenerDetallexId(id);
        });
    }

    function obtenerlistaclaves(id) {
        var idProd = (id === null) ? '' : '/' + id;
        if (id === null) {
            $.ajax({
                url: ($("#hdd_idTraspaso").val() === '0') ? '../traspaso/ajax_listaclave' : '../ajax_listaclave',
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    $("#select-claveProd-traspaso")
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
                                $("#select-contenido-traspaso").val(select_val).change();
                                obtenerProductoxidProdAlmacen(select_val);
                                obtenerlistacontenidoxIdProdAlmacen(select_val);
                                $('#txt_cantidad_traspaso').attr('disabled', false);
                            });
                    if (data.length > 1) {
                        $("#select-claveProd-traspaso").val("-1").change();
                    }
                }
            });
        } else {
            $.ajax({
                url: ($("#hdd_idTraspaso").val() === '0') ? '../traspaso/ajax_listaclave' + idProd : '../ajax_listaclave' + idProd,
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    $("#select-claveProd-traspaso")
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
                                $("#select-contenido-traspaso").val(select_val).change();
                                obtenerProductoxidProdAlmacen(select_val);
                                obtenerlistacontenidoxIdProdAlmacen(select_val);
                            });
                    if (data.length > 1) {
                        if ($("#hdd_idTraspaso").val() === '0') {
                            $("#select-claveProd-traspaso").val("-1").change();
                        }
                    }
                }
            });
        }
    }

    function obtenerlistacontenido(id) {
        if (id === null) {
            $("#select-contenido-traspaso")
                    .html('')
                    .select2(
                            {
                                placeholder: {
                                    id: '-1',
                                    text: 'Seleccione un contenido',
                                },
                                allowClear: true
                            }
                    );
        } else {
            $.ajax({
                url: ($("#hdd_idTraspaso").val() === '0') ? '../traspaso/ajax_listacontenidos' : '../ajax_listacontenidos',
                type: 'POST',
                data: {idProducto: id, _token: $("#_token").val()},
                dataType: 'json',
                success: function (data) {
                    $("#select-contenido-traspaso")
                            .html('')
                            .select2(
                                    {
                                        placeholder: {
                                            id: '-1',
                                            text: 'Seleccione un contenido',
                                        },
                                        allowClear: true,
                                        'data': data
                                    }
                            ).on("select2:select", function (e) {
                        var select_val = $(e.currentTarget).val();
                        $("#select-claveProd-traspaso").val(select_val).change();
                        obtenerProductoxidProdAlmacen(select_val);

                    });

                    if (data.length > 1) {
                        if ($("#hdd_idTraspaso").val() === '0') {
                            $("#select-contenido-traspaso").val("-1").change();
                        }
                    }
                }
            });
        }
    }

    function obtenerlistacontenidoxIdProdAlmacen(id) {
        $.ajax({
            url: ($("#hdd_idTraspaso").val() === '0') ? '../traspaso/ajax_listacontenidosxidprodalmacen' : '../ajax_listacontenidosxidprodalmacen',
            type: 'POST',
            data: {idProducto: id, _token: $("#_token").val()},
            dataType: 'json',
            success: function (data) {
                $("#select-contenido-traspaso")
                        .html('')
                        .select2(
                                {
                                    placeholder: {
                                        id: '-1',
                                        text: 'Seleccione un contenido',
                                    },
                                    allowClear: true,
                                    'data': data
                                }
                        );
            }
        });
    }

    function obtenerProductoxNombre(id) {
        var total = '0';
        var existencia = '0';

        if ($("#hdd_idTraspaso").val() === '0') {
            $.get('../traspaso/ajax_listaproductos/' + id + '/' + $('#select-almacenOrigen-traspaso').val(), function (data) {
                existencia = (data.data[0].Existencia !== null) ? parseFloat(data.data[0].Existencia).toFixed(4) : '0.0000';
                $("#txt_existenciaAlmacen_traspaso").val(existencia);
                $("#txt_presentacion_traspaso").val(data.data[0].TipoPresentacion);
                $("#txt_uMedida_traspaso").val(data.data[0].UnidadMedida);
                total = (data.data[0].CostoPromedio !== null) ? parseFloat(data.data[0].CostoPromedio).toFixed(4) : '0.0000';
                $("#txt_costoUnitario_traspaso").val(total);
            });
        }
    }

    function obtenerProductoxidProdAlmacen(id) {
        var total = '0';
        var existencia = '0';
        $.get('../traspaso/ajax_listaproductosxidprodalmacen/' + id + '/' + $('#select-almacenOrigen-traspaso').val(), function (data) {
            $("#txt_producto_traspaso").val(data[0].Descripcion_corta);
            existencia = (data[0].Existencia !== null) ? parseFloat(data[0].Existencia).toFixed(4) : '0.0000';
            $("#txt_existenciaAlmacen_traspaso").val(existencia);
            $("#txt_presentacion_traspaso").val(data[0].TipoPresentacion);
            $("#txt_uMedida_traspaso").val(data[0].UnidadMedida);
            total = (data[0].CostoPromedio !== null) ? parseFloat(data[0].CostoPromedio).toFixed(4) : '0.0000';
            $("#txt_costoUnitario_traspaso").val(total);
        });
    }

    function obtenerTotalxCantidad() {
        var cantidad = parseFloat($("#txt_cantidad_traspaso").val());
        var costoUnitario = parseFloat($("#txt_costoUnitario_traspaso").val());
        var contenido = parseFloat($("#select-contenido-traspaso").select2("data")[0].text);
        var total = 0;
        var tipo = $("input[name=opcion_unidades]:checked").val();
        if ($("#txt_cantidad_traspaso").val() != "") {
            switch (tipo) {
                case "unidad":
                    total = (cantidad / contenido) * costoUnitario;
                    break;
                case "pieza":
                    total = cantidad * costoUnitario;
                    break;
            }
            $("#txt_costoProm_traspaso").val(total.toFixed(4).toString());
        }
    }

    function obtenerTotal() {
        var total_promedio = 0;
        $(dataTable_traspaso.fnGetNodes()).each(function (index, elem) {
            var aPos = dataTable_traspaso.fnGetPosition(this);
            var aData = dataTable_traspaso.fnGetData(aPos[0]);

            //se obtiene arreglo de strings
            var tdArray = aData[index];
            //console.log(tdArray[0]+' '+tdArray[4]+' '+tdArray[5]);
            //se detecta la etiqueta input para poder obtener el valor verdadero dentro de la fila
            var nRow = $('#tabla-traspaso-detalle tbody tr:eq(' + index + ') td').parent('tr')[0];

            //se obtiene todas las etiquetas input detectadas dentro de la fila(etiqueta tr)
            var jqInputs = $('input', nRow);

            var input_cPromedio = jqInputs[2];

            total_promedio += parseFloat(input_cPromedio.value);
        });

        $("#txt_total_traspaso").val(total_promedio.toFixed(4));

    }

    function obtenerInformacionTraspaso() {
        if ($("#hdd_idTraspaso").val() !== '0') {
            $.ajax({
                url: '../ajax_traspasodetalle/' + $("#hdd_idTraspaso").val(),
                type: 'GET',
                dataType: 'JSON',
                success: function (data) {
                    var traspaso = data.traspaso;
                    var detalle = data.detalle;
                    var costoTotal = 0;
                    var row_data = [];
                    $("#usuario").val(traspaso[0].UserName);
                    $("#fecha").val(traspaso[0].Fecha);
                    $("#hora").val(traspaso[0].Hora);
                    $("#txt_claveTraspaso").val(traspaso[0].id);
                    $("#select-almacenDestino-traspaso").val(traspaso[0].IdAlmacenDestino).change();
                    $("#select-almacenOrigen-traspaso").val(traspaso[0].IdAlmacenOrigen).change();
                    $("#txt_referenciaTraspaso").val(traspaso[0].Referencia);
                    costoTotal = parseFloat(traspaso[0].CostoTotal);
                    $("#txt_total_traspaso").val(costoTotal.toFixed(4));
                    //console.log(detalle.length);

                    for (var i = 0; i < detalle.length; i++) {
                        row_data.push(
                                [
                                    detalle[i].id,
                                    detalle[i].Descripcion_corta,
                                    detalle[i].Presentacion,
                                    parseFloat(detalle[i].Cantidad).toFixed(4),
                                    parseFloat(detalle[i].CostoUnitario).toFixed(4),
                                    parseFloat(detalle[i].CostoPromedio).toFixed(4)
                                ]
                                );
                    }
                    dataTable_traspaso.fnAddData(row_data);

                    $("#txt_motivoCancelacion_traspaso").val(traspaso[0].MotivoCancelacion);
                    $("#lbl_fechaCancelacion_traspaso").html(traspaso[0].FechaCancelacion);
                }
            });
        }
    }

    function obtenerDetallexId(id) {
        $.ajax({
            url: '../ajax_traspasodetallexid/' + id,
            type: 'GET',
            dataType: 'JSON',
            success: function (data) {
                var detalle = data.detalle;
                var tag_id = null;
                var menu = null;
                $("#txt_producto_traspaso").autocomplete('search', detalle[0].Descripcion_corta);
                setTimeout(function () {
                    menu = $("#txt_producto_traspaso").autocomplete('widget');
                    tag_id = menu[0].children[0];
                    $(tag_id).click();
                }, 300);
                $("#select-claveProd-traspaso").val(detalle[0].IdProductoAlmacen).change();
                $("#txt_cantidad_traspaso").val(parseFloat(detalle[0].Cantidad).toFixed(4));
                $("#txt_existenciaAlmacen_traspaso").val(parseFloat(detalle[0].Existencia).toFixed(4));
                $("#txt_presentacion_traspaso").val(detalle[0].Presentacion);
                $("#txt_uMedida_traspaso").val(detalle[0].Unidad);
                $("#select-contenido-traspaso").val(detalle[0].IdProductoAlmacen).change();
                $("#txt_claveMovimiento_traspaso").val(detalle[0].idTraspaso);
                $("#txt_costoUnitario_traspaso").val(parseFloat(detalle[0].CostoUnitario).toFixed(4));
                $("#txt_costoProm_traspaso").val(parseFloat(detalle[0].CostoPromedio).toFixed(4));
            }
        });
    }
});

