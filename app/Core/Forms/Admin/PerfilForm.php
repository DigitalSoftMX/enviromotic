<?php namespace App\Core\Forms\Admin;

use Kris\LaravelFormBuilder\Form;
use App\User;

class PerfilForm extends Form
{

    public function buildForm()
    {
        $this
            ->add('name', 'text',['label'=>'Nombre','rules' => 'required'])
            ->add('last_name', 'text',['label'=>'Apellidos','rules' => 'required'])
            ->add('username', 'text',['label'=>'Usuario','rules' => 'required'])
            ->add('password', 'password',['label'=>'Contraseña','rules' => 'required'])
            ->add('email', 'text',['label'=>'Correo electronico'])
            ->add('sex', 'text',['label'=>'Sexo','rules' => 'required'])
            ->add('phone', 'text',['label'=>'Telefono','rules' => 'numeric'])
            ->add('address', 'text',['label'=>'Direccion']);       
    }
}