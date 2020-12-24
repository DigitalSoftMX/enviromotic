<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Catalogos\Role_User;
use App\Models\Catalogos\Ticket;
use App\Models\Catalogos\Cat_Area;
use App\Models\Catalogos\Cat_Priority;
use App\Models\Catalogos\Cat_Status;
use App\Models\Catalogos\Message;
use App\Models\Catalogos\Area_User;
use App\Models\Catalogos\Facturation;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $id = \Auth::user()->id;
            $rol = Role_User::where('user_id', '=', $id)->value('role_id');
            if($rol == 3){
               $notificaciones = Ticket::where('id', '=', $id)->where('id_status', '=', 1)->count();
            }
            else{
               $notificaciones = Ticket::where('id', '=', $id)->where('id_status', '=', 1)->count();
            }
      // $seguimiento = \Auth::user()->can('adminM_seguimiento-sho');
      // $perfil = \Auth::user()->can('adminM_perfil-sho');
       
        //return view('index')->with('seguimiento', $seguimiento);
        return view('index');
    }
}
