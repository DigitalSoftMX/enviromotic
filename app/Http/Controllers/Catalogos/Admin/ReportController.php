<?php namespace App\Http\Controllers\Catalogos\Admin;

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
        $this->name = 'Reporte Administrador';
        $this->name_plural = 'Reporte Administrador';
        $this->form = 'App\Core\Forms\Admin\ReportAdminForm';
        $this->model = 'App\Models\Catalogos\Message';
        $this->url_prefix = 'report';
        $validation_add = [
        ];
        $validation_edit = $validation_add;
        $this->setValidatorAdd($validation_add);
        $this->setValidatorEdit($validation_edit);
    }
}