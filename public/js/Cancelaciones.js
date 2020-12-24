$(function () {

    $('input[name=tipo_req]').iCheck({
        radioClass: 'iradio_square-green',
    });

    var rowCount = 0;
    var items = 0;
    var itemss= 1;
    var dataTable_Cancelacion =

       $("#tabla-Cancelacion").dataTable({
        
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
                "bsortable": false, //Id OC
                "aTargets": [0]
            },
            {
                "bsortable": false, //ClaveProducto
                "aTargets": [1]
            },
            {
                "bsortable": false, //Nombre
                "aTargets": [2]
            },
            {
                "bsortable": false, //CantidadSolicitada
                "aTargets": [3]
            },
            {
                "bsortable": false, //CantidadEntregada
                "aTargets": [4]
            },
            {
                "bsortable": false, //CantidadPendiente
                "aTargets": [5]
            },
            {
                "bsortable": false,
                "aTargets": [6],
                "mRender": function (index) { 
                    return '<input class="btn btn-danger btn-xs" data-id="'+rowCount+'" onchange="cambiar(this);" name="btn-seleccionar-item['+rowCount+']" id="btn-seleccionar-item'+rowCount+'" type="checkbox" value="'+index+'"/>';
                }
            },
            {
                "bsortable": false,
                "aTargets": [7],
                "mRender": function (index) { 
                    return '<input hidden type="checkbox" data-id="'+rowCount+'" name="IdOrdenMaestro['+rowCount+']" id="IdOrdenMaestro'+rowCount+'"  value="'+index+'"/>';
                }
            }
        ],
        select: {
            style:    'os',
            selector: 'td:first-child'
        },
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

 
    $("#btn-seleccionar-item1").change(function () {
        //document.getElementById("btn-seleccionar").checked = true;
        console.log('entro');
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
    //obtenerlistacontenido(null);
    //obtenerInformacionRequisicion();

    //Termina agregar a la tabla un renglon Compra - Almacen

    function obtenerlistaclaves(id) {
        var row_data = [];
        var idProd = (id === null) ? '' : '/' + id;
        if (id === null) {
            $.ajax({
                url: '../ajax_listaProveedor',
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    $("#proveedor")
                            .html('')
                            .select2(
                                    {
                                        placeholder: {
                                            id: '-1',
                                            text: 'Seleccione un proveedor',
                                        },
                                        allowClear: true,
                                        data: data


                                    }
                            ).on("select2:select", function (e) {
                                var select_val = $(e.currentTarget).val();

                                $("#idproveedor").val(select_val);
                                $("#select2-select-contenido-requisicion-container").val(select_val).change();

                               obtenerProductoxNombre(select_val);
                                var table = $('#tabla-Cancelacion').DataTable();
                                table.clear().draw();
                               //console.log(obtenerProductoxNombre);
                              
                            });

                    if (data.length > 1) {
                        $("#proveedor").val("-1").change();
                    }
                }
            });
        } else {
            $.ajax({
                url: '../ajax_listaProveedor' + idProd,
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    $("#proveedor")
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
                    if (data.length > 1) {
                       
                            $("#proveedor").val("-1").change();
                      
                    }
                }
            });
        }
    }

   
    function obtenerProductoxNombre(id) {
          var row_data = [];
        $.get('../ajax_listaorden/' + id, function (data) {

          var  detalle = data.Orden;

          if (detalle != 0 ) {
                for (var i = 0; i < detalle.length; i++) {
              row_data.push([
                      //detalle[i].idDetalle,
                      detalle[i].id_orden_compra_maestro,
                      detalle[i].clave,
                      detalle[i].Descripcion_corta,
                      detalle[i].cantidad_solicitada,
                      detalle[i].cantidad_entregada,
                      detalle[i].cantidad_pendiente,
                      detalle[i].idDetalle,
                      detalle[i].id_orden_compra_maestro
                            ]);
                     }
            dataTable_Cancelacion.fnAddData(row_data)
          }else{

          }
            
         });
    }
     
    
});
