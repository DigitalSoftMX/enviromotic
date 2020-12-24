<nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
        <ul class="nav metismenu" id="side-menu">
            <li class="nav-header">
                <div class="dropdown profile-element">
                    <span>
                    <img alt="image" class="img" src= {{URL::asset('img/logo.png')}}  width="100"/>
                    </span>
                    <span class="clear">
                        <span class="block m-t">
                            <strong class="font-bold" style="color: white">{{ Auth::user()->name .' '. Auth::user()->last_name }}</strong>
                        </span>
                    </span>
                </div>
                <div class="logo-element">
                    <img alt="image" class="img" src= {{URL::asset('img/logo.png')}}  width="50"/>
                </div>
            </li>
    
             @permission('adminM_perfil-sho')
          
             <!-- PERFIL-->
                    <li>
                        <a href="#"><i class="fa fa-user"></i> <span class="nav-label">Perfil</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse">
                            <ul class="nav nav-third-level">
                                <li><a href="{{url('perfil')}}"><i class="fa fa-user" aria-hidden="true"></i>Administrador</a></li>
                            </ul>
                        </ul>
                    </li>
            @endpermission
                
      
            @permission('adminM_priority-sho')
                    <li>
                <a href="#"><i class="fa fa-pencil"></i> <span class="nav-label">Prioridad</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level collapse">
                    <ul class="nav nav-third-level">
                        <li><a href="{{url('priority')}}"><i class="fa fa-pencil" aria-hidden="true"></i>Prioridad</a></li>
                    </ul>
                </ul>
            </li>
           
          @endpermission
    

            <!-- Area-->
          @permission('adminM_area-sho')
          
            <li>
                <a href="#"><i class="fa fa-sitemap"></i> <span class="nav-label">Areas</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level collapse">
                    <ul class="nav nav-third-level">
                        <li><a href="{{url('area')}}"><i class="fa fa-sitemap" aria-hidden="true"></i>Areas</a></li>
                    </ul>
                </ul>
            </li>
          
          @endpermission
           
            <!-- Prioridad-->

        @permission('adminM_userarea-sho')
          
             <li>
                <a href="#"><i class="fa fa-child"></i> <span class="nav-label">Usuarios de Areas</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level collapse">
                    <ul class="nav nav-third-level">
                        <li><a href="{{url('userarea')}}"><i class="fa fa-child" aria-hidden="true"></i>Usuarios de Areas</a></li>
                    </ul>
                </ul>
            </li>

          @endpermission
       
    
         <!-- Prioridad-->
              @permission('adminM_userclient-sho')
          
            <li>
                <a href="#"><i class="fa fa-group"></i> <span class="nav-label">Clientes</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level collapse">
                    <ul class="nav nav-third-level">
                         <li><a href="{{url('userclient')}}"><i class="fa fa-group" aria-hidden="true"></i>Clientes</a></li>
                    </ul>
                </ul>
            </li>
           
          @endpermission

            <!--reporte desde administrador-->
            @permission('adminM_reportadmin-sho')
            
             <li>
                <a href="#"><i class="fa fa-ticket"></i> <span class="nav-label">Reporte</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level collapse">
                    <ul class="nav nav-third-level">
                        <li><a href="{{url('reportadmin')}}"><i class="fa fa-ticket" aria-hidden="true"></i>Reportar</a></li>
                    </ul>
                </ul>
            </li>
            
          @endpermission
    

@permission('adminM_report-sho')
            
              <li>
                <a href="#"><i class="fa fa-ticket"></i> <span class="nav-label">Reporte</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level collapse">
                    <ul class="nav nav-third-level">
                        <li><a href="{{url('report')}}"><i class="fa fa-ticket" aria-hidden="true"></i>Reportar</a></li>
                    </ul>
                </ul>
            </li>
            
          @endpermission
    

    
              <!-- Ticket-->
              @permission('adminM_seguimiento-sho')
           <li>
                <a href="#"><i class="fa fa-file-text-o"></i> 
                <span class="nav-label">Seguimiento</span>
                     @permission('adminM_ticket-sho')
                  <span id="notificacion" class="label label-warning pull-right"></span>
                       @endpermission
                  </a>
                
                <ul class="nav nav-second-level collapse">
                    <ul class="nav nav-third-level">
                       @permission('adminM_ticket-sho')
                        <li><a href="{{url('ticket')}}"><i class="fa fa-file-text-o" aria-hidden="true"></i>Canalizacion</a></li>
                         @endpermission
                        @permission('adminM_seguimiento-sho')
                        <li><a href="{{url('seguimiento')}}"><i class="fa fa-th-large" aria-hidden="true"></i>Seguimiento</a></li>
                        @endpermission
                        @permission('adminM_historial-sho')
                        <li><a href="{{url('historial')}}"><i class="fa fa-newspaper-o" aria-hidden="true"></i>Historial</a></li>
                        @endpermission
                    </ul>
                </ul>
            </li>

              @endpermission
    
        @permission('adminM_facturation-sho')
            
              <li>
                <a href="#"><i class="fa fa-clipboard"></i> <span class="nav-label">Facturacion</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level collapse">
                     <li><a href="{{ URL::to('facturation') }}"><i class="fa fa-clipboard" aria-hidden="true" ></i>Facturacion</a></li>
                </ul>
            </li>
            
             @endpermission
     
        @permission('adminM_role-sho')
            
            <li>
                <a href="#"><i class="fa fa-newspaper-o"></i> <span class="nav-label">Seguridad</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level collapse">
                     <li><a href="{{ URL::to('roles') }}"><i class="fa fa-lock" aria-hidden="true" ></i>Asignación de Permisos</a></li>
                      <li><a href="{{ URL::to('role') }}"><i class="fa fa-lock" aria-hidden="true"></i>Roles</a></li>
                    @permission('*permission-sho')
                     <li><a href="{{ URL::to('user_Role')}}"><i class="fa fa-arrows-h" aria-hidden="true" ></i>Asignación de Roles</a></li>              
                     @endpermission
                </ul>
            </li> 
             @endpermission
                  
         </ul>
    </div>
</nav>

