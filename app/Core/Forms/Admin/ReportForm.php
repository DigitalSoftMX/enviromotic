<?php namespace App\Core\Forms\Admin;

use Kris\LaravelFormBuilder\Form;
use App\User;

class ReportForm extends Form
{

    public function buildForm()
    {
        $this
            ->add('affair', 'text',['label'=>'Asunto','rules' => 'required'])
            ->add('message', 'textarea',['label'=>'Mensaje','rules' => 'required'])
            ->add('file', 'file',['label'=>'Adjuntar archivo'])
            ;
    }
}