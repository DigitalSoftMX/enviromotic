<?php namespace App\Core\Forms\Admin;

use Kris\LaravelFormBuilder\Form;
use App\User;
use App\Models\Catalogos\Permission;
use App\Models\Catalogos\Permission_Role;
use App\Models\Catalogos\Role_User;

class SeguimientoForm extends Form
{

    public function buildForm()
    {

     $id_us = \Auth::user()->id;
     $names = "AdminM_seguimiento-cerrado";
     $rol = Role_User::where('user_id', '=', $id_us)->value('role_id');   
     $idvalid = Permission_Role::where('permission_id', '=', 33)->where('role_id', '=', $rol)->value('role_id');
        if($idvalid != ""){
        $this
            ->add('no_tracking', 'text',['label'=>'Orden de Servicio','rules' => 'required|numeric'])
            ->add('new_message', 'text',['label'=>'Mensaje'])
            ->add('close', 'checkbox',['label'=>'Cerrado',
             	    'attr' => ['onclick' => 'undisable()']])
             ->add('email', 'text',['label'=>'Correo Electronico',
                    'attr' => ['disabled' => true]])
             ->add('url', 'text',['label'=>'Link de Encuesta',
                    'attr' => ['disabled' => true]])
                ->add('file', 'file',['label'=>'Adjuntar archivo']);    
        }
        else{
         $this
            ->add('new_message', 'text',['label'=>'Mensaje'])
             ->add('file', 'file',['label'=>'Adjuntar archivo']);    
        }
       
    }
}