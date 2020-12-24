<?php namespace App\Http\Controllers\Catalogos\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Core\Util\CatalogTrait;

   class HistorialController extends Controller {


    use CatalogTrait;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->field_list = ['number'=>'Folio','no_tracking'=>'Orden de servicio','affair'=>'Asunto','message'=>'Mensaje','name'=>'Prioridad','username'=>'Usuario Captura', 'archivob'=>'Archivo del cliente', 'archivo'=>'Archivo del Seguimiento','created_at'=>'Fecha de reporte','id'=>'Acciones'];
        $this->name = 'Historial';
        $this->name_plural = 'Historial';
        $this->form = 'App\Core\Forms\Admin\HistorialForm';
        $this->model = 'App\Models\Catalogos\Ticket';
        $this->url_prefix = 'historial';
        $validation_add = [
        ];
        $validation_edit = $validation_add;
        $this->setValidatorAdd($validation_add);
        $this->setValidatorEdit($validation_edit);
    }
}