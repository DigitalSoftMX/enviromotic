<?php namespace App\Http\Controllers\Catalogos\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Core\Util\CatalogTrait;

   class PerfilController extends Controller {


    use CatalogTrait;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->field_list = ['name'=>'Nombre','last_name'=>'Apellidos','username'=>'Usuario','email'=>'Correo electronico','id'=>'Acciones'];
        $this->name = 'Perfil';
        $this->name_plural = 'Perfiles';
        $this->form = 'App\Core\Forms\Admin\PerfilForm';
        $this->model = 'App\User';
        $this->url_prefix = 'perfil';
        $validation_add = [
            'name'=>'required|max:25',
            'last_name'=>'required|max:25',
            'username'=>'required|max:25',
        ];
        $validation_edit = $validation_add;
        $this->setValidatorAdd($validation_add);
        $this->setValidatorEdit($validation_edit);
    }
}