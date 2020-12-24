<?php namespace App\Core\Forms\Admin;

use Kris\LaravelFormBuilder\Form;
use App\User;

class UserClientForm extends Form
{

    public function buildForm()
    {
        $this
             ->add('name', 'text',['label'=>'Nombre','rules' => 'required'])
            ->add('last_name', 'text',['label'=>'Appellidos','rules' => 'required'])
            ->add('username', 'text',['label'=>'Usuario','rules' => 'required|unique:users'])
            ->add('password', 'password',['label'=>'Contrase«Ða','rules' => 'required'])
            ->add('email', 'text',['label'=>'Correo electronico'])
            ->add('sex', 'text',['label'=>'Sexo','rules' => 'required'])
            ->add('phone', 'text',['label'=>'Telefono','rules' => 'numeric'])
            ->add('address', 'text',['label'=>'Direccion']);       
    }
}