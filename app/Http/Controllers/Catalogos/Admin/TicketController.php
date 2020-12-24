<?php namespace App\Http\Controllers\Catalogos\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Core\Util\CatalogTrait;

   class TicketController extends Controller {


    use CatalogTrait;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    //$this->field_list = ['affair'=>'Asunto','message'=>'Mensaje','archivo'=>'Archivo','id'=>'Acciones'];
    $this->field_list = ['number'=>'Folio','affair'=>'Asunto','message'=>'Mensaje','archivob'=>'Archivo del cliente','name'=>'Nombre','last_name'=>'Apellidos','phone'=>'Telefono','email'=>'Correo electronico','address'=>'Dirección','created_at'=>'Fecha de reporte','id'=>'Acciones'];
        $this->name = 'Canalizacion';
        $this->name_plural = 'Canalizacion';
        $this->form = 'App\Core\Forms\Admin\CanalizacionForm';
        $this->model = 'App\Models\Catalogos\Ticket';
        $this->url_prefix = 'ticket';
        $validation_add = [
        ];
        $validation_edit = $validation_add;
        $this->setValidatorAdd($validation_add);
        $this->setValidatorEdit($validation_edit);
    }
}