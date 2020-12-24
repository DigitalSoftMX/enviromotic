$(function () {
	var ObjectUser = {};

	$('input[name=opcion_ticket]').iCheck({
        radioClass: 'iradio_square-green',
    });

    $('#check_comanda').iCheck({
        checkboxClass: 'icheckbox_square-green',
    });

    $('input[name=opcion_ticket], #check_comanda').iCheck('disable');

    $("#select-comanda").select2({
    	placeholder: {
            id: '-1',
            text: 'Seleccione una comanda'
		},
	});

    $("#select-tickets").select2({
    	placeholder: {
            id: '-1',
            text: 'Seleccione un ticket'
		},
	});
    

    $.ajax({
    	url: $('#url_lista_areas').val(),
    	type: "GET",
        dataType: "json",
        success: function(data){
        	var areas = data;
        	var item = [];
        	areas.forEach(function(element){
				item.push({id: element.id, text: element.Descripcion});
        	});

			$("#select-area")
			    .html('')
			    .select2({
		            placeholder: {
		                id: '-1',
		                text: 'Seleccione una opción de area para reimpresión'
		            },
		            allowClear: true,
		            'data': item
			     }).on("select2:select", function (e) {
                    var select_val = $(e.currentTarget).val();
                    $('input[name=opcion_ticket], #check_comanda').iCheck('enable');
                    $("#select-comanda").attr("disabled", false);
                    obtenerComandas(select_val);
                    obtenerTickets(select_val);
                });   

			$("#select-area").val('-1').change();     	
        }
    });


    var dataTable_clientes =
            $("#tabla-clientes").dataTable({
        "bDeferRender": true,
        "iDisplayLength": 10,
        "bProcessing": true,
        "sAjaxSource": $('#url_lista_clientes').val(),
        "sServerMethod": "GET",
        responsive: true,
        "aoColumns": [
            {"mData": "id"},
            {
                "mData": "NumeroCliente",
                "bSortable": true,
            },
            {
                "mData": null,
                "bSortable": true,
                "mRender": function (data, type, full) {
                    return full.Nombre + ' '+ full.Paterno +' ' + full.Materno;
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
    });


    $('input[name=opcion_ticket]').on('ifClicked', function (e) {
        var value = e.currentTarget.value;

        switch(value){
        	case 'comanda':
        		$('#check_comanda').iCheck('enable');
        		$("#select-comanda").attr("disabled", false);
        		$("#select-tickets").attr("disabled", true);
        		//$("#btn-socios").attr("disabled", true);
        		$("#select-comanda").val('-1').change();
        		$("#select-tickets").val('-1').change(); 
        	break;
        	case 'ticket':
        		$('#check_comanda').iCheck('disable');
        		$("#check_comanda").iCheck('uncheck');
        		$("#select-comanda").attr("disabled", true);
        		$("#select-tickets").attr("disabled", false);
        		//$("#btn-socios").attr("disabled", false);
        		$("#select-comanda").val('-1').change();
        		$("#select-tickets").val('-1').change();   
        	break;
        }
    });

    $("#tabla-clientes tbody").on("click", "tr", function (event) {
        var nombre = dataTable_clientes.fnGetData(this).Nombre+' '+dataTable_clientes.fnGetData(this).Paterno+' '+dataTable_clientes.fnGetData(this).Materno;
        //console.log('Clave usuario', id);
        ObjectUser['_token'] = $('#_token').val();
        ObjectUser['idClienteAnterior'] = $("#select-tickets").select2("data")[0].idCliente;
        ObjectUser['idClienteActual'] = dataTable_clientes.fnGetData(this).id;
        ObjectUser['idTicketMaestro'] = $("#select-tickets").select2("data")[0].id;
        $("#cliente-ticket").html(nombre);
        $('#ModalClientes').modal('hide');
    });

    $("#btn-reiniciar").click(function(){
    	limpiar_formulario();
    });

    $("#btn-imprimir-ticket").click(function(){
    	if(ObjectUser.hasOwnProperty('idTicketMaestro')){
    		$.ajax({
    			url: $('#url_guardar_ticket').val(),
		    	type: "POST",
		        data: ObjectUser,
		        success: function(data){
		        	var info = data;
		        	if(info.Estatus == 'Ok'){
		        		imprimir_ticket();
    					limpiar_formulario();
		        	}else{
		        		toastr.options = {
                            closeButton: true,
                            progressBar: true,
                            showMethod: 'slideDown',
                            positionClass: "toast-top-full-width",
                            timeOut: 4000
                        };
                        toastr.error('', data.Mensaje);
		        	}
		        }
    		});
    	}else{
    		imprimir_ticket();
    		limpiar_formulario();
    	}
    	
    });

    function limpiar_formulario(){
    	ObjectUser = {};
    	$('#r_comanda').iCheck('check');
		$("#check_comanda").iCheck('uncheck');
		$('input[name=opcion_ticket], #check_comanda').iCheck('disable');
		$("#select-comanda").attr("disabled", true);
		$("#select-tickets").attr("disabled", true);
		$("#btn-socios").attr("disabled", true);
		$("#select-area").val('-1').change();
		$("#select-comanda").val('-1').change();
		$("#select-tickets").val('-1').change(); 
		$("#cliente-ticket").html('');
		$("#btn-reiniciar").attr('disabled', true);
		$("#btn-imprimir-ticket").attr('disabled', true);
    }

	function obtenerComandas(id){
		 $.ajax({
	    	url: $('#url_lista_comandas').val()+'/'+id,
	    	type: "GET",
	        dataType: "json",
	        success: function(data){
	        	var areas = data;
	        	var item = [];
	        	areas.forEach(function(element){
					item.push({id: element.id, text: element.Comanda, cliente: element.NCliente});
	        	});

				$("#select-comanda")
				    .html('')
				    .select2({
			            placeholder: {
			                id: '-1',
			                text: 'Seleccione una comanda'
			            },
			            allowClear: true,
			            'data': item
				     }).on("select2:select", function (e) {
				     		$("#cliente-ticket").html($("#select-comanda").select2("data")[0].cliente);
		            	});   

				$("#select-comanda").val('-1').change(); 
				$("#btn-reiniciar").attr('disabled', false);
				$("#btn-imprimir-ticket").attr('disabled', false);    	
	        }
	    });
	}

	function obtenerTickets(id){
		$.ajax({
	    	url: $('#url_lista_tickets').val()+'/'+id,
	    	type: "GET",
	        dataType: "json",
	        success: function(data){
	        	var areas = data;
	        	var item = [];
	        	areas.forEach(function(element){
					item.push({id: element.id, text: element.Ticket ,estatus: element.Estatus, idCliente: element.IdUsuarioCliente, cliente: element.NCliente});
	        	});

				$("#select-tickets")
				    .html('')
				    .select2({
			            placeholder: {
			                id: '-1',
			                text: 'Seleccione un ticket'
			            },
			            allowClear: true,
			            'data': item
				     }).on("select2:select", function (e) {
				     		$("#cliente-ticket").html($("#select-tickets").select2("data")[0].cliente);
				     		$("#btn-socios").attr("disabled", false);
		            	});   

				$("#select-tickets").val('-1').change(); 
				$("#btn-reiniciar").attr('disabled', false);
				$("#btn-imprimir-ticket").attr('disabled', false);    	
	        }
	    });
	}

	function imprimir_ticket(){
		var opcion = $('input:radio[name=opcion_ticket]:checked').val();

		switch(opcion){
			case 'comanda':
				$.ajax({
					'url': 'http://backendpvrm.localhost/printer_command',
					'type': 'POST',
					'data':
					{
						idTicket: $("#select-comanda").select2("data")[0].id,
						comanda: $("#select-comanda").select2("data")[0].text,
						estatus: $("#check_comanda").iCheck('update')[0].checked
					},
					success: function(data){
						var info = data;
					}
				});
			break;
			case 'ticket':
				$.ajax({
					'url': 'http://backendpvrm.localhost/printer_closure_account',
					'type': 'POST',
					'data':
					{
						idTicket: $("#select-tickets").select2("data")[0].id,
						estatusTicket: $("#select-tickets").select2("data")[0].estatus
					},
					success: function(data){
						var info = data;
						if(data.status == 'fail'){
							toastr.options = {
                                closeButton: true,
                                progressBar: true,
                                showMethod: 'slideDown',
                                positionClass: "toast-top-full-width",
                                timeOut: 4000
                            };
                            toastr.error('', data.message);
						}
					}
				});
			break;
		}
	}
});