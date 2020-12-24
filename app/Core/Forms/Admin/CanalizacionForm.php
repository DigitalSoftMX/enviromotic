<?php namespace App\Core\Forms\Admin;

use Kris\LaravelFormBuilder\Form;
use App\User;

class CanalizacionForm extends Form
{

    public function buildForm()
    {
        $this
            //->add('no_tracking', 'text',['label'=>'Orden de Servicio','rules' => 'required|numeric'])
            ->add('new_message', 'text',['label'=>'Mensaje', 'rules'=>'required'])
            ->add('id_area', 'text',['label'=>'Area','rules' => 'required|numeric'])
            ->add('id_userarea', 'text',['label'=>'Usuario','rules' => 'required|numeric', 'attr' => ['disabled' => true]])
            //->add('id_status', 'text',['label'=>'Estatus'])
            ->add('id_priority', 'text',['label'=>'Prioridad','rules' => 'required|numeric']);
    }
}