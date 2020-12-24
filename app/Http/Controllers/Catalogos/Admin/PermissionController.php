<?php namespace App\Http\Controllers\Catalogos\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Core\Util\CatalogTrait;

class PermissionController extends Controller {

    use CatalogTrait;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->field_list = ['name'=>'Nombre','display_name'=>'Clave','description'=>'Descripcion','id'=>'Acciones'];
        $this->name = 'Permiso';
        $this->name_plural = 'Permisos';
        $this->form = 'App\Core\Forms\Admin\PermissionForm';
        $this->model = 'App\Models\Catalogos\Permission';
        $this->url_prefix = 'permission';
        $validation_add = [
            'name'=>'required|max:25',
            'display_name'=>'required|max:25',
        ];
        $validation_edit = $validation_add;
        $this->setValidatorAdd($validation_add);
        $this->setValidatorEdit($validation_edit);

    }

}