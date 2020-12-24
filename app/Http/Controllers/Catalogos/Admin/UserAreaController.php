<?php namespace App\Http\Controllers\Catalogos\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Core\Util\CatalogTrait;

   class UserAreaController extends Controller {


    use CatalogTrait;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->field_list = ['name'=>'Nombres','last_name'=>'Apellidos','username'=>'Usuario','email'=>'Email','phone'=>'Telefono','id'=>'Acciones'];
        $this->name = 'Usuarios de Area';
        $this->name_plural = 'Usuarios de Area';
        $this->form = 'App\Core\Forms\Admin\UserAreaForm';
        $this->model = 'App\User';
        $this->url_prefix = 'userarea';
        $validation_add = [
        ];
        $validation_edit = $validation_add;
        $this->setValidatorAdd($validation_add);
        $this->setValidatorEdit($validation_edit);
    }
}