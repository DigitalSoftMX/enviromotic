$(function () {

    $('input[name=tipo_po]').iCheck({
        radioClass: 'iradio_square-green',
    });
    
    var rowCount = 0;
    var items = 0;
    var itemss= 1;
    var dataTable_Orden_Compra =
       $("#tabla_Entrada_X_Orden_Compra").dataTable({
        "fnCreatedRow": function (nRow, aData, iDataIndex) {
        $(nRow).attr('id', 'ingRow' +iDataIndex) //
         if(rowCount == 0)
          {
             items = 1;
              rowCount++;
          }else{
            rowCount++;
             items ++;
              itemss ++;
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
                "bsortable": false, //Id del producto
                "aTargets": [0],
                "mRender": function (data) {
                    return '<input type="checkbox" data-id="'+rowCount+'" name="check_row['+ itemss +']" id="check_row' + rowCount + '" class="form-control"  onclick="marcaruno(this);">';
                }
            },
            {
                "bsortable": false, //clave
                "aTargets": [1]
            },
            {
                "bsortable": false, //factura
                "aTargets": [2]
            },
            {
                "bsortable": false, //IdOredenCompra
                "aTargets": [3]
            },
            {
                "bsortable": false, //ClaveProducto
                "aTargets": [4]
            },
            {
                "bsortable": false, //NombreProducto
                "aTargets": [5]
            },
            {
                "bsortable": false, //CostoPromedio
                "aTargets": [6],
                "mRender": function (data) {
                    return '<input type="text" id="costo_promedio'+rowCount+'" disabled="" name="costo_promedio['+items+']" data-id="'+rowCount+'" onkeypress="return isNumberKey(this);" onkeyup="suma_row_table(this);"   class="form-control" value="' + data + '">';
                }
            },
            {
                "bsortable": false, //Precio
                "aTargets": [7],
                "mRender": function (data) {
                    return '<input type="text" id="precio_row'+rowCount+'" disabled="" name="precio_row['+items+']" data-id="'+rowCount+'" onkeypress="return isNumberKey(this);" onkeyup="suma_row_table_price(this);" class="form-control" value="' + data + '">';                     
                }
            },
            {
                "bsortable": false, //Cantidad
                "aTargets": [8],
                 "mRender": function (data) {
                    return '<input type="text" disabled="" id="cantidad_row'+rowCount+'" data-id="'+rowCount+'" name="cantidad_row" class="form-control" onkeyup="suma_row_table(this);" onkeypress="return isNumberKey(this);"  value="' + data + '">';
                }
            },
            {
                "bsortable": false, //Importe
                "aTargets": [9],
                "mRender": function (data) {
                    return '<input type="text" id="sub_total_row'+rowCount+'" disabled="" data-id="'+rowCount+'" onkeypres="suma_row_iva(this);" class="form-control"   value="' + data + '">';
                }
            },
            {
                "bsortable": false, //iva
                "aTargets": [10],
                 "mRender": function (data) {
                    return '<input type="text" disabled="" id="iva_row'+rowCount+'" name="iva_row" data-id="'+rowCount+'" class="form-control suma_iva_servicio"  value="' + data + '">';
                }
            },
            {
                "bsortable": false, //estatus
                "aTargets": [11]
            },
            {
                "bsortable": false, //%iva
                "aTargets": [12],
                "visible": true,
                 "mRender": function (data) {
                    return '<input type="text" id="factor_iva'+rowCount+'" name="factor_iva['+items+']" data-id="'+rowCount+'" class="form-control"  value="' +data+ '">';
                }
            },
            
            {
                "bsortable": false, //idDetalle
                "aTargets": [13],
                "visible": false
            },
            {
                "bsortable": false, //Activo
                "aTargets": [14],
                "visible":false
            },
            {
                "bsortable": false, //IdProducto
                "aTargets": [15],
                "visible":false
            },
            {
                "bsortable": false, //IdReq
                "aTargets": [16],
                "visible":false
            },
            {
                "bsortable": false,
                "aTargets": [17],
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

    var dataTable_servicio =
       $("#tabla_Entrada_X_Orden_Servicio").dataTable({
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
                "aTargets": [0],
                "mRender": function (data) {
                    return '<input type="checkbox" data-id="'+rowCount+'" name="check_row['+ itemss +']" id="check_row' + rowCount + '" class="form-control"  onclick="marcaruno_servicio(this);">';
                }
            },
            {
                "bsortable": false, //Clave
                "aTargets": [1]
            },
            {
                "bsortable": false, //Factura
                "aTargets": [2]
            },
            {
                "bsortable": false, //IdOrden
                "aTargets": [3]
            },
            {
                "bsortable": false, //Descripcion servicio
                "aTargets": [4],
                "mRender": function (data) {
                    return '<input type="text" disabled id="servicio_row_ser'+rowCount+'" name="servicio_row_ser['+items+']" data-id="'+rowCount+'"  onkeypress="return isNumberKey(this);"  class="form-control" value="' + data + '">';
                }
            },
            {
                "bsortable": false, //Costo Promedio
                "aTargets": [5],
                "mRender": function (data) {
                    return '<input type="text" disabled id="costo_promedio_servicio'+rowCount+'" name="costo_promedio_servicio['+items+']" data-id="'+rowCount+'" onkeypress="return isNumberKey(this);" class="form-control" value="' + data + '">';
                }
            },
            {
                "bsortable": false, //Precio
                "aTargets": [6],
                "mRender": function (data) {
                    return '<input type="text" id="precio_row_servicio'+rowCount+'" name="precio_row_servicio['+items+']"  data-id="'+rowCount+'" onkeyup="suma_row_table_price_servicio(this); retencion_iva_isr(this);" class="form-control" value="' + data + '"> ' ;
                }
            },
            {
                "bsortable": false, //Cantidad
                "aTargets": [7],
                "mRender": function (data) {
                    return '<input type="text" disabled id="cantidad_row_servicio'+rowCount+'" onkeyup="suma_row_table_servicio(this); retencion_iva_isr(this);" name="cantidad_row_servicio['+items+']" data-id="'+rowCount+'" class="form-control" value="' + data + '">';
                }
            },
            {
                "bsortable": false, //Importe
                "aTargets": [8],
                "mRender": function (data) {
                    return '<input type="text" disabled id="importe_row_servicio'+rowCount+'"  name="importe_row_servicio['+items+']" data-id="'+rowCount+'" class="form-control suma_total_servicio" value="' + data + '">';
                }
            },
            {
                "bsortable": false, //IvaSuma
                "aTargets": [9],
                "mRender": function (data) {
                    return '<input type="text" disabled id="iva_row_servicio'+rowCount+'"  name="suma_iva_servicio_row['+items+']" data-id="'+rowCount+'" class="form-control" value="' + data + '">';
                }
            }, 
            {
                "bsortable": false, //%iva
                "aTargets": [10],
                 "mRender": function (data) {
                    return '<input type="text" id="factor_iva_servicio'+rowCount+'" name="factor_iva_servicio['+items+']" data-id="'+rowCount+'" class="form-control"  value="' +data+ '">';
                }
            },
            {
                "bsortable": false, //Estatus
                "aTargets": [11]
            },
            {
                "bsortable": false, //Id Servicio
                "aTargets": [12]
            },
            {
                "bsortable": false,
                "aTargets": [13],
                "mRender": function (index) {
                    var disabledButton = ($("#hdd_idRequisicion").val() === '0') ? '' : 'disabled';
                    return '<button class="btn btn-danger btn-xs" onclick="myDeleteFunctionServicio(this);" id="btn-quitar-item_servicio" type="button" ' + disabledButton + '><i class="glyphicon glyphicon-trash"></i></button>';
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

    var dataTable_Orden_Detalle = $("#table_Orden_Detalle_Index").dataTable({
        "bDeferRender": true,
        "bFilter": true,
        "bPaginate": true,
        "bInfo": true,
        "bLenghtChange": false,
        "iDisplayLength": 25,
        "bProcessing": true,
        "aoColumnDefs": [
            {
                "bsortable": false, //NumeroEntrada
                "aTargets": [0],
                "mRender": function (data) {
                    return data;
                }
            },
            {
                "bsortable": false, //Folio
                "aTargets": [1],
                "mRender": function (data) {
                    return data;
                }
            },
            {
                "bsortable": false, //Fechafactura
                "aTargets": [2],
                "mRender": function (data) {
                    return data;
                }
            },
            {
                "bsortable": false, //Proveedor
                "aTargets": [3],
                "mRender": function (data) {
                     return data;
                }
            },
            {
                "bsortable": false, //FechaGeneración
                "aTargets": [4],
                "mRender": function (data) {
                     return data;
                }
            },
            {
                "bsortable": false, //Contrarecibo
                "aTargets": [5],
                "mRender": function (data) {
                     return data;
                }
            },
            {
                "bsortable": false, //Subtotal
                "aTargets": [6],
                "mRender": function (data) {
                    return data;
                }
            },
            {
                "bsortable": false, //Iva
                "aTargets": [7],
                "mRender": function (data) {
                     return data;
                }
            },
            {
                "bsortable": false, //Total
                "aTargets": [8],
                "mRender": function (data) {
                     return data;
                }
            },
            {
                "bsortable": false, //TipoMoneda
                "aTargets": [9],
                "mRender": function (data) {
                    return data;
                }
            },
            {
                "bsortable": false, //TipoCambio
                "aTargets": [10],
                "mRender": function (data) {
                     return data;
                }
            },
            {
                "bsortable": false, //Motivo de Calcelación
                "aTargets": [11],
                "mRender": function (data) {
                    return data;
                }
            },
            {
                "bsortable": false, //estatus
                "aTargets": [12],
                "mRender": function (data) {
                    return data;
                }
            },
            {
                "bsortable": false, //Acciones
                "aTargets": [13]
                
            },
        ],
        "aLengthMenu": [
            [5, 10, -1],
            [5, 10, 'Todo'],
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

  $("#ordenes_compra").autocomplete({
        source: function (request, response) {
            $.ajax({
                url: '../searchajax_order',
                dataType: "json",
                data: {
                    term: request.term,
                    // NacionalDolar = $("input[name='tipo_moneda']:checked").val();
                    tipo : $("input[name='tipo_po']:checked").val(),
                    prove: $("#id_proveedores").val()
                    //console.log(request.term);
                },
                success: function (data) {
                    response(data);
                   
                }
            });
        },
        autoFocus: true,
        minLength: 1,
        select: function (event, ui)
        {
             obtenerProductoxNombre(ui.item.id);

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


    //obtenerlistaclaves(null);
    //obtenerlistacontenido(null);
    //obtenerInformacionRequisicion();
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
        dataTable_Orden_Compra.fnDeleteRow(tr);

        console.log(tr);
         suma_iva_agregar();
         suma_col_total();
         suma_col();
        return rowCount = 0;
        //obtenerTotal();
    });

      $(document).on("click", "#btn-quitar-item_servicio", function () {
        var tr = $(this).closest('tr').get(0);
        dataTable_servicio.fnDeleteRow(tr);
        suma_iva_agregar_servicio();
        suma_col_total_servicio();
        suma_col_servicio();
        retencion_iva_isr();
        //obtenerTotal();
    });

    $("#btn_guardar_Entrada_X_Orden").click(function (e) {
        var sItemsRequisicion = [];
        var msg = '';
        var $editar = 0;
        var entrada = $('#entrada_numero').val();
        var contra = $("#contrarecibo").val();
        var fol = $("#FFactura").val();
        var ffac = $("#FolioFctura").val();

        //alert(ffac);
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

        if (dataTable_Orden_Compra.fnGetData().length === 0) {
            msg += 'Es necesario agregar un producto para realizar la Orden de Compra';
           console.log(dataTable_Orden_Compra);
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
        
        $(dataTable_Orden_Compra.fnGetNodes()).each(function (index, elem) {
            var aPos = dataTable_Orden_Compra.fnGetPosition(this);
            var aData = dataTable_Orden_Compra.fnGetData(aPos[0]);

            //se obtiene arreglo de strings
            var tdArray = aData[index];
            var tdArrayR = aData[index];
            var tdArrayIDPro = aData[index];
            var tdArrayOrden = aData[index];
            var tdRequisicion = aData[index];
            //console.log(tdArray[0]+' '+tdArray[1]+' '+tdArray[2]+' '+tdArray[6]);
            //se detecta la etiqueta input para poder obtener el valor verdadero dentro de la fila
            var nRow = $('#tabla_Entrada_X_Orden_Compra tbody tr:eq(' + index + ') td').parent('tr')[0];
            //se obtiene todas las etiquetas input detectadas dentro de la fila(etiqueta tr)
            var jqInputs = $('input', nRow);
            var input_costoPromedio = jqInputs[1]//Se obtiene el valor de Costopromedio
            var input_precio = jqInputs[2]//Se obtiene el valor de precio
            var input_cantidad = jqInputs[3];//Se obtiene el valor de cantidad
            var input_subtotal = jqInputs[4]//Se obtiene el valor de Importe
            var input_subtotaliva = jqInputs[5]//Se obtiene el valor de subtotaliva
            var input_iva = jqInputs[6]//Se obtiene el valor de iva
            

            sItemsRequisicion.push({'IdProducto': tdArray[13], 'CostoPromedio' : input_costoPromedio.value, 'Precio': input_precio.value, 'Cantidad': input_cantidad.value,  'SubTotall': input_subtotal.value, 'SubTotalIva': input_subtotaliva.value,
            'Iva': input_iva.value, 'Activo': tdArrayR[11], 'Producto' : tdArrayIDPro[15], 'IdRequisicion': tdRequisicion[16], 'Orden' : tdArrayOrden[3]});
            console.log(tdArray);
        });
        if ($("#hdd_idRequisicion").val() === '0') {
            $.ajax({
                'url': ($("#hdd_idRequisicion").val() === '0') ? '../entradas/GuardarEntrada_X_Orden' : '../../GuardarEntrada_X_Orden',
                'type': 'POST',
                'data':
                        {
                            _token: $('#_token').val(),
                            tipo_Orden : $("input[name=tipo_po]:checked").val(),
                            tipo_moneda : $("input[name=tipo_moneda]:checked").val(),
                            idorden : $("#orden").val(),
                            DosFac : $("#dosfacturas").val(),
                            FolioFctura : $("#FolioFctura").val(),
                            status : $("#estatus_facturas").val(),
                            Cambio : $("#tipo_cambio").val(),
                            observaciones : $("#observaciones").val(),
                            fechaFactura : $("#fecha_factura").val(),
                            UGenera : $("#hdd_IdUsuario").val(),
                            Recibo : $("#contra_recibo").val(),
                            Entrada : $("#entrada_numero").val(),
                            folio : $("#folio").val(),
                            Proveedor : $("#id_proveedores").val(),
                            subtotal : $("#subtotal_factura").val(),
                            iva : $("#ivas_factura").val(),
                            totalFactura : $("#total_factura").val(),
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


                     if (contra == 1 && estatus === 'Ok') {
                            bootbox.confirm("Desea Imprimir El Contra Recibo", function(result) {    
                              if (result) {
                               var contrarecibo = '../entradas/contrarecibo';
                               var reporte = '../entradas/ReporteEntrada';
                               
                               window.open(reporte +'/'+ entrada);
                               window.open(contrarecibo +'/'+ entrada);
                              }    
                            }).css({
                                'top': '50%',
                                'margin-top': function () {
                                return -($(this).height() / 2);
                                }
                                });
                         }else{
                            if (contra == 1 && estatus === 'Falla');
                         }

                    setTimeout(function () {

                     window.location.href = '../entradas';

                     if (contra == 0 && estatus === 'Ok') {
                     var contrarecibo = '../entradas/contrarecibo';
                     var reporte = '../entradas/ReporteEntrada';
                     window.open(reporte +'/'+ entrada);
                     window.open(contrarecibo +'/'+ entrada);  
                     }else{
                        if (contra == 0 && estatus === 'Falla');
                     }

                                       
                    }, 4000);
                },
            });
        }
        else{
            $.ajax({
                'url': ($("#hdd_idRequisicion").val() === '0') ? '../actualizar_Orden_Compra' : '../compras/actualizar_Orden_Compra',
                'type': 'POST',
                'data':
                        {
                            _token: $('#_token').val(),
                            partida: $("#txt_partidaRequisicion").val(),
                            tipo_requisicion : $("input[name=tipo_req]:checked").val(),
                            editar : $editar,
                            observaciones : $("#observaciones").val(),
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
                        window.location.href = '../compras';
                    }, 4000);
                }
            });
        }
    });

     $("#btn_Guardar_Servicio").click(function (e) {
        var sItemsRequisicion = [];
        var msg = '';
        var $editar = 0;
        var entrada = $('#entrada_numero').val();
        var contra = $("#contrarecibo").val();
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

        if (dataTable_servicio.fnGetData().length === 0) {
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
            $(dataTable_servicio.fnGetNodes()).each(function (index, elem) {
            var aPos = dataTable_servicio.fnGetPosition(this);
            var aData = dataTable_servicio.fnGetData(aPos[0]);

            //se obtiene arreglo de strings
            var tdArray = aData[index];
            var tdArrayR = aData[index];
            var tdArrayIDPro = aData[index];
            var tdArrayIdOrdenServicio = aData[index];
            //console.log(tdArray[0]+' '+tdArray[1]+' '+tdArray[2]+' '+tdArray[6]);
            //se detecta la etiqueta input para poder obtener el valor verdadero dentro de la fila
            var nRow = $('#tabla_Entrada_X_Orden_Servicio tbody tr:eq(' + index + ') td').parent('tr')[0];
            //se obtiene todas las etiquetas input detectadas dentro de la fila(etiqueta tr)
            var jqInputs = $('input', nRow);
            var input_costoPromedio = jqInputs[2]
            var input_precio = jqInputs[3]//Se obtiene el valor de precio
            var input_cantidad = jqInputs[4];//Se obtiene el valor de cantidad
            var input_subtotal = jqInputs[5]//Se obtiene el valor de subtotal
            var input_subtotaliva = jqInputs[6]//Se obtiene el valor de subtotaliva
            var input_iva = jqInputs[7]//Se obtiene el valor de iva
            sItemsRequisicion.push({'IdProducto': tdArray[12], 'CostoPromedio' : input_costoPromedio.value, 'Precio': input_precio.value, 'Cantidad': input_cantidad.value,  'SubTotal': input_subtotal.value, 'SubTotalIva': input_subtotaliva.value,
            'Iva': input_iva.value, 'Activo': tdArrayR[11], 'Producto' : tdArrayIDPro[15], 'OrdenServicio' : tdArrayIdOrdenServicio[3]});
           console.log(tdArray, tdArrayIDPro);
    });
        $.ajax({
            //($("#hdd_idRequisicion").val() === '0') ? '../requisicion/guardar_requisicion' : '../../requisicion/guardar_requisicion',
            'url': ($("#hdd_idRequisicion").val() === '0') ? '../entradas/GuardarEntrada_X_Servicio' : '../../GuardarEntrada_X_Servicio',
            'type': 'POST',
            'data':
                    {
                        _token: $('#_token').val(),
                            tipo_Orden : $("input[name=tipo_po]:checked").val(),
                            tipo_moneda : $("input[name=tipo_moneda]:checked").val(),
                            idorden : $("#orden").val(),
                            status : $("#estatus_facturas").val(),
                            DosFac : $("#dosfacturas").val(),
                            FolioFctura : $("#FolioFctura").val(),
                            Cambio : $("#tipo_cambio").val(),
                            observaciones : $("#observaciones").val(),
                            fechaFactura : $("#fecha_factura").val(),
                            UGenera : $("#hdd_IdUsuario").val(),
                            Recibo : $("#contra_recibo").val(),
                            Entrada : $("#entrada_numero").val(),
                            Ret_Isr : $("#retencion_ISR").val(),
                            Ret_iva : $("#retencion_IVA").val(),
                            folio : $("#folio").val(),
                            Proveedor : $("#id_proveedores").val(),
                            subtotal : $("#subtotal_factura").val(),
                            iva : $("#ivas_factura").val(),
                            totalFactura : $("#total_factura").val(),
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

                if (contra == 1 && estatus === 'Ok') {
                            bootbox.confirm("Desea Imprimir El Contra Recibo", function(result) { 
                            if (result) {
                               var contrarecibo = '../entradas/contrarecibo';
                               var reporte = '../entradas/ReporteEntrada';
                               
                               window.open(reporte +'/'+ entrada);
                               window.open(contrarecibo +'/'+ entrada);
                              }    
                            }).css({
                                'top': '50%',
                                'margin-top': function () {
                                return -($(this).height() / 2);
                                }
                                });
                         }else{
                            if (contra == 1 && estatus === 'Falla');
                         }

                    setTimeout(function () {

                     window.location.href = '../entradas';

                     if (contra == 0 && estatus === 'Ok') {
                     var contrarecibo = '../entradas/contrarecibo';
                     var reporte = '../entradas/ReporteEntrada';
                     window.open(reporte +'/'+ entrada);
                     window.open(contrarecibo +'/'+ entrada);  
                     }else{
                        if (contra == 0 && estatus === 'Falla');
                     }

                                       
                    }, 4000);
            }
        });
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


   /* function obtenerlistaclaves(id) {
        var idProd = (id === null) ? '' : '/' + id;
        if (id === null) {
            $.ajax({
                url: 'entradas/items_orden', 
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
                url: ($("#hdd_idRequisicion").val() === '0') ? '../traspaso/ajax_listaclave' + idProd : '../traspaso/ajax_listaclave' + idProd,
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
    }*/

    
    function obtenerProductoxidProdAlmacen(id) {
        $.get('../compras/ajax_listaproductosxidprodalmacen/' + id, function (data) {
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
            url: ($("#hdd_idRequisicion").val() === '0') ? '../compras/ajax_listacontenidosxidprodalmacen' : '../compras/ajax_listacontenidosxidprodalmacen',
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
        var entrada = $('#entrada_numero').val();
        var folio = $('#folio').val();
        var Contra = $('#Total_impuesto').val();
         $.ajax({
                url: '../entradas/items_orden/'+ id,
                type: 'GET',
                dataType: 'JSON',
                success: function (data) {
                     var t_solicitud = data.tipo;
                     var Moneda = data.tipoMoneda;
                     var Total = data.total;
                    
                      general = Contra;
                      //alert(general);

                      b = (+general + +parseFloat(Total));

                      //alert(b)

                     $("#Total_impuesto").val(parseFloat(b));
                     //alert(Total);
                     var row_data = [];
                     NacionalDolar = $("input[name='tipo_moneda']:checked").val();

                     //alert(NacionalDolar);

                    if (Moneda != 0 || NacionalDolar == 0) {
                            if (t_solicitud=== 3 || t_solicitud === 1) {
                            $.each(data, function() {

                      $.each(this, function (index, value) {
                        $("#orden").val(value.id_orden_compra_maestro);
                        $("#FolioFctura").val(folio);
                        
                        if(value.activo == 1)
                           {
                              estatus ="Activo";
                           }else{
                             estatus ="Inactivo" 
                           }
                        if(value.tasa_iva != 0){
                             //iva = (iva/100) + 1;
                           iva = (value.tasa_iva);
                        //   sub_total = (value.cantidad * value.precio);
                           sub_total_iva = value.subtotal * iva;
                           }
                           else{
                              //iva= value.tasa_iva;
                              sub_total_iva = 0;
                             // sub_total = (value.cantidad * value.precio);
                           }
                           if (value.precio_unitario != 0) {
                                precio_unitario = value.precio_unitario / $("#tipo_cambio").val();
                           }
                           impor = value.cantidad_solicitada * precio_unitario;
                           iva = impor * value.tasa_iva;

                            row_data.push([
                                0,
                                entrada,
                                folio,
                                value.id_orden_compra_maestro,
                                value.clave,
                                value.Descripcion_corta,
                                number_format(value.CostoPromedio,2,'.',','),
                                precio_unitario,
                                value.cantidad_solicitada,
                                number_format(impor,2),
                                number_format(iva,2),
                                estatus,
                                value.tasa_iva,
                                value.id,
                                value.activo,
                                value.id_producto,
                                value.id_requisicion

                            ]);
                         });

                       });   
                   // console.log(row_data)

                   dataTable_Orden_Compra.fnAddData(row_data);
                    }else{
                            $.each(data, function() {
                      $("#FolioFctura").val(folio);
                      $.each(this, function (index, value) {
                         if(value.estatus == 0){
                                  Estatus ="Pendiente";
                                  }else{
                                  if(value.estatus == 1)
                                  {
                                  Estatus ="Parcialmente surtida";
                                  }else{
                                  if(value.estatus == 2)
                                  {
                                  Estatus ="Surtida";
                                  }
                                  else
                                  {
                                  if(value.estatus == 3)
                                   {
                                   Estatus ="Cancelada";
                                   }               
                                } 
                             }
                          }
                        if(value.tasa_iva != 0){
                             //iva = (iva/100) + 1;
                           iva = (value.tasa_iva) / 100;
                        //   sub_total = (value.cantidad * value.precio);
                           sub_total_iva = value.subtotal * iva;

                           //console.log(sub_total_iva);
                           }
                           else{
                              //iva= value.tasa_iva;
                              sub_total_iva = 0;
                             // sub_total = (value.cantidad * value.precio);
                           }
                           //if (value.precio_unitario != 0) {
                                precio_unitario = value.precio_unitario / $("#tipo_cambio").val();
                           //}
                           impor = value.cantidad_solicitada * precio_unitario;
                           iva = impor * value.tasa_iva/100;

                            row_data.push([
                                0,
                                entrada,
                                folio,
                                value.id_orden_compra_maestro,
                                value.descripcion_servicio,
                                number_format(value.CostoPromedio,2),
                                precio_unitario,
                                value.cantidad_solicitada,
                                impor,
                                iva,
                                value.tasa_iva/100,
                                Estatus,
                                value.IdServicio                             
                            ]);
                         });
                       });   
                    //console.log(row_data)
                   dataTable_servicio.fnAddData(row_data);
                    }
                    }else{
                        alert("No se Puede Cargar la orden en Moneda Extranjera!!!");
                    }
                }

            });
    }
    
    /*function obtenerInformacionRequisicion() {
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
                    }else{
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
    }*/

    $('#requisition_servi').change(function(){
        var id = $('#requisition_servi').find(":selected").text();
            $.ajax({
                url: '../compras/cargarRequisicionServicio/'+ id,
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
                url: '../compras/cargarRequisicionCompra/'+ id,
                type: 'GET',
                dataType: 'JSON',
                success: function (data) {
                    var row_data = [];
                    $.each(data, function() {
                      $.each(this, function (index, value) {
                            row_data.push([
                                 value.id,
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

    $("#month").autocomplete({
        source: function(request ,response){
          $.ajax({
                url: 'BuscarPorFecha',
                type: 'GET',
                dataType: 'JSON',
                data: {
                    mes: $("#month").val()
                },
                success:function(data){
                    response(data)
                   //console.log(data);

                }
          });
        },
        autoFocus: true,
        select: function(event,ui){
             var table = $('#table_Orden_Detalle_Index').DataTable();
             table.clear().draw();
             obtenerFecha(ui.item.id);
          
        },
        change: function(event,ui){
           
        },
        messages: {
            noResults: '',
            results: function () {}
        }
      });

      function obtenerFecha() {
            $.ajax({
                url: 'BuscarPorFecha',
                type: 'GET',
                dataType: 'JSON',
                data: {
                    mes: $("#month").val()
                    //alert(mes)
                },

                  success:function(data){
                  
                    console.log(data);
                    var row_data = [];
                    $.each(data, function() {
                      $.each(this, function (index, value) {
                          if(value.TipoMoneda == 0)
                               {
                               moneda ="Moneda Nacional";
                               }else{
                               moneda ="Dolares" ;
                            }
                            if (value.Estatus == 1) {
                                estatus = "Activo";
                            }else{
                                estatus = "Inactivo";
                            }
                            row_data.push([
                                    value.id,
                                    value.FolioFActura,
                                    value.FechaFactura,
                                    value.razon_social,
                                    value.Fecha,
                                    value.FolioContraRecibo,
                                    value.Subtotal,
                                    value.Iva,
                                    value.Total,
                                    moneda,
                                    value.TipoCambio,
                                    value.MotivoCancelacion,
                                    estatus
                                ]);

                           });

                        });   
                   dataTable_Orden_Detalle.fnAddData(row_data);

                }
            });
     }
});