@extends('app')
<!-- oest 2017
    Go-Control de Acceso  -->
@section('htmlheader_title') {{-- Titulo de pestaña de Navegador --}}
Ticket
@endsection  {{-- Titulo de pestaña de Navegador --}}
@section('main-content')
        <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ibox float-e-margins">
                       

    <div class="wrapper wrapper-content">
            <div class="row animated fadeInRight" >
                
                  <div class="col-md-4 widget-head-color-box navy-bg p-lg text-center" >
                    <div class="ibox float-e-margins" style="background: #0999cc">
                        <div class="ibox-title" style="background: #0999cc">
                            <h5>Perfil del Cliente</h5>
                        </div>
                        <div>
                           <!-- <div class="ibox-content no-padding border-left-right">
                                <img alt="image" class="img-responsive" src="img/profile_big.jpg">
                            </div>-->
                            <div class="ibox-content profile-content" style="background: #0999cc">
                               @foreach ($pl as $usuarios)  
       
                                <h4>{{ $usuarios->name }}  {{ $usuarios->last_name }}</h4>
                                <div class="user-button">
                                    <div class="row">
                                        <div class="col-md-4">
                                          <h5><strong>Sexo</strong></h5>
                                        </div>
                                        <div class="col-md-4">
                                          <h5><strong>{{ $usuarios->sex }}</strong></h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="user-button">
                                    <div class="row">
                                        <div class="col-md-4">
                                          <h5><strong>Email</strong></h5>
                                        </div>
                                        <div class="col-md-4">
                                          <h5><strong>{{ $usuarios->email }}</strong></h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="user-button">
                                    <div class="row">
                                        <div class="col-md-4">
                                          <h5><strong>Telefono</strong></h5>
                                        </div>
                                        <div class="col-md-4">
                                          <h5><strong>{{ $usuarios->phone }}</strong></h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="user-button">
                                    <div class="row">
                                        <div class="col-md-4">
                                          <h5><strong>Direccion</strong></h5>
                                        </div>
                                        <div class="col-md-4">
                                          <h5><strong>{{ $usuarios->address }}</strong></h5>
                                        </div>
                                    </div>
                                </div>
                                @endforeach

                                </br>
                                </br>
                             <div class="ibox-title" style="background: #0999cc">
                            <h5>Reporte</h5>
                        </div>
                           
                            
                               @foreach ($data as $datas)  
                                <div class="user-button">
                                    <div class="row">
                                        <div class="col-md-4">
                                          <h5><strong>Folio</strong></h5>
                                        </div>
                                        <div class="col-md-8">
                                          <h5><strong>{{ $datas->no_tracking }}</strong></h5>
                                        </div>
                                    </div>
                                </div>
                                                                <div class="user-button">
                                    <div class="row">
                                        <div class="col-md-4">
                                          <h5><strong>Asunto</strong></h5>
                                        </div>
                                        <div class="col-md-8">
                                          <h5><strong>{{ $datas->affair }}</strong></h5>
                                        </div>
                                    </div>
                                </div>
                                                                <div class="user-button">
                                    <div class="row">
                                        <div class="col-md-4">
                                          <h5><strong>Mensaje</strong></h5>
                                        </div>
                                        <div class="col-md-8">
                                          <h5><strong>{{ $datas->message }}</strong></h5>
                                        </div>
                                    </div>
                                </div>
                                                                <div class="user-button">
                                    <div class="row">
                                        <div class="col-md-4">
                                          <h5><strong>Estatus</strong></h5>
                                        </div>
                                        <div class="col-md-8">
                                          <h5><strong>{{ $datas->status }}</strong></h5>
                                        </div>
                                    </div>
                                </div>
                                                                <div class="user-button">
                                    <div class="row">
                                        <div class="col-md-4">
                                          <h5><strong>Prioridad</strong></h5>
                                        </div>
                                        <div class="col-md-8">
                                          <h5><strong>{{ $datas->name }}</strong></h5>
                                        </div>
                                    </div>
                                </div>
                                                                <div class="user-button">
                                    <div class="row">
                                        <div class="col-md-4">
                                          <h5><strong>Fecha</strong></h5>
                                        </div>
                                        <div class="col-md-8">
                                          <h5><strong>{{ $datas->created_at }}</strong></h5>
                                        </div>
                                    </div>
                                </div>
                                @endforeach
     
                            </div>
                    </div>
                </div>
                    </div>
                <div class="col-md-8">
                    <div class="ibox float-e-margins">
                        <div class="ibox-title">
                            <h5>Mensajes</h5>
                        </div>
                        <div class="ibox-content">

                            <div>
                                <div class="feed-activity-list">

                             @foreach ($show as $shows)  
                                      
                                    <div class="feed-element">
                                        <div class="media-body ">
                                            <strong>{{ $shows->name }}</strong><br>
                                            <small class="text-muted">{{ $shows->created_at }}</small>
                                            <div class="well">
                                            {{ $shows->message }}
                                            </div>
                                        </div>
                                    </div>
                              @endforeach
                             
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        </div>


    </div>       

                                <div class="hr-line-dashed"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
@endsection

