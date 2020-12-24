<?php namespace App\Http\Controllers\Catalogos\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Core\Util\CatalogTrait;

   class FacturationController extends Controller {


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
    $this->field_list = ['nombre'=>'Nombre','archivo'=>'Factura', 'name'=>'Nombre','last_name'=>'Apellidos','phone'=>'Telefono','email'=>'Correo electronico','created_at'=>'Fecha de Facturacion','id'=>'Acciones'];
        $this->name = 'Facturacion';
        $this->name_plural = 'Facturacion';
        $this->form = 'App\Core\Forms\Admin\FacturationForm';
        $this->model = 'App\Models\Catalogos\Facturation';
        $this->url_prefix = 'facturation';
        $validation_add = [
        ];
        $validation_edit = $validation_add;
        $this->setValidatorAdd($validation_add);
        $this->setValidatorEdit($validation_edit);
    }
}