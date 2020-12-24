<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\User;
use App\Notifications\NewNotification;

/*Route::get('/', function () {
    return view('welcome');
});*/

Route::get('/', 'HomeController@index')->name('home');

Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');


     //Rutas de roles y permisos
     Route::resource('roles', 'Security\RoleController');
     Route::post('roles/store', 'Security\RoleController@store');
     Route::get('user_Role', 'Security\RoleController@userRole'); //asignar permisos a roles
     Route::post('user_Role/add', 'Security\RoleController@add');
	Route::get('roles/destroy/{id}', 'Security\RoleController@destroy');
     Route::post('roles/update/{id}', 'Security\RoleController@update');
     Route::put('restore_rol/{id}','Security\RoleController@restore');

     Route::put('restore_permission/{id}','Security\RolePermissionController@restore');
     Route::post('rolepermission/edit', 'Security\RolePermissionController@asignar');
	Route::post('rolepermission/delete', 'Security\RolePermissionController@desasignar');
	Route::post('rolepermission/store','Security\RolePermissionController@store');
     Route::resource('rolepermission', 'Security\RolePermissionController');
	     
	 // Fin Rutas de Roles y Permisos
     
     //Catalogos
     //Administrador
     
     //Roles
     Route::resource('role', 'Catalogos\Admin\RoleController', ['except' => ['destroy', 'show']]); //llama al controlador
     Route::get('rolejlist', 'Catalogos\Admin\RoleController@getJlist'); //lista de la tabla
     Route::get('role/edit/{id}', 'Catalogos\Admin\RoleController@getEdit');//metodo para mostrar en edit
     Route::post('role/edit/{id}', 'Catalogos\Admin\RoleController@postEdit');//metodo para guardar en edit
     Route::get('role/add', 'Catalogos\Admin\RoleController@getAdd');//metodo para abrir add
     Route::post('role/add', 'Catalogos\Admin\RoleController@postAdd');//metodo para guardar en add
     
     //Permisos
     Route::resource('permission', 'Catalogos\Admin\PermissionController', ['except' => ['destroy', 'show']]); //llama al controlador
     Route::get('permissionjlist', 'Catalogos\Admin\PermissionController@getJlist'); //lista de la tabla
     Route::get('permission/edit/{id}', 'Catalogos\Admin\PermissionController@getEdit');//metodo para mostrar en edit
     Route::post('permission/edit/{id}', 'Catalogos\Admin\PermissionController@postEdit');//metodo para guardar en edit
     Route::get('permission/add', 'Catalogos\Admin\PermissionController@getAdd');//metodo para abrir add
     Route::post('permission/add', 'Catalogos\Admin\PermissionController@postAdd');//metodo para guardar en add
     
     
     //Perfil
     Route::resource('perfil', 'Catalogos\Admin\PerfilController', ['except' => ['destroy', 'show']]); //llama al controlador
     Route::get('perfiljlist', 'Catalogos\Admin\PerfilController@getJlist'); //lista de la tabla
     Route::get('perfil/edit/{id}', 'Catalogos\Admin\PerfilController@getEdit');//metodo para mostrar en edit
     Route::post('perfil/edit/{id}', 'Catalogos\Admin\PerfilController@postEdit');//metodo para guardar en edit
     Route::get('perfil/add', 'Catalogos\Admin\PerfilController@getAdd');//metodo para abrir add
     Route::post('perfil/add', 'Catalogos\Admin\PerfilController@postAdd');//metodo para guardar en add
     
     
     //Area
     Route::resource('area', 'Catalogos\Admin\Cat_AreaController', ['except' => ['destroy', 'show']]); 
     Route::get('areajlist', 'Catalogos\Admin\Cat_AreaController@getJlist'); 
     Route::get('area/edit/{id}', 'Catalogos\Admin\Cat_AreaController@getEdit');
     Route::post('area/edit/{id}', 'Catalogos\Admin\Cat_AreaController@postEdit');
     Route::get('area/add', 'Catalogos\Admin\Cat_AreaController@getAdd');
     Route::post('area/add', 'Catalogos\Admin\Cat_AreaController@postAdd');
     Route::get('area/destroy/{id}', 'Catalogos\Admin\Cat_AreaController@getDestroy');     

     //Prioridad
     Route::resource('priority', 'Catalogos\Admin\Cat_PriorityController', ['except' => ['destroy', 'show']]); 
     Route::get('priorityjlist', 'Catalogos\Admin\Cat_PriorityController@getJlist'); 
     Route::get('priority/edit/{id}', 'Catalogos\Admin\Cat_PriorityController@getEdit');
     Route::post('priority/edit/{id}', 'Catalogos\Admin\Cat_PriorityController@postEdit');
     Route::get('priority/add', 'Catalogos\Admin\Cat_PriorityController@getAdd');
     Route::post('priority/add', 'Catalogos\Admin\Cat_PriorityController@postAdd');
     Route::get('priority/destroy/{id}', 'Catalogos\Admin\Cat_PriorityController@getDestroy');     

     //Usuarios de Areas
     Route::resource('userarea', 'Catalogos\Admin\UserAreaController', ['except' => ['destroy', 'show']]); 
     Route::get('userareajlist', 'Catalogos\Admin\UserAreaController@getJlist'); 
     Route::get('userarea/edit/{id}', 'Catalogos\Admin\UserAreaController@getEdit');
     Route::post('userarea/edit/{id}', 'Catalogos\Admin\UserAreaController@postEdit');
     Route::get('userarea/add', 'Catalogos\Admin\UserAreaController@getAdd');
     Route::post('userarea/add', 'Catalogos\Admin\UserAreaController@postAdd');
     Route::get('userarea/destroy/{id}', 'Catalogos\Admin\UserAreaController@getDestroy');     

     //Usuarios o Clientes
     Route::resource('userclient', 'Catalogos\Admin\UserClientController', ['except' => ['destroy', 'show']]); 
     Route::get('userclientjlist', 'Catalogos\Admin\UserClientController@getJlist'); 
     Route::get('userclient/edit/{id}', 'Catalogos\Admin\UserClientController@getEdit');
     Route::post('userclient/edit/{id}', 'Catalogos\Admin\UserClientController@postEdit');
     Route::get('userclient/add', 'Catalogos\Admin\UserClientController@getAdd');
     Route::post('userclient/add', 'Catalogos\Admin\UserClientController@postAdd');
     Route::get('userclient/destroy/{id}', 'Catalogos\Admin\UserClientController@getDestroy');     

     //Ticket
     Route::resource('ticket', 'Catalogos\Admin\TicketController', ['except' => ['destroy', 'show']]); 
     Route::get('ticketjlist', 'Catalogos\Admin\TicketController@getJlist'); 
     Route::get('ticket/edit/{id}', 'Catalogos\Admin\TicketController@getEdit');
     Route::post('ticket/edit/{id}', 'Catalogos\Admin\TicketController@postEdit');
     Route::get('ticket/add', 'Catalogos\Admin\TicketController@getAdd');
     Route::post('ticket/add', 'Catalogos\Admin\TicketController@postAdd');
     Route::get('ticket/destroy/{id}', 'Catalogos\Admin\TicketController@getDestroy');     


     //Admin de Area Ticket seguimiento 
     Route::resource('seguimiento', 'Catalogos\Admin\SeguimientoController', ['except' => ['destroy', 'show']]); 
     Route::get('seguimientojlist', 'Catalogos\Admin\SeguimientoController@getJlist'); 
     Route::get('seguimiento/edit/{id}', 'Catalogos\Admin\SeguimientoController@getEdit');
     Route::post('seguimiento/edit/{id}', 'Catalogos\Admin\SeguimientoController@postEdit');
     Route::get('seguimiento/add', 'Catalogos\Admin\SeguimientoController@getAdd');
     Route::post('seguimiento/add', 'Catalogos\Admin\SeguimientoController@postAdd');
     Route::get('seguimiento/ver/{id}', 'Catalogos\Admin\SeguimientoController@getVer');
     Route::post('seguimiento/ver/{id}', 'Catalogos\Admin\SeguimientoController@postVer');
     Route::get('seguimiento/destroy/{id}', 'Catalogos\Admin\SeguimientoController@getDestroy');     

     //Admin de Area Ticket historial 
     Route::resource('historial', 'Catalogos\Admin\HistorialController', ['except' => ['destroy', 'show']]); 
     Route::get('historialjlist', 'Catalogos\Admin\HistorialController@getJlist'); 
     Route::get('historial/edit/{id}', 'Catalogos\Admin\HistorialController@getEdit');
     Route::post('historial/edit/{id}', 'Catalogos\Admin\HistorialController@postEdit');
     Route::get('historial/add', 'Catalogos\Admin\HistorialController@getAdd');
     Route::post('historial/add', 'Catalogos\Admin\HistorialController@postAdd');
     Route::get('historial/ver/{id}', 'Catalogos\Admin\SeguimientoController@getVer');
     Route::post('historial/ver/{id}', 'Catalogos\Admin\SeguimientoController@postVer');
     Route::get('historial/destroy/{id}', 'Catalogos\Admin\HistorialController@getDestroy');     


     //Administrador Reporte
     Route::resource('reportadmin', 'Catalogos\Admin\ReportController', ['except' => ['destroy', 'show']]); 
     Route::get('reportadminjlist', 'Catalogos\Admin\ReportController@getJlist'); 
     Route::get('reportadmin/edit/{id}', 'Catalogos\Admin\ReportController@getEdit');
     Route::post('reportadmin/edit/{id}', 'Catalogos\Admin\ReportController@postEdit');
     Route::get('reportadmin/add', 'Catalogos\Admin\ReportController@getAdd');
     Route::post('reportadmin/add', 'Catalogos\Admin\ReportController@postAdd');
     Route::get('reportadmin/destroy/{id}', 'Catalogos\Admin\ReportController@getDestroy');     

     //Usuario Reporte
     Route::resource('report', 'Catalogos\User\ReportController', ['except' => ['destroy', 'show']]); 
     Route::get('reportjlist', 'Catalogos\User\ReportController@getJlist'); 
     Route::get('report/edit/{id}', 'Catalogos\User\ReportController@getEdit');
     Route::post('report/edit/{id}', 'Catalogos\User\ReportController@postEdit');
     Route::get('report/add', 'Catalogos\User\ReportController@getAdd');
     Route::post('report/add', 'Catalogos\User\ReportController@postAdd');
     Route::get('report/destroy/{id}', 'Catalogos\User\ReportController@getDestroy');     

     //Admin de Area Ticket historial 
     Route::resource('facturation', 'Catalogos\Admin\FacturationController', ['except' => ['destroy', 'show']]); 
     Route::get('facturationjlist', 'Catalogos\Admin\FacturationController@getJlist'); 
     Route::get('facturation/edit/{id}', 'Catalogos\Admin\FacturationController@getEdit');
     Route::post('facturation/edit/{id}', 'Catalogos\Admin\FacturationController@postEdit');
     Route::get('facturation/add', 'Catalogos\Admin\FacturationController@getAdd');
     Route::post('facturation/add', 'Catalogos\Admin\FacturationController@postAdd');
     Route::get('facturation/ver/{id}', 'Catalogos\Admin\FacturationController@getVer');
     Route::post('facturation/ver/{id}', 'Catalogos\Admin\FacturationController@postVer');
     Route::get('facturation/destroy/{id}', 'Catalogos\Admin\FacturationController@getDestroy');     

     //select2
     Route::get('selectsex', 'Catalogos\Admin\PerfilController@getAjaxlistaSex');
     Route::get('selectactive', 'Catalogos\Admin\PerfilController@getAjaxlistaActive');
     Route::get('selectarea', 'Catalogos\Admin\Cat_AreaController@getAjaxlistaArea');
     Route::get('selectpriority', 'Catalogos\Admin\PerfilController@getAjaxlistaPriority');
     Route::get('selectstatus', 'Catalogos\Admin\PerfilController@getAjaxlistaStatus');
     Route::get('selectusuario', 'Catalogos\Admin\PerfilController@getAjaxlistaUser');
     Route::get('selectusuarios', 'Catalogos\Admin\PerfilController@getAjaxlistaUsers');
     Route::get('ajax_listaAreas/{id}','Catalogos\Admin\PerfilController@getAjaxArea');
     Route::get('notification', 'Catalogos\Admin\PerfilController@getAjaxlistaNotification');
     
     Route::get('download/{file}' , 'DetailController@downloadFile');
     
    Route::get('suscribe', function (Faker\Generator $faker) {
    $user = new User();
    $user->name = "Ivan";
    $user->email = "oestromerocerecedo@gmail.com";
    $user->password = "notifivacion";
    $user->notify(new NewNotification());

    return view('welcome');
});
     