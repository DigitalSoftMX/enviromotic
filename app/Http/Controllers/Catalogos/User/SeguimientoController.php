<?php namespace App\Http\Controllers\Catalogos\User;

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
        $this->field_list = ['no_tracking'=>'Numero de seguimiento','affair'=>'Asunto','message'=>'Mensaje','archivo'=>'Archivo','created_at'=>'fecha','id'=>'Acciones'];
        $this->name = 'Ticket';
        $this->name_plural = 'Ticket';
        $this->form = 'App\Core\Forms\User\SeguimientoForm';
        $this->model = 'App\Models\Catalogos\Ticket';
        $this->url_prefix = 'seguimiento';
        $validation_add = [
        ];
        $validation_edit = $validation_add;
        $this->setValidatorAdd($validation_add);
        $this->setValidatorEdit($validation_edit);
    }
}