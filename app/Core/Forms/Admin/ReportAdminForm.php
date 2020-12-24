<?php namespace App\Core\Forms\Admin;

use Kris\LaravelFormBuilder\Form;
use App\User;

class ReportAdminForm extends Form
{

    public function buildForm()
    {
        $this
            ->add('id_user', 'text',['label'=>'Usuario','rules' => 'required|numeric'])
            ->add('affair', 'text',['label'=>'Asunto','rules' => 'required'])
            ->add('message', 'textarea',['label'=>'Mensaje','rules' => 'required']);
    }
}