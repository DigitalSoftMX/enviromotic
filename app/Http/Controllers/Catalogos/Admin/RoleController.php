<?php namespace App\Http\Controllers\Catalogos\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Core\Util\CatalogTrait;

class RoleController extends Controller {

    use CatalogTrait;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->field_list = ['display_name'=>'Nombre','description'=>'Descripcion','id'=>'Acciones'];
        $this->name = 'Rol';
        $this->name_plural = 'Roles';
        $this->form = 'App\Core\Forms\Admin\RoleForm';
        $this->model = 'App\Models\Catalogos\Role';
        $this->url_prefix = 'role';
        $validation_add = [
            'name'=>'required|max:25',
            'display_name'=>'required|max:25',
        ];
        $validation_edit = $validation_add;
        $this->setValidatorAdd($validation_add);
        $this->setValidatorEdit($validation_edit);

    }

}