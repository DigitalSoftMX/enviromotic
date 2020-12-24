@extends('app')
<!-- oest 2018
    Gemma-Control de Acceso  -->
@section('htmlheader_title') {{-- Titulo de pestaña de Navegador --}}
@endsection  {{-- Titulo de pestaña de Navegador --}}
@section('main-content')
<div class="wrapper wrapper-content animated fadeInRight">

    <div class="row">
        <div class="col-lg-12">
            <div class="ibox float-e-margins">
                <div class="ibox-title">  <!--Inicio de Titulo y boton de Crear  -->
                  <h4>
                        {{$catalog->getName()}}
                  </h4>
                  @permission("$ins")
                      <div class="ibox-tools">
                        <a href='{{$catalog->getUrlPrefix()}}/add' class="btn btn-primary btn-sm"><i class="fa fa-plus pull-right"></i>&nbsp;Nuevo</a>
                  @endpermission
                </div>
                <div class="ibox-content">
                    <!-- Inicia Cuerpo  de la Vista -->
                    <table id="table_id" class="display nowrap table-hover table-striped" style="width:100%">
			            <thead>
                        <tr>
                            @foreach ($catalog->field_list as $field)
                            <th>{{$field}}</th>
                            @endforeach
                        </tr>
                        </thead>
                        <tbody>
                        @foreach ($catalog->field_list as $field)
                        <tr>
                            @foreach ($catalog->field_list as $field)
                            <th>{{$field}}</th>
                            @endforeach
                        </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('localscripts') <!-- Inicio de Seccion de Scrips -->
    <!-- SUMMERNOTE -->
    <script src="js/plugins/summernote/summernote.min.js"></script>
    


    <script type="text/javascript">
        $(function () {
            $("[data-submit-confirm-text]").click(function(e){
                var $el = $(this);
                e.preventDefault();
                var confirmText = $el.attr('data-submit-confirm-text');
                bootbox.confirm(confirmText, function(result) {
                    if (result) {
                        $el.closest('form').submit();
                    }
                });
            });

            $("#view_delete").click(function () {
                $("#viewdeletetable").toggle('2000');
            });
        });
    </script>

<script>
    $(document).ready(function() {
    fields = {!! json_encode( array_keys($catalog->field_list) ) !!};
    url_add = '{{$catalog->getUrlPrefix()}}/add/';
    url_delete = '{{$catalog->getUrlPrefix()}}/destroy/';
    url_edit = '{{$catalog->getUrlPrefix()}}/edit/';
    url_ver = '{{$catalog->getUrlPrefix()}}/ver/';
    columns = [];
    $.each(fields,function(index,value){columns.push({'data':value});});
      
    var table =
        $('#table_id').DataTable( {
            "processing": true,
            "responsive": true,
            "fnRowCallback": customFnRowCallback,
            "ajax": "{{$catalog->getUrlPrefix()}}jlist",
            "columns": columns,
            "oLanguage": {
                "sLengthMenu": "Mostrar _MENU_ registros",
                "sZeroRecords": "No se mostraron resultados",
                "sInfo": "Pagina _PAGE_ de _PAGES_",
                "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
                "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                "sSearch":         "Buscar:",
                "sLoadingRecords": "Cargando...",
                "sProcessing":     "Procesando...",
                "oPaginate": {
                    "sFirst":    "Primero",
                    "sLast":     "Ultimo",
                    "sNext":     "Siguiente",
                    "sPrevious": "Anterior"
                }
            },
            "columnDefs": [{
                "targets": -1,
                "visible": false,
                "render": function(data, type, row){ 
                    
                        if('{{$show}}' == ""){  
return @permission("$mod") '<a href="'+url_edit+data+'" class="btn btn-warning btn-xs"><i class="glyphicon glyphicon-edit"></i></a>' + @endpermission 
@permission("$eli") '<a href="'+url_delete+data+'" class="btn btn-danger btn-xs"><i class="glyphicon glyphicon-trash"></i></a>' + @endpermission 
@permission("$ver") '<a href="'+url_ver+data+'" class="btn btn-success btn-xs"><i class="glyphicon glyphicon-th-large"></i></a>' @endpermission
     }
                          else{            
                            return data
                          }
                          
                                
               }
            }]
        });
    });

    function customFnRowCallback( nRow, aData, iDisplayIndex, iDisplayIndexFull )
    { 
        if('{{$catalog->getUrlPrefix()}}' == "seguimiento"){  
         if(aData['archivo'] != null ){ 
            $('td:eq(6)', nRow).html( '<a href="download/'+aData['archivo']+'"><span class="label label-primary">Descargar</span></a> ' )
         }
            return nRow;
          
           }
    }
</script>

    <!--Alert-->
    @if(count($errors) >0)
    <?php $mes = '';?>
    @foreach ($errors->all('<p>:message</p>') as $message)
    <?php $mes .= $message;?>
    @endforeach
    <script>
        $(document).ready(function() {
            setTimeout(function() {
                toastr.options = {
                    closeButton: true,
                    progressBar: true,
                    showMethod: 'slideDown',
                    positionClass: "toast-top-full-width",
                    timeOut: 4500
                };
                toastr.error('', '{!! $mes !!}');

            }, 400);
        });
    </script>

    @endif

    @if (Session::has('message'))
    <script>
        $(document).ready(function() {
            setTimeout(function() {
                toastr.options = {
                    closeButton: true,
                    progressBar: true,
                    showMethod: 'slideDown',
                    positionClass: "toast-top-full-width",
                    timeOut: 4000
                };
                toastr.success('', '{{ Session::get('message') }}');

            }, 400);
        });
    </script>
    @endif

    <script>
        $('#myModal').on('shown.bs.modal', function() {
            $(this).find('[autofocus]').focus();
        });
    </script>
    <script >
        function anular(e) {
            tecla = (document.all) ? e.keyCode : e.which;
            return (tecla != 13);
        }
    </script>
    <script>
        $('#myModal').on('show.bs.modal', function (e) {
            $('#descripcion-field').val("");

        });
    </script>

    @endsection <!-- Fin de Seccion de Scrips -->