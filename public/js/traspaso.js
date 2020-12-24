$(function () {
    var dataTable_traspaso =
            $("#tabla-traspaso").dataTable({
        "bDeferRender": true,
        "iDisplayLength": 10,
        //"sPaginationType": "bootstrap",
        "bProcessing": true,
        //"bServerSide": true,
        "sAjaxSource": 'traspaso/ajax_listado',
        "sServerMethod": "GET",
//        dom: '<"html5buttons"B>lTfgitp',
//        buttons: [
//            {
//                text: '<i class="fa fa-lg fa-clipboard"></i>',
//                extend: 'copy',
//                title: 'Traspaso',
//                exportOptions: {
//                    columns: [0, 1, 2, 3, 4, 5, 6, 7]
//                }
//            },
//            {
//                text: '<i class="fa fa-lg fa-file-text-o"></i>',
//                extend: 'csv',
//                title: 'Traspaso',
//                exportOptions: {
//                    columns: [0, 1, 2, 3, 4, 5, 6, 7]
//                }
//            },
//            {
//                text: '<i class="fa fa-lg fa-file-excel-o"></i>',
//                extend: 'excel',
//                title: 'Traspaso',
//                exportOptions: {
//                    columns: [0, 1, 2, 3, 4, 5, 6, 7]
//                }
//            },
//            {
//                text: '<i class="fa fa-lg fa-file-pdf-o"></i>',
//                extend: 'pdf',
//                title: 'Traspaso',
//                customize: function (win) {
//                    $(win.document.body).addClass('white-bg');
//                    $(win.document.body).css('font-size', '10px');
//
//                    $(win.document.body).find('table')
//                            .addClass('compact')
//                            .css('font-size', 'inherit');
//                },
//                exportOptions: {
//                    columns: [0, 1, 2, 3, 4, 5, 6, 7]
//                }
//            },
//            {
//                text: '<i class="fa fa-lg fa-print"></i>',
//                extend: 'print',
//                customize: function (win) {
//                    $(win.document.body).addClass('white-bg');
//                    $(win.document.body).css('font-size', '10px');
//
//                    $(win.document.body).find('table')
//                            .addClass('compact')
//                            .css('font-size', 'inherit');
//                },
//                exportOptions: {
//                    columns: [0, 1, 2, 3, 4, 5, 6, 7]
//                }
//            }
//        ],
        responsive: true,
        "aoColumns": [
            {"mData": "id"},
            {
                "mData": "A_Origen",
                "bSortable": true,
            },
            {
                "mData": "A_Destino",
                "bSortable": true,
            },
            {
                "mData": "Fecha",
                "bSortable": true,
            },
            {
                "mData": null,
                "bSortable": true,
                "mRender": function (data, type, full) {
                    var costoTotal = parseFloat(full.CostoTotal);
                    return '$' + costoTotal.toFixed(4);
                }
            },
            {
                "mData": "Referencia",
                "bSortable": true,
            },
            {
                "mData": "UserName",
                "bSortable": true,
            },
            {
                "mData": "Estatus",
                "bSortable": true,
                "mRender": function (data, type, full) {
                    return (full.Estatus == 1) ?
                            '<span class="text-success">NO CANCELADO</span>' : '<span class="text-danger">CANCELADO</span>';
                }
            },
            {
                "mData": null,
                "bSortable": false,
                "mRender": function (data, type, full) {
                    var acciones = (full.Estatus == 1) ?
                            '<a id="ver_detalle" href="traspaso/guardar/' + full.id + '" class="edit btn btn-xs btn-primary"><i class="glyphicon glyphicon-eye-open"></i></a> ' +
                            '<a id="imprimir_traspaso" href="traspaso/impresion/' + full.id + '" target="_blank" class="edit btn btn-xs btn-success"><i class="fa fa-print"></i></a> ' +
                            '<a href="#modal-cancelacion" name="a_cancelacion" id="' + full.id + '" data-toggle="modal" class="edit btn btn-xs btn-danger"><i class="glyphicon glyphicon-trash" aria-hidden="true"></i></a>'
                            :
                            '<a id="ver_detalle" href="traspaso/guardar/' + full.id + '"  class="edit btn btn-xs btn-primary"><i class="glyphicon glyphicon-eye-open"></i></a> ' +
                            '<a id="edit-matter" href="traspaso/impresion/' + full.id + '" target="_blank" class="edit btn btn-xs btn-success"><i class="fa fa-print"></i></a>';
                    return acciones;
                }
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
    }
    );

    $(document).on("click", "a[name=a_cancelacion]", function () {
        //$(this).attr("id")
        $("#hdd_IdTraspaso").val($(this).attr("id"));
    });

    $("#btn_cancelar_traspaso").click(function () {

        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'slideDown',
            positionClass: "toast-top-full-width",
            timeOut: 4000
        };

        if ($("#txt_cancelacion_traspaso").val() !== '') {
            $.ajax({
                url: '../traspaso/ajax_cancelartraspaso',
                type: 'POST',
                data: {
                    _token: $("#_token").val(),
                    idUsuario: $("#hdd_IdUsuario").val(),
                    motivoCancelacion: $("#txt_cancelacion_traspaso").val(),
                    idTraspaso: $("#hdd_IdTraspaso").val()
                },
                dataType: 'json',
                success: function (data) {
                    var estatus = data.Estatus;
                    if (estatus === 'Ok') {
                        toastr.success('', data.Mensaje);
                        dataTable_traspaso._fnAjaxUpdate();
                    } else {
                        toastr.error('', data.Mensaje);
                    }
                }
            });
        } else {
            toastr.error('', 'Es necesario escribir el motivo de la cancelación');
            return;
        }

        $("#modal-cancelacion").modal("hide");
        $("#hdd_IdTraspaso").val('0');
    });

    $("#btn_enviar_lsttraspaso").click(function () {
        var msg = '';
        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'slideDown',
            positionClass: "toast-top-full-width",
            timeOut: 4000
        };

        if ($("#para_traspaso").val() === '') {
            msg += 'Es necesario escribir el correo eletrónico para poder relizar el envío <br>';
        }

        if ($("#asunto_traspaso").val() === '') {
            msg += 'Ingrese el mensaje.<br>';
        }

        if (msg !== '') {
            toastr.error('', msg);
            return;
        }


        $.ajax({
            url: '../traspaso/enviar_email',
            type: 'POST',
            data: {
                _token: $("#_token").val(),
                de: null,
                para: $("#para_traspaso").val(),
                asunto: $("#asunto_traspaso").val(),
                cc: $("#cc_traspaso").val(),
            },
            dataType: 'json',
            success: function (data) {
                var estatus = data.Estatus;
                if (estatus === 'Ok') {
                    toastr.success('', data.Mensaje);
                } else {
                    toastr.error('', data.Mensaje);
                }
            }
        });

        $("#ModalEmail").modal("hide");

    });
});