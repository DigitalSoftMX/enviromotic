<?php namespace App\Core\Forms\Admin;

use Kris\LaravelFormBuilder\Form;
use App\User;

class Cat_AreaForm extends Form
{

    public function buildForm()
    {
        $this
            ->add('name', 'text',['label'=>'Nombre','rules' => 'required']);
     }
}