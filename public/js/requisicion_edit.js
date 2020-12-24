$(function () {

    $('input[name=tipo_req]').iCheck({
        radioClass: 'iradio_square-green',
    });

    var dataTable_requisicion =
       $("#tabla-requisicion-detalle").dataTable({
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
                "bsortable": false, //Calve del producto
                "aTargets": [2]
            },
            {
                "bsortable": false, //Presentacion del producto
                "aTargets": [3]
            },
            {
                "bsortable": false, //Unidad de Medida
                "aTargets": [4]
            },
            {
                "bsortable": false, //Contenido
                "aTargets": [5]
            },
            {
                "bsortable": false, //Cantidad
                "aTargets": [6],
                 "mRender": function (data) {
                    return '<input type="text" id="txt_cantidad_detalle" class="form-control" disabled value="' + data + '">';
                }
            },
            {
                "bsortable": false,
                "aTargets": [7],
                "mRender": function (index) {
                    var disabledButton = ($("#hdd_idRequisicion").val() === '0') ? 'enebled' : 'disabled';
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

    var dataTable_requisicion_servicio =
       $("#tabla-requisicion-servicio").dataTable({
        "bDeferRender": true,
        "bFilter": false,
        "bPaginate": false,
        "bInfo": false,
        "bLenghtChange": false,
        "iDisplayLength": 25,
        "bProcessing": true,
        "aoColumnDefs": [
            {
                "bsortable": false, //Servicio
                "aTargets": [0]
            },
            {
                "bsortable": false, //Cantidad
                "aTargets": [1],
                "mRender": function (data) {
                    return '<input type="text" id="txt_cantidad_detalle" class="form-control" disabled value="' + data + '">';
                }
            },
            {
                "bsortable": false,
                "aTargets": [2],
                "mRender": function (index) {
                    var disabledButton = ($("#hdd_idRequisicion").val() != 0) ? '' : 'disabled';
                    return '<button class="btn btn-danger btn-xs" id="btn_quitar_item_servicios" type="button" ' + disabledButton + '><i class="glyphicon glyphicon-trash"></i></button>';
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


    $("#txt_producto_requisicion").autocomplete({
        source: function (request, response) {
            $.ajax({
                url: ($("#hdd_idRequisicion").val() === '0') ? '../searchajax' : '../../searchajax',
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
             obtenerProductoxNombre(ui.item.id);
            //obtenerProductoxidProdAlmacen(ui.item.id);
            obtenerlistacontenido(ui.item.id);
            obtenerlistaclaves(ui.item.id);
            if ($("#hdd_idRequisicion").val() === '0') {
                $('#txt_cantidad_requisicion').attr('disabled', false);
            }
        },
        change: function (event, ui)
        {

        },
        messages: {
            noResults: '',
            results: function () {}
        }

    });

    //Solo numeros en la cantidad
    $("#txt_cantidad_requisicion").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });

    $("#txt_cantidad_servicio").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });

    $("#txt_cantidad_servicio_form").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });


    obtenerlistaclaves(null);
    obtenerlistacontenido(null);
    obtenerInformacionRequisicion();

    // Agregar a la tabla un renglon - Compra, Almacen
    $("#btn_agregarTr").click(function () {
        var row_data = [];
        var cantidad = 0;
        var contenido = 0;
        //var tipo = $("input[name=opcion_unidades]:checked").val();
        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'slideDown',
            positionClass: "toast-top-full-width",
            timeOut: 4000
        };

        if ($("#select-contenido-requisicion").val() === null) {
            toastr.error('', 'Es necesario seleccionar el producto');
            return;
        }

        if ($("#txt_cantidad_requisicion").val() === '' || $("#txt_cantidad_requisicion").val() === '0') {
            toastr.error('', 'Es necesario ingresar una cantidad');
            return;
        }

        cantidad = parseFloat($("#txt_cantidad_requisicion").val());
        contenido = parseFloat($("#select-contenido-requisicion").select2("data")[0].text);

        // console.log(
        //  $("#select-claveProd-requisicion").select2("data")[0].id + " " + 
        //  $("#txt_producto_requisicion").val() + " " + 
        //  $("#select-claveProd-requisicion").select2("data")[0].text +  "  " +
        //  $("#txt_presentacion_requisicion").val() +  "  " +
        //  $("#txt_uMedida_requisicion").val() +  "  " +
        //  contenido +  "  " +
        //  cantidad
        //  );


        row_data.push([
            $("#select-claveProd-requisicion").select2("data")[0].id,
            $("#txt_producto_requisicion").val(),
            $("#select-claveProd-requisicion").select2("data")[0].text, 
            $("#txt_presentacion_requisicion").val(), 
            $("#txt_uMedida_requisicion").val(), 
            contenido, 
            cantidad]);
        
        var arrayDatatable = dataTable_requisicion.fnGetData();
        if (arrayDatatable.length === 0) {
            
            dataTable_requisicion.fnAddData(row_data);
        } else {
            var nuevaFila = true;
            $.each(arrayDatatable, function (index, element) {
                if (element[0] === row_data[0][0]) {
                    //console.log(index + ':' + element[0] + ';' + element[1] + ';' + element[2] + ';' + element[3] + ';' + element[4] + ';' + element[5] + ';' + element[6]);
                    //Un elemento coresponde a cada columna
                    element[6] = element[6] + row_data[0][6]; //Sumar lo que existe mas la cantidad si hay repetidos
                    dataTable_requisicion.fnUpdate(element[6], index, 6); // Actualizar la cantidad
                    nuevaFila = false;
                    
                    return false;
                }
            });

            if (nuevaFila) {
                dataTable_requisicion.fnAddData(row_data);
            }
        }

        $("#txt_producto_requisicion").val("");
        $("#txt_cantidad_requisicion").val("0");
        $('#txt_cantidad_requisicion').attr('disabled', false);
        $("#txt_presentacion_requisicion").val("");
        $("#txt_uMedida_requisicion").val("");
        obtenerlistacontenido(null);
        obtenerlistaclaves(null);
    });
    //Termina agregar a la tabla un renglon Compra - Almacen

    // Agregar a la tabla un renglon - Servicio
    $("#btn_agregarTr_servicio").click(function () {

        var row_data = [];
        var cantidad = 0;

        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'slideDown',
            positionClass: "toast-top-full-width",
            timeOut: 4000
        };

        if ($("#txt_cantidad_servicio_form").val() === '' || $("#txt_cantidad_servicio_form").val() === '0') {
            toastr.error('', 'Es necesario ingresar una cantidad');
            return;
        }

        cantidad = parseFloat($("#txt_cantidad_servicio_form").val());

        console.log(
         $("#txt_servicio").val() + " Cantidad: " + 
         cantidad
         );


        row_data.push([
            $("#txt_servicio").val(), 
            cantidad]);
        
        var arrayDatatable = dataTable_requisicion_servicio.fnGetData();
        if (arrayDatatable.length === 0) {
            
            dataTable_requisicion_servicio.fnAddData(row_data);
        } else {
            var nuevaFila = true;
            $.each(arrayDatatable, function (index, element) {
                if (element[0] === row_data[0][0]) {
                    console.log(index + ':' + element[0] + ';' + element[1] + ';' + element[2]);
                    //Un elemento coresponde a cada columna
                    element[2] = element[2] + row_data[0][2]; //Sumar lo que existe mas la cantidad si hay repetidos
                    dataTable_requisicion_servicio.fnUpdate(element[2], index, 2); // Actualizar la cantidad
                    nuevaFila = false;
                    
                    return false;
                }
            });

            if (nuevaFila) {
                dataTable_requisicion_servicio.fnAddData(row_data);
            }
        }

        $('#txt_cantidad_servicio_form').attr('disabled', false);
        $("#txt_cantidad_servicio_form").val("0");
        $('#txt_servicio').val("");
    });
    //Termina agregar a la tabla un renglon Servicio

    //Limpiar compra, almacen
    $("#btn_limpiar").click(function () {
        $("#txt_producto_requisicion").val("");
        $('#txt_cantidad_requisicion').attr('disabled', false);
        $("#txt_cantidad_requisicion").val("0");
        $("#txt_presentacion_requisicion").val("");
        $("#txt_uMedida_requisicion").val("");
        obtenerlistacontenido(null);
        obtenerlistaclaves(null);
    });
    // Termina la funcion limpiar

     $(document).on("click", "#btn-quitar-item", function () {
        var tr = $(this).closest('tr').get(0);
        dataTable_requisicion.fnDeleteRow(tr);
        //obtenerTotal();
    });

     $(document).on("click", "#btn_quitar_item_servicios", function () {
        var tr = $(this).closest('tr').get(0);
        dataTable_requisicion_servicio.fnDeleteRow(tr);
        //obtenerTotal();
    });

    $("#btn_guardar_requisicion").click(function (e) {
        var sItemsRequisicion = [];
        var msg = '';
        var $editable = 0;

        if ($("#chk_later").is(":checked")) 
        {
            $editable = 1;
        }

        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'slideDown',
            positionClass: "toast-top-full-width",
            timeOut: 4000
        };

        if (dataTable_requisicion.fnGetData().length === 0) {
            msg += 'Es necesario agregar un producto para realizar la requisicion';

        }

        if (msg !== '') {
            toastr.error('', msg);
            return;
        }


        $(dataTable_requisicion.fnGetNodes()).each(function (index, elem) {
            var aPos = dataTable_requisicion.fnGetPosition(this);
            var aData = dataTable_requisicion.fnGetData(aPos[0]);

            //se obtiene arreglo de strings
            var tdArray = aData[index];
            //console.log(tdArray[0]+' '+tdArray[1]+' '+tdArray[2]+' '+tdArray[6]);
            //se detecta la etiqueta input para poder obtener el valor verdadero dentro de la fila
            var nRow = $('#tabla-requisicion-detalle tbody tr:eq(' + index + ') td').parent('tr')[0];
            //se obtiene todas las etiquetas input detectadas dentro de la fila(etiqueta tr)
            var jqInputs = $('input', nRow);
            var input_cantidad = jqInputs[0];//Se obtiene el valor de cantidad

            sItemsRequisicion.push({'IdProducto': tdArray[0], 'Cantidad': input_cantidad.value});
        });
        if ($("#hdd_idRequisicion").val() === '0') {
            $.ajax({
                'url': ($("#hdd_idRequisicion").val() === '0') ? '../requisicion/guardar_requisicion' : '../../requisicion/guardar_requisicion',
                'type': 'POST',
                'data':
                        { 
                            _token: $('#_token').val(),
                            partida: $("#txt_partidaRequisicion").val(),
                            tipo_requisicion : $("input[name=tipo_req]:checked").val(),
                            editable : $editable,
                            observaciones : $("#texta_observaciones").val(),
                            hora : $("#hora_requisicion").val(),
                            idUsuario: $("#hdd_IdUsuario").val(),
                            jsonItem: JSON.stringify(sItemsRequisicion)
                        },
                'dataType': 'json',
                'success': function (data) {
                    var estatus = data.Estatus
                    //console.log(data);

                    if (estatus === 'Ok') {
                        toastr.success('', data.Mensaje);
                    } else {
                        toastr.error('', data.Mensaje);
                    }

                    setTimeout(function () {
                        window.location.href = '../requisiciones';
                    }, 4000);
                }
            });
        }
        else{
            $.ajax({
                'url': ($("#hdd_idRequisicion").val() === '0') ? '../actualizar_requisicion' : '../../requisicion/actualizar_requisicion',
                'type': 'POST',
                'data':
                        {
                            _token: $('#_token').val(),
                            partida: $("#txt_partidaRequisicion").val(),
                            tipo_requisicion : $("input[name=tipo_req]:checked").val(),
                            editable : $editable,
                            observaciones : $("#texta_observaciones").val(),
                            hora : $("#hora_requisicion").val(),
                            idUsuario: $("#hdd_IdUsuario").val(),
                            id: $("#hdd_idRequisicion").val(),
                            jsonItem: JSON.stringify(sItemsRequisicion)
                        },
                'dataType': 'json',
                'success': function (data) {
                    var estatus = data.Estatus
                    //console.log(data);

                    if (estatus === 'Ok') {
                        toastr.success('', data.Mensaje);
                    } else {
                        toastr.error('', data.Mensaje);
                    }

                    setTimeout(function () {
                        window.location.href = '../../requisiciones';
                    }, 4000);
                }
            });
        }
    });

     $("#btn_guardar_requisicion_servicio").click(function (e) {
        var sItemsRequisicion = [];
        var msg = '';

        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'slideDown',
            positionClass: "toast-top-full-width",
            timeOut: 4000
        };

        if (dataTable_requisicion_servicio.fnGetData().length === 0) {
            msg += 'Es necesario agregar un servicio para realizar la requisicion';

        }

        if (msg !== '') {
            toastr.error('', msg);
            return;
        }
        $(dataTable_requisicion_servicio.fnGetNodes()).each(function (index, elem) {
            var aPos = dataTable_requisicion_servicio.fnGetPosition(this);
            var aData = dataTable_requisicion_servicio.fnGetData(aPos[0]);

            //se obtiene arreglo de strings
            var tdArray = aData[index];
            //console.log(tdArray[0]+' '+tdArray[1]);
            //se detecta la etiqueta input para poder obtener el valor verdadero dentro de la fila
            var nRow = $('#tabla-requisicion-servicio tbody tr:eq(' + index + ') td').parent('tr')[0];

            //se obtiene todas las etiquetas input detectadas dentro de la fila(etiqueta tr)
            var jqInputs = $('input', nRow);
            var input_cantidad = jqInputs[0];//Se obtiene el valor de cantidad

            sItemsRequisicion.push({'Servicio': tdArray[0],'Cantidad': input_cantidad.value});
        });

        console.log("Inicia Ajax servicio" );
         if ($("#hdd_idRequisicion").val() === '0') {
        $.ajax({
            //($("#hdd_idRequisicion").val() === '0') ? '../requisicion/guardar_requisicion' : '../../requisicion/guardar_requisicion',
            'url': ($("#hdd_idRequisicion").val() === '0') ? '../requisicion/guardar_requisicion_servicio' : '../../requisicion/guardar_requisicion_servicio',
            'type': 'POST',
            'data':
                    {
                        _token: $('#_token').val(),
                        partida: $("#txt_partidaRequisicion").val(),
                        tipo_requisicion : $("input[name=tipo_req]:checked").val(),
                        observaciones : $("#texta_observaciones").val(),
                        hora : $("#hora_requisicion").val(),
                        idUsuario: $("#hdd_IdUsuario").val(),

                        jsonItem: JSON.stringify(sItemsRequisicion)
                    },
            'dataType': 'json',
            'success': function (data) {
                var estatus = data.Estatus
               console.log("Dentro de ajax servicio");

                if (estatus === 'Ok') {
                    toastr.success('', data.Mensaje);
                } else {
                    toastr.error('', data.Mensaje);
                }

               setTimeout(function () {
                   window.location.href = '../requisiciones';
                }, 4000);
            }
        })
      }else{
          $.ajax({
            'url': ($("#hdd_idRequisicion").val() === '0') ? '../requisicion/actualizar_requisicion_servicio' : '../../requisicion/actualizar_requisicion_servicio',
            'type': 'POST',
            'data':
                    {
                        _token: $('#_token').val(),
                        partida: $("#txt_partidaRequisicion").val(),
                        tipo_requisicion : $("input[name=tipo_req]:checked").val(),
                        observaciones : $("#texta_observaciones").val(),
                        hora : $("#hora_requisicion").val(),
                        idUsuario: $("#hdd_IdUsuario").val(),
                        id: $("#hdd_idRequisicion").val(),
                        jsonItem: JSON.stringify(sItemsRequisicion)
                    },
            'dataType': 'json',
            'success': function (data) {
                var estatus = data.Estatus
               console.log("Dentro de ajax servicio");

                if (estatus === 'Ok') {
                    toastr.success('', data.Mensaje);
                } else {
                    toastr.error('', data.Mensaje);
                }

               setTimeout(function () {
                   window.location.href = '../../requisiciones';
                }, 4000);
            }
        })
    }
    });

   function marcar_servicio()
   {
      document.getElementById('servicio').style.display='block';
      document.getElementById('compras_almacen').style.display='none';
      document.getElementById('tipo_requisicion').value = "2";
   }

   function marcar_almacen()
   {
      document.getElementById('servicio').style.display='none';
      document.getElementById('compras_almacen').style.display='block';
      document.getElementById('tipo_requisicion').value = "3";
   }

   function marcar_compra()
   {
      document.getElementById('servicio').style.display='none';
      document.getElementById('compras_almacen').style.display='block';
      document.getElementById('tipo_requisicion').value = "1";
      
   }

   $("#tipo_req_servicio").on("ifClicked", marcar_servicio);
   $("#tipo_req_almacen").on("ifClicked", marcar_almacen);
   $("#tipo_req_compra").on("ifClicked", marcar_compra);


     function obtenerlistaclaves(id) {
        var idProd = (id === null) ? '' : '/' + id;
        if (id === null) {
            $.ajax({
                url: '../../ajax_obtenerclave',
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    $("#select-claveProd-requisicion")
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
                                $("#select2-select-contenido-requisicion-container").val(select_val).change();
                                obtenerProductoxidProdAlmacen(select_val);
                                obtenerlistacontenidoxIdProdAlmacen(select_val);
                                $('#Cantidad').attr('disabled', false);
                                $('#Cantidad').val("0");
                                $("#costoArt").val("0.00");
                                $("#Piezas").val("0.00");

                                $('#total').val("0");
                            });
                    if (data.length > 1) {
                        $("#select-claveProd-requisicion").val("-1").change();

                    }
                }
            });
        } else {
            $.ajax({
                url: ($("#hdd_idRequisicion").val() === '0') ? '../../traspaso/ajax_listaclave' + idProd : '../../traspaso/ajax_listaclave' + idProd,
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    $("#select-claveProd-requisicion")
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
                                $("#select-claveProd-requisicion").val(select_val).change();
                                 //$('#txt_cantidad_requisicion').val("0").change();

                            });
                    if (data.length > 1) {
                        if ($("#hdd_idRequisicion").val() === '0') {
                            $("#select-claveProd-requisicion").val("-1").change();
                             //$('#txt_cantidad_requisicion').val("0").change();
                        }
                    }
                }
            });
        }
    }


    function obtenerlistacontenido(id) {
        if (id === null) {
            $("#select-contenido-requisicion")
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
                url: ($("#hdd_idTraspaso").val() === '0') ? '../../traspaso/ajax_listacontenidos' : '../../traspaso/ajax_listacontenidos',
                type: 'POST',
                data: {idProducto: id, _token: $("#_token").val()},
                dataType: 'json',
                success: function (data) {
                    $("#select-contenido-requisicion")
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
                            $("#select-contenido-requisicion").val("-1").change();
                        }
                    }
                }
            });
        }
    }

    function obtenerlistacontenidoxIdProdAlmacen(id) {
       // alert("lista contenido por id almace");
        $.ajax({
            url: ($("#hdd_idRequisicion").val() === '0') ? '../../traspaso/ajax_listacontenidosxidprodalmacen' : '../../ajax_listacontenidosxidprodalmacen',
            type: 'POST',
            data: {idProducto: id, _token: $("#_token").val()},
            dataType: 'json',
            success: function (data) {
                $("#select-contenido-requisicion")
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
        $.get('../../requisicion/ajax_listaproductos/' + id, function (data) {
                $("#txt_presentacion_requisicion").val(data.data[0].TipoPresentacion);
                $("#txt_uMedida_requisicion").val(data.data[0].UnidadMedida);
         });

        if ($("#hdd_idRequisicion").val() === '0') {
            
        }

    }
    function obtenerProductoNombre(id) {
        var total = '0';
        var existencia = '0';
        $.get('../../requisicion/searchajax/' + id, function (data) {
                $("#txt_presentacion_requisicion").val(data.data[0].TipoPresentacion);
                $("#txt_uMedida_requisicion").val(data.data[0].UnidadMedida);
         });

        if ($("#hdd_idRequisicion").val() === '0') {
            
        }

    }

    function obtenerProductoxidProdAlmacen(id) {
        $.get('../../ajax_listaproductosxidprodalmacen/' + id, function (data) {
            $("#txt_producto_requisicion").val(data[0].Descripcion_corta);
            $("#txt_presentacion_requisicion").val(data[0].TipoPresentacion);
            $("#txt_uMedida_requisicion").val(data[0].UnidadMedida);
            //$("#txt_impuesto_Compra").val(data[0].factor);
            //$("#txt_cantidad_requisicion").val(data[0].precio);
        });

    }
    // function obtenerProductoxidProdAlmacen(id) {
    //     var total = '0';
    //     var existencia = '0';
    //     $.get('../traspaso/ajax_listaproductosxidprodalmacen/' + id, function (data) {
    //         $("#txt_producto_requisicion").val(data[0].Descripcion_corta);
    //         $("#txt_presentacion_requisicion").val(data[0].TipoPresentacion);
    //         $("#txt_uMedida_requisicion").val(data[0].UnidadMedida);
    //     });
    // }

    function obtenerInformacionRequisicion() {
        if ($("#hdd_idRequisicion").val() !== '0') {
            $.ajax({
                url: '../../requisicion/ajax_requisiciondetalle/' + $("#hdd_idRequisicion").val(),
                type: 'GET',
                dataType: 'JSON',
                success: function (data) {
                    //var traspaso = data.traspaso;
                    var detalle = data.detalle;
                    var t_solicitud = data.tipo;
                    //var t_solicitud = tipo; //tipo[0].tipo_solicitud;
                    //var costoTotal = 0;
                    var row_data = [];
                    //$("#usuario").val(traspaso[0].UserName);
                    //$("#fecha").val(traspaso[0].Fecha);
                    //$("#hora").val(traspaso[0].Hora);
                    //$("#txt_claveTraspaso").val(traspaso[0].id);
                    //$("#select-almacenDestino-traspaso").val(traspaso[0].IdAlmacenDestino).change();
                    //$("#select-almacenOrigen-traspaso").val(traspaso[0].IdAlmacenOrigen).change();
                    //$("#txt_referenciaTraspaso").val(traspaso[0].Referencia);
                    //costoTotal = parseFloat(traspaso[0].CostoTotal);
                    //$("#txt_total_requisicion").val(costoTotal.toFixed(4));
                    //console.log('Tipo : ' + t_solicitud);
                    //console.log(detalle);
                    if (t_solicitud=== 1 || t_solicitud === 3) {
                        for (var i = 0; i < detalle.length; i++) {
                            row_data.push(
                                    [
                                        detalle[i].id,
                                        detalle[i].Descripcion,
                                        detalle[i].clave,
                                        detalle[i].Presentacion,
                                        detalle[i].UnidadMedida,
                                        detalle[i].Contenido,
                                        detalle[i].Cantidad
                                    ]
                                    );
                        }
                        dataTable_requisicion.fnAddData(row_data);
                    }
                    else{
                        for (var i = 0; i < detalle.length; i++) {
                            row_data.push(
                                    [
                                        //detalle[i].id,
                                        detalle[i].servicio,
                                        detalle[i].cantidad
                                    ]
                                    );
                        }
                        dataTable_requisicion_servicio.fnAddData(row_data);
                    }

                    //$("#txt_motivoCancelacion_requisicion").val(traspaso[0].MotivoCancelacion);
                    //$("#lbl_fechaCancelacion_requisicion").html(traspaso[0].FechaCancelacion);
                }
            });
        }
    }

    function obtenerTotalxCantidad() {
        var cantidad = parseFloat($("#txt_cantidad_requisicion").val());
    }



});