@extends('app')
<!-- dCubica 2016
    RM-Control de Acceso  -->

@section('htmlheader_title')
   Creacion de Roles
@endsection

@section('main-content')
    <div class="wrapper wrapper-content animated fadeInRight">
       <div class="col-lg-6">
       	 <div class="ibox float-e-margins">
       	 	<div class="ibox-title">
                            <h5>Creacion de Roles <small>Nuevo</small> </h5>
                            <div class="ibox-tools">
                                <a class="collapse-link">
                                    <i class="fa fa-chevron-up"></i>
                                </a>
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                    <i class="fa fa-wrench"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-user">
                                    <li><a href="#">Config option 1</a>
                                    </li>
                                    <li><a href="#">Config option 2</a>
                                    </li>
                                </ul>
                                <a class="close-link">
                                    <i class="fa fa-times"></i>
                                </a>
                            </div>
                        </div>

            <div class="ibox-content">
            	
            	 {!! Form::open(array('method' => 'POST', 'url' => array('roles/store'), 'class' => 'form-horizontal')) !!}
                   <input type="hidden" name="_token" value="{{{ csrf_token() }}}" />

                    <div class="form-group">
                        {!!Form::label('name', 'Nombre')!!}
                        {!!Form::text('name', '',array('class' => 'form-control','placeholder'=>'Nombre del Rol'))!!}
                    </div>
                    <div class="form-group">
                        {!!Form::label('display_name', 'Clave')!!}
                        {!!Form::text('display_name', '',array('class' => 'form-control','placeholder'=>'Clave del Rol'))!!}
                    </div>
                    <div class="form-group">
                        {!!Form::label('description', 'Descripcion')!!}
                        {!!Form::text('description', '',array('class' => 'form-control','placeholder'=>'Descripcion del Rol'))!!}
                    </div>
                    <div class="row">        
                      <div class="col-md-10">
                         <a href="">
                                <a type="submit" href="{{ url('roles') }}" class=" pull-right btn btn-warning btn-flat"><i class="fa fa-times"></i>&nbsp;&nbsp;Cancelar</a>
                          </a>
                       </div>
                         <div class="col-md-2">
                                <button type="submit" class="btn btn-primary btn-flat"><i class="fa fa-floppy-o"></i>&nbsp;&nbsp;Guardar</button>
                     </div>
                </div><br> 
                   {!! Form::close() !!}
            
            </div>            


       	 </div>
       </div>

    {{--    <div class="col-lg-6">
           <div class="ibox-title">
              <h5>Creacion de Permisos <small>Nuevo</small> </h5>
                            <div class="ibox-tools">
                                <a class="collapse-link">
                                    <i class="fa fa-chevron-up"></i>
                                </a>
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                    <i class="fa fa-wrench"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-user">
                                    <li><a href="#">Config option 1</a>
                                    </li>
                                    <li><a href="#">Config option 2</a>
                                    </li>
                                </ul>
                                <a class="close-link">
                                    <i class="fa fa-times"></i>
                                </a>
                            </div>
                        </div>

            <div class="ibox-content">
              <form method="post" action="{{ url('rolepermission/store')}}" class="form-horizontal">
                 <input type="hidden" name="_token" value="{{{ csrf_token() }}}" />
                 <div class="form-group">
                  <label>Nombre</label>
                  <input type="text" class="form-control" required placeholder="Nombre del Permiso" name="name_permission" />
                </div>
                <div class="form-group">
                  <label>Clave</label>
                  <input type="text" class="form-control" required placeholder="Clave del Permiso" name="nomenclature_permission"/>
                </div>
                <div class="form-group">
                  <label>Descripccion</label>
                  <input type="text" class="form-control" required placeholder="Descripcion del Permiso" name="description_permission"/>
                </div>

                <div class="row">
                  <div class="form-group">
                    <div class="col-md-offset-8 col-md-10">
                      <button class="btn btn-sm btn-default">Cancelar</button>
                      <button type="submit" class="btn  btn-sm btn-primary">Crear</button>
                    </div>
                   </div><!--/form-group--> 
                 </div>


              </form>
            </div>
       </div> --}}


    </div>
@stop
@section('localscripts')
<!--Alert-->
@if(count($errors))
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
                  positionClass: "toast-top-center",
                  timeOut: 4000
              };
              toastr.success('', '{{ Session::get('message') }}');

          }, 400);
      });
    </script>
      
  @endif


@stop