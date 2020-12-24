<?php namespace App\Http\Controllers\Catalogos\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Core\Util\CatalogTrait;

   class SeguimientoController extends Controller {


    use CatalogTrait;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->field_list = ['number'=>'Folio', 'no_tracking'=>'Orden de servicio','affair'=>'Asunto','message'=>'Mensaje','status'=>'Estatus','name'=>'Prioridad','username'=>'Usuario Captura','archivob'=>'Archivo del cliente', 'archivo'=>'Archivo del Seguimiento', 'created_at'=>'Fecha de reporte','id'=>'Acciones'];
       /*$this->field_list = ['number'=>'Identificador', 'no_tracking'=>'Folio','affair'=>'Asunto','message'=>'Mensaje','status'=>'Estatus','name'=>'Prioridad','username'=>'Usuario Captura', 'archivo'=>'Archivo del Seguimiento', 'created_at'=>'fecha','id'=>'Acciones'];*/
        $this->name = 'Ticket Seguimiento';
        $this->name_plural = 'Ticket Seguimiento';
        $this->form = 'App\Core\Forms\Admin\SeguimientoForm';
        $this->model = 'App\Models\Catalogos\Ticket';
        $this->url_prefix = 'seguimiento';
        $validation_add = [
        ];
        $validation_edit = $validation_add;
        $this->setValidatorAdd($validation_add);
        $this->setValidatorEdit($validation_edit);
    }
}