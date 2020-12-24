@extends('app')
<!-- oest 2017
    Gemma-Control de Acceso  -->
@section('htmlheader_title') {{-- Titulo de pestaña de Navegador --}}
Perfil
@endsection  {{-- Titulo de pestaña de Navegador --}}
@section('main-content')
<div class="middle-box wrapper wrapper-content animated fadeInDown">
    <div class="row">
        <div class="form-group">
            <div class="ibox float-e-margins">
                <div class="ibox-title">  <!--Inicio de Titulo y boton de Crear  -->
                    <h4>{{$catalog->getName()}}</h4>
                </div>
                <div class="ibox-content">

                    <!--Fin de Titulo y boton de Crear  -->
                    <!-- Inicia Cuerpo  de la Vista -->
                    <table class="table table-striped table-hover" id="table_id">
                        {!! form_start($form) !!}
                        {!! form_rest($form) !!}
                    </table>
                    <!-- Fin Cuerpo de la Vista -->
                    <div class="row">
                        <div class="col-md-12">
                            <button type="submit" class="pull-right btn btn-primary btn-flat"><i class="fa fa-floppy-o"></i>&nbsp;&nbsp;Aceptar</button>
                        </div>
                    </div>
                </div>
                {!! form_end($form) !!}
            </div>
        </div>
    </div>
</div>
<!-- Fin de Seccion de Formularios Tipo Modal-->
@endsection


@section('localscripts')

<script src="{{ asset('plugins/select2/select2.full.min.js') }}"></script>
<script src="{{ asset('js/newselect.js') }}"></script>

<script>
function disable() {
    document.getElementById("email").disabled = true;
}

function undisable() {
    document.getElementById("email").disabled = false;
}
</script>

</script>
@endsection

