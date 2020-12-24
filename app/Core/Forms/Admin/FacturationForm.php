<?php namespace App\Core\Forms\Admin;

use Kris\LaravelFormBuilder\Form;
use App\User;

class FacturationForm extends Form
{

    public function buildForm()
    {
        $this
            ->add('name', 'text',['label'=>'Nombre','rules' => 'required'])
            ->add('id_users', 'text',['label'=>'Usuario','rules' => 'required'])
            ->add('file', 'file',['label'=>'Adjuntar archivo'])
           ;
     }
}