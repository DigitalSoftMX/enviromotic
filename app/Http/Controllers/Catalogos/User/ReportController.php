<?php namespace App\Http\Controllers\Catalogos\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Core\Util\CatalogTrait;

   class ReportController extends Controller {


    use CatalogTrait;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->field_list = ['message'=>'Mensaje','id_ticket'=>'Ticket','id'=>'Acciones'];
        $this->name = 'Reporte';
        $this->name_plural = 'Reporte';
        $this->form = 'App\Core\Forms\Admin\ReportForm';
        $this->model = 'App\Models\Catalogos\Message';
        $this->url_prefix = 'report';
        $validation_add = [
        ];
        $validation_edit = $validation_add;
        $this->setValidatorAdd($validation_add);
        $this->setValidatorEdit($validation_edit);
    }
}