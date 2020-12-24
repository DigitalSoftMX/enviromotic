<?php namespace App\Http\Controllers\Catalogos\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Core\Util\CatalogTrait;

   class Cat_PriorityController extends Controller {


    use CatalogTrait;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->field_list = ['name'=>'Nombre','id'=>'Acciones'];
        $this->name = 'Prioridad';
        $this->name_plural = 'Prioridad';
        $this->form = 'App\Core\Forms\Admin\Cat_PriorityForm';
        $this->model = 'App\Models\Catalogos\Cat_Priority';
        $this->url_prefix = 'priority';
        $validation_add = [
           // 'name'=>'required|max:25',
        ];
        $validation_edit = $validation_add;
        $this->setValidatorAdd($validation_add);
        $this->setValidatorEdit($validation_edit);
    }
}