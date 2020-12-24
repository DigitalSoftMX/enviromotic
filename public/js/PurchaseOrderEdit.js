$(function () {

    $('input[name=tipo_req]').iCheck({
        radioClass: 'iradio_square-green',
    });
    
    var rowCount = 0;
    var items = 0;

    var dataTable_requisicion =
       $("#tabla-compra-detalle-edit").dataTable({
        "fnCreatedRow": function (nRow, aData, iDataIndex) {
        $(nRow).attr('id', 'ingRow' +iDataIndex) //
         if(rowCount == 0)
          {
             items = 1;
              rowCount++;
          }else{
            rowCount++;
             items ++;
          }
       },

        "bDeferRender": true,
        "bFilter": false,
        "bPaginate": false,
        "bInfo": false,
        "aaSorting": [[ 0, "desc" ]],
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
                "bsortable": false, //Clave del producto
                "aTargets": [2]
            },
            {
                "bsortable": false, //Unidad de Medida del producto
                "aTargets": [3]
            },
            {
                "bsortable": false, //Presentacion del producto
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
                    return '<input type="text" id="txt_cantidad_servicio_row'+rowCount+'" disabled name="txt_cantidad_servicio_row['+items+']" data-id="'+rowCount+'" onkeypress="return isNumberKey(this);" onkeyup="suma_row_table(this);"  class="form-control" value="' + data + '">';
                }
            },
            {
                "bsortable": false, //Precio
                "aTargets": [7],
                "mRender": function (data) {
                    return '<input type="text" id="precio_servicio_row'+rowCount+'" disabled name="precio_servicio_row['+items+']" data-id="'+rowCount+'" onkeypress="return isNumberKey(this);" onkeyup="suma_precio(this);" class="form-control" value="' + data + '">';
                }
            },
            
            {
                "bsortable": false, //SubTotal
                "aTargets": [8],
                 "mRender": function (data) {
                    return '<input type="text" disabled id="sub_total_servicio_row'+rowCount+'" data-id="'+rowCount+'" class="form-control suma_total_servicio"  value="' + data + '">';
                }
            },
            {
                "bsortable": false, //FACTOR
                "aTargets": [9],
                 "mRender": function (data) {
                    return '<input type="text" id="iva_servicio_row'+rowCount+'" disabled data-id="'+rowCount+'" onkeypres="suma_row_iva(this);" class="form-control"   value="' + data + '">';
                }
            },
            {
                "bsortable": false, //iva
                "aTargets": [10],
                 "mRender": function (data) {
                    return '<input type="text" disabled id="suma_iva_servicio_row'+rowCount+'" name="suma_iva_servicio_row" data-id="'+rowCount+'" id="suma_iva_servicio_row"  class="form-control suma_iva_servicio"  value="' + data + '">';
                }
            },
            {
                "bVisible": false, //Id Requisicion
                "aTargets": [11]
            },
            {
                "bsortable": false,
                "aTargets": [12],
                "mRender": function (index) {
                    return '<button class="btn btn-danger btn-xs" value="'+rowCount+'" id="btn-quitar-item" type="button"><i class="glyphicon glyphicon-trash"></i></button>';
                }
            },
           
           
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
        
    });

    var dataTable_requisicion_servicio =
       $("#tabla-servicio-detalle-edit").dataTable({
        "fnCreatedRow": function (nRow, aData, iDataIndex) {
        $(nRow).attr('id', 'ingRow' +iDataIndex) //
         if(rowCount == 0)
          {
             items = 1;
              rowCount++;
          }else{
            rowCount++;
             items ++;
          }
       },
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
                    return '<input type="text" disabled id="txt_cantidad_servicio_row'+rowCount+'" name="txt_cantidad_servicio_row['+items+']" data-id="'+rowCount+'"  onkeypress="return isNumberKey(this);" onkeyup="suma_row_cantidad(this);"  class="form-control" value="' + data + '">';
                }
            },
            {
                "bsortable": false, //Precio
                "aTargets": [2],
                "mRender": function (data) {
                    return '<input type="text" disabled id="precio_servicio_row'+rowCount+'" name="precio_servicio_row['+items+']" data-id="'+rowCount+'" onkeypress="return isNumberKey(this);" onkeyup="suma_precio(this);" class="form-control" value="' + data + '">';
                }
            },
            {
                "bsortable": false, //Iva
                "aTargets": [3],
                "mRender": function (data) {
                    return '<input type="text" disabled id="iva_servicio_row'+rowCount+'" name="iva_servicio_row['+items+']" data-id="'+rowCount+'" onkeyup="suma_row_iva(this);" class="form-control" value="' + data + '"> ' ;
                }
            },
            {
                "bsortable": false, //SubTotal
                "aTargets": [4],
                "mRender": function (data) {
                    return '<input type="text" disabled id="sub_total_servicio_row'+rowCount+'" name="sub_total_servicio_row['+items+']" data-id="'+rowCount+'" class="form-control suma_total_servicio" value="' + data + '">';
                }
            },
            {
                "bsortable": false, //SubTotaliva
                "aTargets": [5],
                "mRender": function (data) {
                    return '<input type="text" disabled id="suma_iva_servicio_row'+rowCount+'"  name="suma_iva_servicio_row['+items+']" data-id="'+rowCount+'" class="form-control suma_iva_servicio" value="' + data + '">';
                }
            },
            {
                "bsortable": false, //Id Requisicion
                "aTargets": [6]
            },
            {
                "bsortable": false,
                "aTargets": [7],
                "mRender": function (index) {
                    return '<button class="btn btn-danger btn-xs" value="'+rowCount+'" id="btn-quitar-item_servicio" type="button"><i class="glyphicon glyphicon-trash"></i></button>';
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
                url: ($("#hdd_idRequisicion").val() === '0') ? '../searchajaxPurchaseOrder' : '../searchajaxPurchaseOrder',
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
            //obtenerProductoNombre(ui.item.id);
            if ($("#hdd_idRequisicion").val() === '0') {
                $('#txt_cantidad_requisicion').attr('disabled', false);
                $('#txt_cantidad_requisicion').val("0");
                $("#total").val("0");
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
        precio = parseFloat($("#txt_Precio_Compra").val());
       // number_format(parseFloat(general_row),2,'.',',')
        factor = parseFloat($("#txt_impuesto_Compra").val());
        subtotal = parseFloat(subtotal);
        
        var sub_total_iva = 0;

        if(factor != 0){

                 //iva = (iva/100) + 1;
               factor = (factor/100);
              sub_total_iva = eval(subtotal * factor);
           
        }
        else{

          sub_total_iva = factor;

        }
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
            cantidad,
            precio,
            subtotal,
            factor,
            sub_total_iva,
            "",
            ]);

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
                    element[8] = element[8] + row_data[0][8];//Sumar lo que existe mas el subtotal si hay repetidos
                    element[10] = element[10] + row_data[0][10];//Sumar lo que existe mas el iva si hay repetidos
                    dataTable_requisicion.fnUpdate(element[6], index, 6); // Actualizar la cantidad
                    dataTable_requisicion.fnUpdate(element[8], index, 8); //actualizar subtotal
                    dataTable_requisicion.fnUpdate(element[10], index, 10); //actualizar subtotal

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
        $("#txt_Precio_Compra").val("");
        $("#txt_impuesto_Compra").val("");
        $("#total").val("");
 
        obtenerlistacontenido(null);
        obtenerlistaclaves(null);


                        suma_sub_total();
                        suma_iva_total();
                         suma_col();

  
    
    
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
        if ($("#txt_servicio").val() === '' || $("#txt_servicio").val() === '0') {
            toastr.error('', 'Es necesario ingresar la descripción del servicio');
            $("#txt_servicio").focus();
            return;
        }
        if ($("#cantidad_servicio").val() === '' || $("#cantidad_servicio").val() === '0') {
            toastr.error('', 'Es necesario ingresar una cantidad');
            $("#cantidad_servicio").focus();
            return;
        }
        if ($("#precio_servicio").val() === '' || $("#precio_servicio").val() === '0') {
            toastr.error('', 'Es necesario ingresar el precio del servicio');
            $("#precio_servicio").focus();
            return;
        }
        cantidad = parseFloat($("#cantidad_servicio").val());
        precio = parseFloat($("#precio_servicio").val());
        iva = $("#iva_servicio option:selected").text();
        subtotal = parseFloat($('#sub_total_servicio').val());
        //console.log(subtotal);

        var sub_total_iva = 0;

        if(iva == 0 || iva == '')
        {
           subtotal = $('#sub_total_servicio').val();
           sub_total_iva = 0;

        }else{

           iva_data = (iva/100);
           subtotal = $('#sub_total_servicio').val();
           sub_total_iva = eval(subtotal.replace(',','').replace(',','') * iva_data);

        }
        $('#iva_servicio_row').val(iva).change();
        console.log(
         $("#txt_servicio").val() + " Cantidad: " + 
         cantidad
         );

        row_data.push([
            $("#txt_servicio").val(), 
            cantidad,
            precio,
            iva,
            subtotal,
            sub_total_iva,
            "",
            ""]);
        var arrayDatatable = dataTable_requisicion_servicio.fnGetData();
        if (arrayDatatable.length === 0) {
            
            dataTable_requisicion_servicio.fnAddData(row_data);
        } else {
            var nuevaFila = true;
            $.each(arrayDatatable, function (index, element) {
                if (element[0] === row_data[0][0]) {
                    console.log(index + ':' + element[0] + ';' + element[1] + ';' + element[2]);
                    //Un elemento coresponde a cada columna
                    element[1] = element[1] + row_data[0][1]; //Sumar lo que existe mas la cantidad si hay repetidos
                    dataTable_requisicion_servicio.fnUpdate(element[1], index, 1); // Actualizar la cantidad
                    nuevaFila = false;
                    return false;
                }
            });

            if (nuevaFila) {
                dataTable_requisicion_servicio.fnAddData(row_data);
            }
        }

        $('#txt_cantidad_servicio_form').attr('disabled', false);
        $("#cantidad_servicio").val("");
        $('#txt_servicio').val("");
        $('#precio_servicio').val("");
        $('#iva_servicio').val("0");
        $('#sub_total_servicio').val("");
        suma_sub_total();
        suma_iva_total();
        suma_col();
   
    });
    //Termina agregar a la tabla un renglon Servicio

    //Limpiar compra, almacen
    $("#btn_limpiar").click(function () {
        $("#txt_producto_requisicion").val("");
        $('#txt_cantidad_requisicion').attr('disabled', false);
        $("#txt_cantidad_requisicion").val("0");
        $("#txt_presentacion_requisicion").val("");
        $("#txt_uMedida_requisicion").val("");
        $("#txt_Precio_Compra").val("");
        $("#txt_impuesto_Compra").val("");
        $("#total").val("");
        obtenerlistacontenido(null);
        obtenerlistaclaves(null);
    });
    // Termina la funcion limpiar

     $(document).on("click", "#btn-quitar-item", function () {
        var tr = $(this).closest('tr').get(0);
        dataTable_requisicion.fnDeleteRow(tr);

        console.log(tr);
        suma_sub_total();
        suma_iva_total();
        suma_col();
        return rowCount = 0;
        //obtenerTotal();
    });

      $(document).on("click", "#btn-quitar-item_servicio", function () {
        var tr = $(this).closest('tr').get(0);
        dataTable_requisicion_servicio.fnDeleteRow(tr);
        suma_sub_total();
        suma_iva_total();
        suma_col();
        //obtenerTotal();
    });

    $("#btn_guardar_requisicion").click(function (e) {
        var sItemsRequisicion = [];
        var msg = '';
        var $editar = 0;
        if ($("#chk_later").is(":checked")) 
        {
            $editar = 1;
        }

        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'slideDown',
            positionClass: "toast-top-full-width",
            timeOut: 4000
        };

        if (dataTable_requisicion.fnGetData().length === 0) {
            msg += 'Es necesario agregar un producto para realizar la Orden de Compra';
           console.log(dataTable_requisicion);
        }
        if ($("#supplier").val() === '') {
            toastr.error('', 'Es necesario Seleccionar el proveedor');
            $("#supplier").focus();
            return;
        }
        if ($("#fecha_cotizacion").val() === '') {
            toastr.error('', 'Es necesario agregar la fecha de entrega');
            $("#fecha_cotizacion").focus();
            return;
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
            var tdArrayR = aData[index];
            //console.log(tdArray[0]+' '+tdArray[1]+' '+tdArray[2]+' '+tdArray[6]);
            //se detecta la etiqueta input para poder obtener el valor verdadero dentro de la fila
            var nRow = $('#tabla-compra-detalle-edit tbody tr:eq(' + index + ') td').parent('tr')[0];
            //se obtiene todas las etiquetas input detectadas dentro de la fila(etiqueta tr)
            var jqInputs = $('input', nRow);
            var input_cantidad = jqInputs[0];//Se obtiene el valor de cantidad
            var input_precio = jqInputs[1]//Se obtiene el valor de precio
            var input_subtotal = jqInputs[2]//Se obtiene el valor de subtotal
            var input_iva = jqInputs[3]//Se obtiene el valor de iva
            var input_subtotaliva = jqInputs[4]//Se obtiene el valor de subtotaliva

            sItemsRequisicion.push({'IdProducto': tdArray[0], 'IdRequisicion': tdArrayR[11], 'Cantidad': input_cantidad.value, 'Precio': input_precio.value, 'SubTotal': input_subtotal.value,
            'Iva': input_iva.value, 'SubTotalIva': input_subtotaliva.value});
            console.log(nRow);
        });
        if ($("#hdd_idRequisicion").val() === '0') {
            $.ajax({
                'url': ($("#hdd_idRequisicion").val() === '0') ? '../compras/guardar_Orden_Compra' : '../../guardar_Orden_Compra',
                'type': 'POST',
                'data':
                        {
                            _token: $('#_token').val(),
                            partida: $("#txt_partidaRequisicion").val(),
                            tipo_requisicion : $("input[name=tipo_req]:checked").val(),
                            tipo_moneda : $("input[name=tipo_moneda]:checked").val(),
                            editar : $editar,
                            observaciones : $("#observaciones").val(),
                            fechaEntrega : $("#fecha_cotizacion").val(),
                            hora : $("#hora_requisicion").val(),
                            idUsuario : $("#hdd_IdUsuario").val(),
                            idSolicita : $("#usuarios").val(),
                            idproveedor : $("#supplier").val(),
                            subtotal : $("#cantidad_subtotal").val(),
                            iva : $("#cantidad_ivasuma").val(),
                            total : $("#total_general").val(),
                            jsonItem: JSON.stringify(sItemsRequisicion)
                        },
                'dataType': 'json',
                'success': function (data) {
                    var estatus = data.Estatus
                   // console.log(data);
                    
                    if (estatus === 'Ok') {
                        toastr.success('', data.Mensaje);
                    } else {
                        toastr.error('', data.Mensaje);
                    }

                    setTimeout(function () {
                     window.location.href = '../compras';
                    }, 4000);
                }
            });
        }
        else{
            $.ajax({
                'url': ($("#hdd_idRequisicion").val() === '0') ? '../actualizar_Orden_Compra' : '../../actualizar_Orden_Compra',
                'type': 'POST',
                'data':
                        {
                            _token: $('#_token').val(),
                            editar : $editar,
                            observaciones : $("#observaciones").val(),
                            hora : $("#hora_requisicion").val(),
                            idUsuario: $("#hdd_IdUsuario").val(),
                            id: $("#hdd_idRequisicion").val(),
                            subtotal : $("#cantidad_subtotal").val(),
                            iva : $("#cantidad_ivasuma").val(),
                            total : $("#total_general").val(),
                            jsonItem: JSON.stringify(sItemsRequisicion),
                            
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
                       window.location.href = '../../../compras';
                    }, 4000);
                }
            });
        }
    });

     $("#btn_guardar_requisicion_servicio").click(function (e) {
        var sItemsRequisicion = [];
        var msg = '';
        var $editar = 0;
        if ($("#chk_later").is(":checked")) 
        {
            $editar = 1;
        }
        var id = $('#requisition_servi').find(":selected").text();
        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'slideDown',
            positionClass: "toast-top-full-width",
            timeOut: 4000
        };

        if (dataTable_requisicion_servicio.fnGetData().length === 0) {
            msg += 'Es necesario agregar un servicio para realizar la Orden de Servicio';

        }
        if ($("#supplier").val() === '') {
            toastr.error('', 'Es necesario Seleccionar el proveedor');
            $("#supplier").focus();
            return;
        }
        if ($("#fecha_cotizacion").val() === '') {
            toastr.error('', 'Es necesario agregar la fecha de entrega');
            $("#fecha_cotizacion").focus();
            return;
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
            var tdArrayRS = aData[index];
            //console.log(tdArray[0]+' '+tdArray[1]+' '+tdArray[2]+' '+tdArray[6]);
            //se detecta la etiqueta input para poder obtener el valor verdadero dentro de la fila
            var nRow = $('#tabla-servicio-detalle-edit tbody tr:eq(' + index + ') td').parent('tr')[0];
            //se obtiene todas las etiquetas input detectadas dentro de la fila(etiqueta tr)
            var jqInputs = $('input', nRow);
            var input_cantidad = jqInputs[0];//Se obtiene el valor de cantidad
            var input_precio = jqInputs[1]//Se obtiene el valor de precio
            var input_iva = jqInputs[2]//Se obtiene el valor de iva
            var input_subtotal = jqInputs[3]//Se obtiene el valor de subtotal
            var input_subtotaliva = jqInputs[4]//Se obtiene el valor de subtotaliva

            sItemsRequisicion.push({'IdProducto': tdArray[0], 'IdRequisicionServicio': tdArrayRS[6], 'Cantidad': input_cantidad.value, 'Precio': input_precio.value, 'SubTotal': input_subtotal.value,
            'IvaROW': input_iva.value});
           console.log("Inicia Ajax servicio" );
           });
          if ($("#hdd_idRequisicion").val() === '0') {
            $.ajax({
            //($("#hdd_idRequisicion").val() === '0') ? '../requisicion/guardar_requisicion' : '../../requisicion/guardar_requisicion',
            'url': ($("#hdd_idRequisicion").val() === '0') ? '../compras/guardar_Orden_Compra_Detalle' : '../../../compras/guardar_Orden_Compra_Detalle',
            'type': 'POST',
            'data':
                    {
                        _token: $('#_token').val(),
                            tipo_requisicion : $("input[name=tipo_req]:checked").val(),
                            tipo_moneda : $("input[name=tipo_moneda]:checked").val(),
                            editar : $editar,
                            observaciones : $("#observaciones").val(),
                            hora : $("#hora_requisicion").val(),
                            idUsuario : $("#hdd_IdUsuario").val(),
                            fechaEntrega : $("#fecha_cotizacion").val(),
                            idSolicita : $("#usuarios").val(),
                            idproveedor : $("#supplier").val(),
                            subtotal : $("#cantidad_subtotal").val(),
                            iva : $("#cantidad_ivasuma").val(),
                            total : $("#total_general").val(),
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
                   window.location.href = '../compras';
                }, 4000);
            }
        });
      }else{
              $.ajax({
                'url': ($("#hdd_idRequisicion").val() === '0') ? '../actualizar_Orden_Servicio' : '../../actualizar_Orden_Servicio',
                'type': 'POST',
                'data':
                        {
                            _token: $('#_token').val(),
                            editar : $editar,
                            observaciones : $("#observaciones").val(),
                            hora : $("#hora_requisicion").val(),
                            idUsuario: $("#hdd_IdUsuario").val(),
                            id: $("#hdd_idRequisicion").val(),
                            subtotal : $("#cantidad_subtotal").val(),
                            iva : $("#cantidad_ivasuma").val(),
                            total : $("#total_general").val(),
                            jsonItem: JSON.stringify(sItemsRequisicion),
                            
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
                      window.location.href = '../../../compras';
                    }, 4000);
                }
            });
         }    
    });
   /*function marcar_servicio()
    {
       document.getElementById('servicio').style.display='block';
       document.getElementById('compras_almacen').style.display='none';
       document.getElementById('tipo_requisicion').value = "2";
      document.getElementById('btn_limpiar_servicio').style.display = 'block';
      document.getElementById('btn_agregarTr_servicio').style.display = 'block';
    }*/

   // function marcar_almacen()
   // {
   //    document.getElementById('servicio').style.display='none';
   //    document.getElementById('compras_almacen').style.display='block';
   //    document.getElementById('tipo_requisicion').value = "3";
   // }

   // function marcar_compra()
   // {
   //    document.getElementById('servicio').style.display='none';
   //    document.getElementById('compras_almacen').style.display='block';
   //    document.getElementById('tipo_requisicion').value = "1";
   //    document.getElementById('btn_limpiar_servicio').style.display = 'none';
   //    document.getElementById('btn_agregarTr_servicio').style.display = 'none';
   // }

   // $("#tipo_req_servicio").on("ifClicked", marcar_servicio);
   // $("#tipo_req_almacen").on("ifClicked", marcar_almacen);
   // $("#tipo_req_compra").on("ifClicked", marcar_compra);


    function obtenerlistaclaves(id) {
        var idProd = (id === null) ? '' : '/' + id;
        if (id === null) {
            $.ajax({
                url: ($("#hdd_idRequisicion").val() === '0') ? '../traspaso/ajax_listaclave' : '../../../traspaso/ajax_listaclave',
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
                                $('#txt_cantidad_requisicion').attr('disabled', false);
                                $('#txt_cantidad_requisicion').val("0");
                                $('#total').val("0");

                            });
                    if (data.length > 1) {
                        $("#select-claveProd-requisicion").val("-1").change();

                    }
                }
            });
        } else {
            $.ajax({
                url: ($("#id_orden_de_compra").val() === '0') ? '../traspaso/ajax_listaclave' + idProd : '../../../traspaso/ajax_listaclave' + idProd,
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
                                $("#select-contenido-requisicion").val(select_val).change();
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
       // alert(id);
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
             console.log("Inicia Ajax servicio" );
            $.ajax({
                url:($("#hdd_idRequisicion").val() === '0') ? '../../ajax_listacontenidos' : '../compras/ajax_listacontenidos',
                type: 'POST',
                data: { _token: $("#_token").val(), idProducto: id,},
                dataType: 'json',

                success: function (data) {
                     console.log("Dentro de ajax servicio");
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
                        $("#select-claveProd-requisicion").val(select_val).change();
                        //obtenerProductoxidProdAlmacen(select_val);

                    });

                    if (data.length > 1) {
                        if ($("#hdd_idRequisicion").val() === '0') {
                            $("#select-contenido-requisicion").val("-1").change();
                        }
                    }
                }
            });
        }
    }

    function obtenerProductoxidProdAlmacen(id) {
        $.get('../../ajax_listaproductosxidprodalmacen/' + id, function (data) {
            $("#txt_producto_requisicion").val(data[0].Descripcion_corta);
            $("#txt_presentacion_requisicion").val(data[0].TipoPresentacion);
            $("#txt_uMedida_requisicion").val(data[0].UnidadMedida);
            $("#txt_impuesto_Compra").val(data[0].factor);
            $("#txt_Precio_Compra").val(data[0].precio);
        });
    }

    function obtenerlistacontenidoxIdProdAlmacen(id) {
      //  alert("lista contenido por id almace");
        $.ajax({
            url: ($("#hdd_idRequisicion").val() === '0') ? '../compras/ajax_listacontenidosxidprodalmacen' : '../../ajax_listacontenidosxidprodalmacen',
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
        $.get('../../ajax_listaproductos/' + id, function (data) {
                $("#txt_presentacion_requisicion").val(data.data[0].TipoPresentacion);
                $("#txt_uMedida_requisicion").val(data.data[0].UnidadMedida);
                $("#txt_Iva_requisicion").val(data.data[0].impuesto);
                $("#txt_Precio_Compra").val(data.data[0].precio);
                $("#txt_impuesto_Compra").val(data.data[0].factor);
         });

        if ($("#hdd_idRequisicion").val() === '0') {
            
        }
    }
    
    function obtenerInformacionRequisicion(id) {
        if ($("#hdd_idRequisicion").val() !== '0') {
            $.ajax({  
                url: ($("#hdd_idRequisicion").val() === '0') ? '../../ajax_compradetalle' : 'ajax_compradetalle',
                type: 'GET',
                dataType: 'JSON',
                success: function (data) {
                    var detalle = data.detalle;
                    var t_solicitud = data.tipo;
                    var row_data = [];
                    
                     if (t_solicitud == 3) {
                        for (var i = 0; i < detalle.length; i++) {
                            row_data.push(
                                    [
                                        detalle[i].id_producto,
                                        detalle[i].Descripcion_corta,
                                        detalle[i].clave,
                                        detalle[i].Unidad,
                                        detalle[i].Presentacion,
                                        detalle[i].Contenido,
                                        detalle[i].cantidad_solicitada,
                                        detalle[i].precio_unitario,
                                        detalle[i].subtotal,
                                        detalle[i].tasa_iva,
                                        0,
                                        detalle[i].id_requisicion
                                    ]);
                        }
                        console.log(data);
                        dataTable_requisicion.fnAddData(row_data);
                        for (i=0; i < rowCount; i++) { 
                     suma_row_table(document.getElementById('txt_cantidad_servicio_row'+i));
                    }
                }else{
                 if (t_solicitud == 2) {
                    for (var i = 0; i < detalle.length; i++) {
                            row_data.push(
                                    [   
                                        detalle[i].descripcion_servicio,
                                        detalle[i].cantidad_solicitada,
                                        detalle[i].precio_unitario,
                                        detalle[i].tasa_iva,
                                        detalle[i].subtotal,
                                        0,
                                        detalle[i].id_requisicion,
                                        detalle[i].IdServicio
                                    ]);
                            //console.log(row_data);
                        }
                        dataTable_requisicion_servicio.fnAddData(row_data);
                        for (i=0; i < rowCount; i++) { 
                     suma_row_table(document.getElementById('txt_cantidad_servicio_row'+i));
                    }
                    }
                  }
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

    $('#requisition_servi').change(function(){
        var id = $('#requisition_servi').find(":selected").text();
            $.ajax({
                url: '../../cargarRequisicionServicio/'+ id,
                type: 'GET',
                dataType: 'JSON',
                success: function (data) {
                     var row_data = [];
                    $.each(data, function() {
                      $.each(this, function (index, valu) {
                            row_data.push([
                                 valu.nombre_servicio,  
                                 valu.cantidad_solicitada,
                                 "",
                                 0,
                                 0,
                                 0,
                                 valu.id_requisicion                                
                                ]);
                           });
                        });   
                   dataTable_requisicion_servicio.fnAddData(row_data);
                   /*for ($i=0; $i < rowCount; $i++) { 
                     suma_row_cantidad($('#txt_cantidad_servicio_row'+$i));
                    }*/
                }
            });
        });
    $('#requisition').change(function(){
        var id = $('#requisition').find(":selected").text();
            $.ajax({
                url: '../../cargarRequisicionCompra/'+ id,
                type: 'GET',
                dataType: 'JSON',
                success: function (data) {
                    var row_data = [];
                    $.each(data, function() {
                      $.each(this, function (index, value) {
                            row_data.push([
                                 value.id_producto,
                                 value.Descripcion_corta,
                                 value.clave,
                                 value.UnidadMedida,
                                 value.TipoPresentacion,
                                 value.cantidad,
                                 value.cantidad_solicitada,
                                 value.precio,
                                 0,
                                 value.factor/100,
                                 0,
                                 value.id_requisicion
                                ]);

                           });

                        });   
                   dataTable_requisicion.fnAddData(row_data);

                    for (i=0; i < rowCount; i++) { 
                     suma_row_table(document.getElementById('txt_cantidad_servicio_row'+i));
                    // return rowCount + 1;
                    }
                    //return rowCount = 0;
                   //console.log(rowCount);
                }
            });
        });

    function obtenerTotalxCantidad() {
        var cantidad = parseFloat($("#txt_cantidad_requisicion").val());
    }
});