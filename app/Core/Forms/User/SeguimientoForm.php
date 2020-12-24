<?php namespace App\Core\Forms\User;

use Kris\LaravelFormBuilder\Form;
use App\User;

class SeguimientoForm extends Form
{

    public function buildForm()
    {
        $this
            ->add('new_message', 'text',['label'=>'Mensaje'])
            ->add('file', 'file',['label'=>'Adjuntar archivo']);
 
    }
}