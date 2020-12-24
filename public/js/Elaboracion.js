$(function () {

    $('input[name=tipo_po]').iCheck({
        radioClass: 'iradio_square-green',
    });
    
    var rowCount = 0;
    var items = 0;
    var itemss= 1;
/******************Tabla de Receta******************************/
    var dataTable_Receta =
       $("#Table_Receta").dataTable({
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
                "bsortable": false, //factura
                "aTargets": [3]
                
            },
            {
                "bsortable": false, //factura
                "aTargets": [4]
                
            },
            {
                "bsortable": false, //factura
                "aTargets": [5]
                
            },
            {
                "bsortable": false,
                "aTargets": [6],
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

/******************Tabla de Utensilio de Preparación******************************/
    var dataTable_Elaboracion =
       $("#Table_Metodo_Elaboracion").dataTable({
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
                "bsortable": false,
                "aTargets": [3],
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
/******************Tabla de Utensilio de Preparación******************************/
    var dataTable_Utensilio =
       $("#Table_Utencilio_Preparacion").dataTable({
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
                "bsortable": false,
                "aTargets": [3],
                "mRender": function (index) {
                    return '<button class="btn btn-danger btn-xs" value="'+rowCount+'" id="btn-quitar-item2" type="button"><i class="glyphicon glyphicon-trash"></i></button>';
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
/******************Tabla de Utensilio Monaje******************************/
    var dataTable_Montaje =
       $("#Table_Utencilio_Montaje").dataTable({
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
                "bsortable": false,
                "aTargets": [3],
                "mRender": function (index) {
                    return '<button class="btn btn-danger btn-xs" value="'+rowCount+'" id="btn-quitar-item2" type="button"><i class="glyphicon glyphicon-trash"></i></button>';
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

    $("#Nombre").autocomplete({
        source: function (request, response) {
            $.ajax({
                url: ($("#hdd_idRequisicion").val() === '0') ? '../../searchajaxPurchaseOrder' : '../searchajaxPurchaseOrder',
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
    $("#Cantidad").keypress(function (e) {
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
        //obtenerlistacontenidoxIdProdAlmacen(null);
/******************Agregar un reglon a la tabla de Receta*************************/
    $("#btn_agregarReceta").click(function () {

        var row_data = [];
        var cantidad = 0;
        var contenido = 0;
        var contador = $("#txt_cantidad_requisicion").val();

        // alert(contador);
        //var tipo = $("input[name=opcion_unidades]:checked").val();
        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'slideDown',
            positionClass: "toast-top-full-width",
            timeOut: 4000
        };
        
        if ($("#Descripcion").val() === '') {
            toastr.error('', 'Es necesario ingresar la Descripcion');
            $("#Descripcion").focus();
            return;
           
        }

        if ($("#Cantidad").val() === '' || $("#Cantidad").val() === '0.00') {
            toastr.error('', 'Es necesario ingresar la cantidad');
            $("#Cantidad").focus();
            return;
        }

        descripcion = $("#Descripcion").val();

        //console.log(descripcion);
         if(contador == 1)
          { 
            contador = contador+1;
            rowCount++;
            //alert(contador);
          }
        row_data.push([ 
            $("#clave").val(),
            $("#Nombre").val(),
            $('#presentacion').val(),
            $('#costoProd').val(),
            $('#Cantidad').val(),
            $('#costoArt').val()
            ]);
        //console.log(descripcion);
        var arrayDatatable = dataTable_Receta.fnGetData();
        if (arrayDatatable.length === 0) {
            
            dataTable_Receta.fnAddData(row_data);
        } else {
            var nuevaFila = true;
            $.each(arrayDatatable, function (index, element) {
                if (element[0] === row_data[0][0]) {

                }
            });

            if (nuevaFila) {
                dataTable_Receta.fnAddData(row_data);
            }

        }

        $("#Nombre").val("");
        $("#presentacion").val("");
        $("#unidadMed").val("");
        $("#contenido").val("");
        $("#Cantidad").val("0.00");
        $("#costoProd").val("0.00");
        $("#costoArt").val("0.00");
        $("#Piezas").val("0.00");
        obtenerlistacontenido(null);
        obtenerlistaclaves(null);
        
    });
     $(document).on("click", "#btn-quitar-item", function () {
        var tr = $(this).closest('tr').get(0);
        dataTable_Receta.fnDeleteRow(tr);

        console.log(tr);
        return rowCount = 0;
        //obtenerTotal();
    });

      $("#btn_limpiar").click(function () {
        $("#clave").val("");
        $("#clave").focus();
        //var $miSelect = $('#Nombre');
        //$miSelect.val($miSelect.children('option:first').val());
        //$('#Nombre').val($('#Nombre > option:first').val());
        //var select = $('#Nombre');
        //select.val($('option:first', select).val());

        $('#Nombre option').each(function () {
            if (this.defaultSelected) {
                this.selected = true;
                return false;
            }
        });
        //$('#Nombre').find('option:first').attr('selected', 'selected').parent('select');

        $("#Nombre").val("");
        $("#presentacion").val("");
        $("#unidadMed").val("");
        $("#contenido").val("");
        $("#Cantidad").val("0.00");
        $("#costoProd").val("0.00");
        $("#costoArt").val("0.00");
        $("#Piezas").val("0.00");
        obtenerlistacontenido(null);
        obtenerlistaclaves(null);
        //obtenerlistaclave(null);
    });

/******************Agregar un reglon a la tabla de Metodo de Preparación*************************/
    $("#btn_agregarTr").click(function () {

        var row_data = [];
        var cantidad = 0;
        var contenido = 0;
        var contador = $("#txt_cantidad_requisicion").val();

        // alert(contador);
        //var tipo = $("input[name=opcion_unidades]:checked").val();
        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'slideDown',
            positionClass: "toast-top-full-width",
            timeOut: 4000
        };
        
        if ($("#Descripcion").val() === '') {
            toastr.error('', 'Es necesario ingresar la Descripcion');
            $("#Descripcion").focus();
            return;
           
        }

        if ($("#txt_cantidad_requisicion").val() === '') {
            toastr.error('', 'Es necesario ingresar el número de paso');
            $("#txt_cantidad_requisicion").focus();
            return;
        }

        descripcion = $("#Descripcion").val();

        //console.log(descripcion);
         if(contador == 1)
          { 
            contador = contador+1;
            rowCount++;
            //alert(contador);
          }
        row_data.push([ 

            "",
            $("#txt_cantidad_requisicion").val(),
            $("#Descripcion").val()
            //descripcion
            ]);
        //console.log(descripcion);
        var arrayDatatable = dataTable_Elaboracion.fnGetData();
        if (arrayDatatable.length === 0) {
            
            dataTable_Elaboracion.fnAddData(row_data);
        } else {
            var nuevaFila = true;
            $.each(arrayDatatable, function (index, element) {
                if (element[0] === row_data[0][0]) {

                }
            });

            if (nuevaFila) {
                dataTable_Elaboracion.fnAddData(row_data);
            }

        }

        $("#Descripcion").val("");
        $("#Descripcion").focus();
        $("#txt_cantidad_requisicion").val(rowCount+1);
    });
     $(document).on("click", "#btn-quitar-item", function () {
        var tr = $(this).closest('tr').get(0);
        dataTable_Elaboracion.fnDeleteRow(tr);

        console.log(tr);
        return rowCount = 0;
        //obtenerTotal();
    });
/******************Agregar un reglon a la tabla de Utensilio Preparación*************************/
        $("#btn_agregar_Metodo").click(function () {

        var row_data = [];
        var cantidad = 0;
        var contenido = 0;
        var contador = $("#txt_cantidad_requisicion").val();

        // alert(contador);
        //var tipo = $("input[name=opcion_unidades]:checked").val();
        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'slideDown',
            positionClass: "toast-top-full-width",
            timeOut: 4000
        };
        
        if ($("#Descripcion").val() === '') {
            toastr.error('', 'Es necesario ingresar la Descripcion');
            $("#Descripcion").focus();
            return;
           
        }

        if ($("#Cantidad").val() === '' || $("#Cantidad").val() === '0') {
            toastr.error('', 'Es necesario ingresar la Cantidad');
            $("#Cantidad").focus();
            return;
        }

        descripcion = $("#Descripcion").val();

        //console.log(descripcion);
         if(contador == 1)
          { 
            contador = contador+1;
            rowCount++;
            //alert(contador);
          }
        row_data.push([ 
            $("#cat_utensilio_id").val(),
            $("#cat_utensilio_id option:selected").text(),
            $("#Cantidad").val()
           
            
            //descripcion
            ]);
        //console.log(descripcion);
        var arrayDatatable = dataTable_Utensilio.fnGetData();
        if (arrayDatatable.length === 0) {
            
            dataTable_Utensilio.fnAddData(row_data);
        } else {
            var nuevaFila = true;
            $.each(arrayDatatable, function (index, element) {
                if (element[0] === row_data[0][0]) {

                }
            });

            if (nuevaFila) {
                dataTable_Utensilio.fnAddData(row_data);
            }

        }

        $("#Cantidad").val("");
        $("#Descripcion").focus();
        $("#cat_utensilio_id").val("");
    });


    
    // Termina la funcion limpiar

     $(document).on("click", "#btn-quitar-item2", function () {
        var tr = $(this).closest('tr').get(0);
        dataTable_Utensilio.fnDeleteRow(tr);

        console.log(tr);
        return rowCount = 0;
        //obtenerTotal();
    });
    
/******************Agregar un reglon a la tabla de Utensilio Montaje*************************/
        $("#btn_agregar_Montaje").click(function () {

        var row_data = [];
        var cantidad = 0;
        var contenido = 0;
        var contador = $("#txt_cantidad_requisicion").val();

        // alert(contador);
        //var tipo = $("input[name=opcion_unidades]:checked").val();
        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'slideDown',
            positionClass: "toast-top-full-width",
            timeOut: 4000
        };
        
        if ($("#Descripcion").val() === '') {
            toastr.error('', 'Es necesario ingresar la Cantidad');
            $("#Descripcion").focus();
            return;
           
        }

        if ($("#Cantidad").val() === '' || $("#Cantidad").val() === '0') {
            toastr.error('', 'Es necesario ingresar el número de paso');
            $("#Cantidad").focus();
            return;
        }

        descripcion = $("#Descripcion").val();

        //console.log(descripcion);
         if(contador == 1)
          { 
            contador = contador+1;
            rowCount++;
            //alert(contador);
          }
        row_data.push([ 
            $("#cat_utensilio_id").val(),
            $("#cat_utensilio_id option:selected").text(),
            $("#Cantidad").val()
           
            
            //descripcion
            ]);
        //console.log(descripcion);
        var arrayDatatable = dataTable_Montaje.fnGetData();
        if (arrayDatatable.length === 0) {
            
            dataTable_Montaje.fnAddData(row_data);
        } else {
            var nuevaFila = true;
            $.each(arrayDatatable, function (index, element) {
                if (element[0] === row_data[0][0]) {

                }
            });

            if (nuevaFila) {
                dataTable_Montaje.fnAddData(row_data);
            }

        }

        $("#Cantidad").val("");
        $("#Descripcion").focus();
        $("#cat_utensilio_id").val("");
    });


   
    // Termina la funcion limpiar

     $(document).on("click", "#btn-quitar-item2", function () {
        var tr = $(this).closest('tr').get(0);
        dataTable_Montaje.fnDeleteRow(tr);

        console.log(tr);

        return rowCount = 0;
        //obtenerTotal();
    });
/*****************Metodo Guardar Receta************************/
    $("#btn_guardar_Receta").click(function (e) {
        var sItemsRequisicion = [];
        var msg = '';

        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'slideDown',
            positionClass: "toast-top-full-width",
            timeOut: 4000
        };

        if (dataTable_Receta.fnGetData().length === 0) {
            msg += 'Es necesario agregar un elemento a la receta';
           console.log(dataTable_Receta);
        }

        if (msg !== '') {
            toastr.error('', msg);
            return;
        }
        
        $(dataTable_Receta.fnGetNodes()).each(function (index, elem) {
            var aPos = dataTable_Receta.fnGetPosition(this);
            var aData = dataTable_Receta.fnGetData(aPos[0]);

            //se obtiene arreglo de strings
            var tdArray = aData[index];
            var tdArrayPaso = aData[index];
            var tdArrayCosto = aData[index];
            var tdArrayCostoTotal = aData[index];
            //console.log(tdArray[0]+' '+tdArray[1]+' '+tdArray[2]+' '+tdArray[6]);
            //se detecta la etiqueta input para poder obtener el valor verdadero dentro de la fila
            //var nRow = $('#tabla_Entrada_X_Orden_Compra tbody tr:eq(' + index + ') td').parent('tr')[0];
            //se obtiene todas las etiquetas input detectadas dentro de la fila(etiqueta tr)
            //var jqInputs = $('input', nRow);

            
            sItemsRequisicion.push({'IdProducto': tdArray[0], 'Costo':tdArrayCosto[3],'Cantidad':tdArrayPaso[4], 'CostoTotal':tdArrayCostoTotal[5] });
            console.log(tdArray);
        });
        if ($("#hdd_idRequisicion").val() === '0') {
            $.ajax({
                'url': ($("#hdd_idRequisicion").val() === '0') ? '../../AjaxGuardarReceta' : '../../AjaxGuardarReceta',
                'type': 'POST',
                'data':
                        {
                            _token: $('#_token').val(),
                            id : $("#idArticulo").val(),

                            TipoIngrediente : $("input[name=TipoIngrediente]:checked").val(),
                            Traspasar : $("input[name=Traspasar]:checked").val(),
                            AfectaInventario : $("input[name=AfectaInventario]:checked").val(),
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

                     window.location.href = '../../articuloRelacional'                                       
                    }, 4000);
                },
            });
        }
    });
/*****************Metodo Guardad Metodo de Elaboración************************/
    $("#btn_guardar_Entrada_X_Orden").click(function (e) {
        var sItemsRequisicion = [];
        var msg = '';

        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'slideDown',
            positionClass: "toast-top-full-width",
            timeOut: 4000
        };

        if (dataTable_Elaboracion.fnGetData().length === 0) {
            msg += 'Es necesario agregar una Descripción al Método de Elaboración';
           console.log(dataTable_Elaboracion);
        }
        if (msg !== '') {
            toastr.error('', msg);
            return;
        }
        
        $(dataTable_Elaboracion.fnGetNodes()).each(function (index, elem) {
            var aPos = dataTable_Elaboracion.fnGetPosition(this);
            var aData = dataTable_Elaboracion.fnGetData(aPos[0]);

            //se obtiene arreglo de strings
            var tdArray = aData[index];
            var tdArrayPaso = aData[index];
            //console.log(tdArray[0]+' '+tdArray[1]+' '+tdArray[2]+' '+tdArray[6]);
            //se detecta la etiqueta input para poder obtener el valor verdadero dentro de la fila
            //var nRow = $('#tabla_Entrada_X_Orden_Compra tbody tr:eq(' + index + ') td').parent('tr')[0];
            //se obtiene todas las etiquetas input detectadas dentro de la fila(etiqueta tr)
            //var jqInputs = $('input', nRow);

            
            sItemsRequisicion.push({'Paso':tdArrayPaso[1], 'DescripcionElaboracion': tdArray[2], });
            console.log(tdArray);
        });
        if ($("#hdd_idRequisicion").val() === '0') {
            $.ajax({
                'url': ($("#hdd_idRequisicion").val() === '0') ? '../../GuardarMetodoElaboracion' : '../../GuardarMetodoElaboracion',
                'type': 'POST',
                'data':
                        {
                            _token: $('#_token').val(),
                            id : $("#cat_articulos").val(),
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

                     window.location.href = '../../articuloRelacional'                                       
                    }, 4000);
                },
            });
        }
    });
/***********************Metodo de Guardar Utensilio Preparación*************************/
        $("#btn_guardar_Utensilio").click(function (e) {
        var sItemsRequisicion = [];
        var msg = '';

        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'slideDown',
            positionClass: "toast-top-full-width",
            timeOut: 4000
        };

        if (dataTable_Utensilio.fnGetData().length === 0) {
            msg += 'Es necesario agregar un Utensilio de Preparación';
           console.log(dataTable_Utensilio);
        }
        if (msg !== '') {
            toastr.error('', msg);
            return;
        }
        
        $(dataTable_Utensilio.fnGetNodes()).each(function (index, elem) {
            var aPos = dataTable_Utensilio.fnGetPosition(this);
            var aData = dataTable_Utensilio.fnGetData(aPos[0]);
            
            //se obtiene arreglo de strings
            var tdArray = aData[index];
            var tdArrayPaso = aData[index];
            var tdArrayId = aData[index];
            //console.log(tdArray[0]+' '+tdArray[1]+' '+tdArray[2]+' '+tdArray[6]);
            //se detecta la etiqueta input para poder obtener el valor verdadero dentro de la fila
            //var nRow = $('#tabla_Entrada_X_Orden_Compra tbody tr:eq(' + index + ') td').parent('tr')[0];
            //se obtiene todas las etiquetas input detectadas dentro de la fila(etiqueta tr)
            //var jqInputs = $('input', nRow);

            
            sItemsRequisicion.push({'Cantidad':tdArrayPaso[2], 'IdUtensilio': tdArrayId[0] });
            //console.log(tdArray);
        });
        if ($("#hdd_idRequisicion").val() === '0') {
            $.ajax({
                'url': ($("#hdd_idRequisicion").val() === '0') ? '../../AjaxGuardar' : '../../AjaxGuardar',
                'type': 'POST',
                'data':
                        {
                            _token: $('#_token').val(),
                            id : $("#cat_articulo_id").val(),
                            Tipo : $("#TipoUtensilio").val(),
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

                     window.location.href = '../../articuloRelacional'                                       
                    }, 4000);
                },
            });
        }
    });

  
/***********************Metodo de Guardar Utensilio Montaje*************************/
        $("#btn_guardar_Montaje").click(function (e) {
        var sItemsRequisicion = [];
        var msg = '';

        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'slideDown',
            positionClass: "toast-top-full-width",
            timeOut: 4000
        };

        if (dataTable_Montaje.fnGetData().length === 0) {
            msg += 'Es necesario agregar un Utensilio de Montaje';
           console.log(dataTable_Montaje);
        }

        if (msg !== '') {
            toastr.error('', msg);
            return;
        }
        
        $(dataTable_Montaje.fnGetNodes()).each(function (index, elem) {
            var aPos = dataTable_Montaje.fnGetPosition(this);
            var aData = dataTable_Montaje.fnGetData(aPos[0]);
            
            //se obtiene arreglo de strings
            var tdArray = aData[index];
            var tdArrayPaso = aData[index];
            var tdArrayId = aData[index];
            //console.log(tdArray[0]+' '+tdArray[1]+' '+tdArray[2]+' '+tdArray[6]);
            //se detecta la etiqueta input para poder obtener el valor verdadero dentro de la fila
            //var nRow = $('#tabla_Entrada_X_Orden_Compra tbody tr:eq(' + index + ') td').parent('tr')[0];
            //se obtiene todas las etiquetas input detectadas dentro de la fila(etiqueta tr)
            //var jqInputs = $('input', nRow);

            
            sItemsRequisicion.push({'Cantidad':tdArrayPaso[2], 'IdUtensilio': tdArrayId[0] });
            //console.log(tdArray);
        });
        if ($("#hdd_idRequisicion").val() === '0') {
            $.ajax({
                'url': ($("#hdd_idRequisicion").val() === '0') ? '../../AjaxGuardarUTM' : '../../AjaxGuardarUTM',
                'type': 'POST',
                'data':
                        {
                            _token: $('#_token').val(),
                            id : $("#cat_articulo_id").val(),
                            Tipo : $("#Tipo").val(),
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

                     window.location.href = '../../articuloRelacional'                                       
                    }, 4000);
                },
            });
        }
    });
/***********************Metodos de obtener clave, contenido etc**************************/

        function obtenerlistaclaves(id) {
        var idProd = (id === null) ? '' : '/' + id;
        if (id === null) {
            $.ajax({
                url: '../../ajax_obtenerclave',
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    $("#clave")
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
                        $("#clave").val("-1").change();

                    }
                }
            });
        } else {
            $.ajax({
                url: ($("#hdd_idRequisicion").val() === '0') ? '../../traspaso/ajax_listaclave' + idProd : '../../traspaso/ajax_listaclave' + idProd,
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    $("#clave")
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
                                $("#clave").val(select_val).change();
                                 //$('#txt_cantidad_requisicion').val("0").change();

                            });
                    if (data.length > 1) {
                        if ($("#hdd_idRequisicion").val() === '0') {
                            $("#clave").val("-1").change();
                             //$('#txt_cantidad_requisicion').val("0").change();
                        }
                    }
                }
            });
        }
    }

    function obtenerProductoxNombre(id) {
        $.get('../../ajax_listaproductos/' + id, function (data) {
              // $("#Nombre").val(data[0].Descripcion_corta);
            $("#presentacion").val(data.data[0].TipoPresentacion);
            $("#unidadMed").val(data.data[0].UnidadMedida);
            //$("#txt_impuesto_Compra").val(data[0].factor);
            $("#costoProd").val(data.data[0].precio);
         });

        if ($("#hdd_idRequisicion").val() === '0') {
            
        }
    }

    function obtenerProductoxidProdAlmacen(id) {
        $.get('../../ajax_listaproductosxidprodalmacen/' + id, function (data) {
            $("#Nombre").val(data[0].Descripcion_corta);
            $("#presentacion").val(data[0].TipoPresentacion);
            $("#unidadMed").val(data[0].UnidadMedida);
            $("#txt_impuesto_Compra").val(data[0].factor);
            $("#costoProd").val(data[0].precio);
        });

    }
 
   
    function obtenerlistacontenidoxIdProdAlmacen(id) {
      //  alert("lista contenido por id almace");
        $.ajax({
            url: ($("#hdd_idRequisicion").val() === '0') ? '../../ajax_listacontenidosxidprodalmacen' : '../../ajax_listacontenidosxidprodalmacen',
            type: 'POST',
            data: {idProducto: id, _token: $("#_token").val()},
            dataType: 'json',
            success: function (data) {
                $("#contenido")
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

    function obtenerlistacontenido(id) {
       // alert(id);
        if (id === null) {
            $("#contenido")
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
                url:($("#hdd_idRequisicion").val() === '0') ? '../../compras/ajax_listacontenidos' : '../../compras/ajax_listacontenidos',
                type: 'POST',
                data: { _token: $("#_token").val(), idProducto: id,},
                dataType: 'json',

                success: function (data) {
                     console.log("Dentro de ajax servicio");
                    $("#contenido")
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
                        $("#clave").val(select_val).change();
                        //obtenerProductoxidProdAlmacen(select_val);

                    });

                    if (data.length > 1) {
                        if ($("#hdd_idRequisicion").val() === '0') {
                            $("#contenido").val("-1").change();
                        }
                    }
                }
            });
        }
    }
});