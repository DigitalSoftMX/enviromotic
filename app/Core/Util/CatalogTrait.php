<?php namespace App\Core\Util;


use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Kris\LaravelFormBuilder\FormBuilder;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Maatwebsite\Excel\Facades\Excel;
use Mail;
use App\Models\Catalogos\Role_User;
use App\Models\Catalogos\Ticket;
use App\Models\Catalogos\Cat_Area;
use App\Models\Catalogos\Cat_Priority;
use App\Models\Catalogos\Cat_Status;
use App\Models\Catalogos\Message;
use App\Models\Catalogos\Area_User;
use App\Models\Catalogos\Facturation;
use App\Notifications\NewNotification;



trait CatalogTrait {

    public $list_form = null;
    public $form = null;
    public $tpl_prefix = 'Catalogos.default.';
    public $tpl_list_data = null;
    public $url_prefix = null;
    public $model = null;
    public $field_list = ['id'=>'id'];
    public $form_id = null;
	  public $name = null;
	  public $name_plural = null;
	  protected $validators = ['add'=>[],'edit'=>[],'ver'=>[]];

    public function getName()
	{
		if (!$this->name){
			return str_ireplace('controller','',join('', array_slice(explode('\\', get_class($this)), -1)));
			//return get_class($this);
		}
		return $this->name;
	}
	
	public function getNamePlural()
	{
		return $this->name_plural;
	}
	
	public function getUrlPrefix()
	{
		return $this->url_prefix;
	}
	
	public function setValidatorAdd($validation_array){
		$this->validators['add'] = $validation_array;
	}
	
	public function setValidatorVer($validation_array){
    $this->validators['ver'] = $validation_array;
  }
  
  public function setValidatorEdit($validation_array){
		$this->validators['edit'] = $validation_array;
	}

	public function getValidatorAdd(){
		return $this->validators['add'];
	}
	
	public function getValidatorVer(){
    return $this->validators['ver'];
  }
  
  public function getValidatorEdit(){
		return $this->validators['edit'];
	}

	protected function getModelInstance(){
		return new $this->model();
	}

    // MÉTODOS PARA LISTAR INSERTAR, MODIFICAR Y ELIMINAR    
	public function Index()
	{
        $id = \Auth::user()->id;
        $url = $this->getUrlPrefix();
       
        $ins = ("*$url-ins");
        $mod = ("*$url-mod");
        $eli = ("*$url-eli");
        $ver = ("*$url-ver");
        $valmod = \Entrust::can($mod);
        $valeli = \Entrust::can($eli); 
        $valver = \Entrust::can($ver); 
    
         $names = $this->name;
         
    /* $user = new User();
    $user->name = "Ivan";
    $user->email = "oestromerocerecedo@gmail.com";
    $user->msg = "http://survey.digitalsoftlealtad.com/public/export/1";
    $user->notify(new NewNotification());
*/
          if($names == "Reporte"){
                $form = \FormBuilder::create($this->form, [
                'method' => 'POST',
                'model' => $this->getModelInstance(),
                'url' => ($this->url_prefix.'/add')
            ]);
            return view($this->tpl_prefix.'add',array('catalog'=>$this), compact('form'));

          }
          elseif($names == "Reporte Administrador"){
                $form = \FormBuilder::create($this->form, [
                'method' => 'POST',
                'model' => $this->getModelInstance(),
                'url' => ($this->url_prefix.'/add')
            ]);
            return view($this->tpl_prefix.'add',array('catalog'=>$this), compact('form'));

          }
          elseif($names == "Ticket Seguimiento"){
             $id = \Auth::user()->id;
            $rol = Role_User::where('user_id', '=', $id)->value('role_id');
            if($rol == 3){
                 $show = "";
                 return view($this->tpl_prefix.'listseguimientouser',array('catalog'=>$this))->with('ins', $ins)->with('mod', $mod)->with('eli', $eli)->with('show', $show)->with('ver', $ver);
           }
           else{
                $show = "";
                 return view($this->tpl_prefix.'listseguimiento',array('catalog'=>$this))->with('ins', $ins)->with('mod', $mod)->with('eli', $eli)->with('show', $show)->with('ver', $ver);
        
           }
          }

          elseif($names == "Canalizacion"){
             $id = \Auth::user()->id;
            $rol = Role_User::where('user_id', '=', $id)->value('role_id');
            if($rol == 3){
                 $show = "";
                 return view($this->tpl_prefix.'listcanalizacionuser',array('catalog'=>$this))->with('ins', $ins)->with('mod', $mod)->with('eli', $eli)->with('show', $show)->with('ver', $ver);
           }
           else{
                $show = "";
                 return view($this->tpl_prefix.'listcanalizacion',array('catalog'=>$this))->with('ins', $ins)->with('mod', $mod)->with('eli', $eli)->with('show', $show)->with('ver', $ver);
        
           }
          }

          elseif($names == "Historial"){
             $id = \Auth::user()->id;
            $rol = Role_User::where('user_id', '=', $id)->value('role_id');
            if($rol != 3){
                 $show = "";
                 return view($this->tpl_prefix.'listhistorial',array('catalog'=>$this))->with('ins', $ins)->with('mod', $mod)->with('eli', $eli)->with('show', $show)->with('ver', $ver);
           }
           else{
                 $show = "";
                 return view($this->tpl_prefix.'listhistorialuser',array('catalog'=>$this))->with('ins', $ins)->with('mod', $mod)->with('eli', $eli)->with('show', $show)->with('ver', $ver);   
           }
          }

          elseif($names == "Facturacion"){
            $id = \Auth::user()->id;
            $rol = Role_User::where('user_id', '=', $id)->value('role_id');
            if($rol != 3){
                 $show = "";
                 return view($this->tpl_prefix.'listfacturacion',array('catalog'=>$this))->with('ins', $ins)->with('mod', $mod)->with('eli', $eli)->with('show', $show)->with('ver', $ver);
           }
           else{
                 $show = "";
                 return view($this->tpl_prefix.'listfacturacionuser',array('catalog'=>$this))->with('ins', $ins)->with('mod', $mod)->with('eli', $eli)->with('show', $show)->with('ver', $ver);   
           }
          }

          else{
            if($valmod == false && $valeli == false){ 
                $show = "show";
                 return view($this->tpl_prefix.'list2',array('catalog'=>$this))->with('ins', $ins)->with('mod', $mod)->with('eli', $eli)->with('show', $show)->with('ver', $ver);
             } 
              else{ 
               
                 $show = ""; 
                 return view($this->tpl_prefix.'list',array('catalog'=>$this))->with('ins', $ins)->with('mod', $mod)->with('eli', $eli)->with('show', $show)->with('ver', $ver);
             }
      }
             
    }
	//--------------------------------------------------------------------------------------------------------------------
	public function getJlist()
	{
		$model = $this->getModelInstance();
        $name = $this->name_plural;
        $names = $this->name;

         if($names == "Perfil"){
            $id = \Auth::user()->id;
            $data = User::where('id', '=', $id)->get();
            return response()->json(['draw'=>"1",'data' => $data,'recordsTotal'=>$data->count()] );
        }
        elseif($names == "Usuarios de Area"){
              $data = User::join('role_user', 'users.id', '=', 'role_user.user_id')
                      ->where('role_user.role_id', '>', 3)
                      ->get();
        return response()->json(['draw'=>"1",'data' => $data,'recordsTotal'=>$data->count()] );
        }
       elseif($names == "Usuarios"){
              $data = User::join('role_user', 'users.id', '=', 'role_user.user_id')
                      ->where('role_user.role_id', '=', 3)
                      ->get();
        return response()->json(['draw'=>"1",'data' => $data,'recordsTotal'=>$data->count()] );
        }
        elseif($names == "Canalizacion"){
            $id = \Auth::user()->id;
            $rol = Role_User::where('user_id', '=', $id)->value('role_id');
            if($rol == 3){
                 $data = Ticket::select('ticket.id', 'ticket.affair', 'ticket.message', 'ticket.id AS number', 'ticket.archivob', 'users.name', 'users.last_name', 'users.phone', 'users.email', 'users.address','ticket.created_at')
                         ->join('users', 'ticket.id_user', '=', 'users.id')
                         ->where('id_status', '=', null)
                         ->where('id_user', '=', $id)
                         ->get();
            }
            else{
              $data = Ticket::select('ticket.id', 'ticket.affair', 'ticket.message', 'ticket.id AS number', 'users.name', 'ticket.archivob','users.last_name', 'users.phone', 'users.email', 'users.address','ticket.created_at')
                         ->join('users', 'ticket.id_user', '=', 'users.id')
                         ->where('id_area', '=', NULL)
                         ->get();
            } 
           
        return response()->json(['draw'=>"1",'data' => $data,'recordsTotal'=>$data->count()] );
        }
        elseif($names == "Ticket Seguimiento"){
            $id = \Auth::user()->id;
            $rol = Role_User::where('user_id', '=', $id)->value('role_id');
              if($rol == 3){
              $data = Ticket::select('ticket.id AS number','ticket.id','ticket.no_tracking','ticket.affair','ticket.message','ticket.archivob','ticket.archivo','cat_status.name as status','cat_priority.name','users.username','ticket.created_at')
                      ->where('id_status', '<=', 2)->where('id_user', '=', $id)
                      ->join('cat_status', 'ticket.id_status', '=', 'cat_status.id')
                      ->join('cat_priority', 'ticket.id_priority', '=', 'cat_priority.id')
                      ->join('users', 'ticket.id_user', '=', 'users.id')
                      ->get();
            }
           /* elseif ($rol == 3) {
            $are = Area_User::where('id_user', '=', $id)->value('id_area');
            $data = Ticket::select('ticket.id AS number','ticket.id','ticket.no_tracking','ticket.affair','ticket.message','ticket.archivob', 'ticket.archivo','cat_status.name as status','cat_priority.name','users.username','ticket.created_at')
                      ->where('id_area', '=', $are)->where('id_status', '<=', 2)
                      ->join('cat_status', 'ticket.id_status', '=', 'cat_status.id')
                      ->join('cat_priority', 'ticket.id_priority', '=', 'cat_priority.id')
                      ->join('users', 'ticket.id_user', '=', 'users.id')
                      ->get();
            }*/
            else{
              $data = Ticket::select('ticket.id AS number','ticket.id','ticket.no_tracking','ticket.affair','ticket.message','ticket.archivob','ticket.archivo','cat_status.name as status','cat_priority.name','users.username','ticket.created_at')
                      ->where('id_area', '>', 0)->where('id_status', '<=', 2)
                      ->join('cat_status', 'ticket.id_status', '=', 'cat_status.id')
                      ->join('cat_priority', 'ticket.id_priority', '=', 'cat_priority.id')
                      ->join('users', 'ticket.id_user', '=', 'users.id')
                      ->get();
              
            }
        return response()->json(['draw'=>"1",'data' => $data,'recordsTotal'=>$data->count()] );
        }
       elseif($names == "Historial"){
        $id = \Auth::user()->id;
            $rol = Role_User::where('user_id', '=', $id)->value('role_id');
            if($rol == 3){
                 $data = Ticket::select('ticket.id AS number','ticket.id','ticket.no_tracking','ticket.affair','ticket.message','ticket.archivob','ticket.archivo','cat_status.name as status','cat_priority.name','users.username','ticket.created_at')
                      ->where('id_area', '>', 0)->where('id_status', '=', 3)->where('id_user', '=', $id)
                      ->join('cat_status', 'ticket.id_status', '=', 'cat_status.id')
                      ->join('cat_priority', 'ticket.id_priority', '=', 'cat_priority.id')
                      ->join('users', 'ticket.id_user', '=', 'users.id')
                      ->get();
            }
            else{
                   $data = Ticket::select('ticket.id AS number','ticket.id','ticket.no_tracking','ticket.affair','ticket.message','ticket.archivob','ticket.archivo','cat_status.name as status','cat_priority.name','users.username','ticket.created_at')
                      ->where('id_area', '>', 0)->where('id_status', '=', 3)
                      ->join('cat_status', 'ticket.id_status', '=', 'cat_status.id')
                      ->join('cat_priority', 'ticket.id_priority', '=', 'cat_priority.id')
                      ->join('users', 'ticket.id_user', '=', 'users.id')
                      ->get();
            }
        return response()->json(['draw'=>"1",'data' => $data,'recordsTotal'=>$data->count()] );
        }

       elseif($names == "Facturacion"){
        $id = \Auth::user()->id;
            $rol = Role_User::where('user_id', '=', $id)->value('role_id');
            if($rol == 3){
               $data = Facturation::select('facturation.id','facturation.nombre','facturation.archivo','facturation.id_admin','users.name', 'users.last_name', 'users.phone', 'users.email','facturation.created_at')
                      ->join('users', 'facturation.id_users', '=', 'users.id')
                      ->where('facturation.id_users', '=', $id)
                      //->join('users', 'facturation.id_admin', '=', 'users.id')
                      ->get();
            }
            else{

                 $data = Facturation::select('facturation.id','facturation.nombre','facturation.archivo','facturation.id_admin','users.name', 'users.last_name', 'users.phone', 'users.email','facturation.created_at')
                      ->join('users', 'facturation.id_users', '=', 'users.id')
                    //->join('users', 'facturation.id_admin', '=', 'users.id')
                      ->get();
            }

        return response()->json(['draw'=>"1",'data' => $data,'recordsTotal'=>$data->count()] );
        }
        else{
        $data = $model::all();
        return response()->json(['draw'=>"1",'data' => $data,'recordsTotal'=>$data->count()] );
        }
    }

//AGREGAR FORMULARIO A EL CAMPO ADD-----------------------------------------------------------------------------------------
    public function getAdd()
	{
	        $form = \FormBuilder::create($this->form, [
                'method' => 'POST',
                'model' => $this->getModelInstance(),
                'url' => ($this->url_prefix.'/add')
            ]);
            return view($this->tpl_prefix.'add',array('catalog'=>$this), compact('form'));
	}

//---------------------------------------------------------------------------------------------------------------------------
   	public function postAdd(Request $request){
   	    $url = $this->getUrlPrefix();
        $model = $this->getModelInstance();
       	$v = Validator::make($request->all(), $this->getValidatorAdd() );

        if( $v->fails() ) {
            return redirect()->back()->withErrors($v->errors());
	    }else{ 
         $names = $this->name;
         if($names == "Reporte"){
                $id_us = \Auth::user()->id;
                date_default_timezone_set("America/Mexico_City");
                
                $file = $request->file('file');
                 if($file != ""){
                   $nombre = $file->getClientOriginalName();
                   \Storage::disk('local')->put($nombre,  \File::get($file));
                 }
                 else{
                  $nombre = "";
                 }

                $order = Ticket::create([
                'affair' => $request->affair,
                'message' => $request->message,
                'archivob' => $nombre,
                'id_user' => $id_us,
                ]);

                 return redirect()->to("ticket");
          }
         elseif($names == "Reporte Administrador"){
                date_default_timezone_set("America/Mexico_City");
              
                $order = Ticket::create([
                  'affair' => $request->affair,
                'message' => $request->message,
                'id_user' => $request->id_user,
                ]);

                 return redirect()->to("ticket");
          }
          elseif ($names == "Usuarios de Area") {
                 $datos = User::create([
                'name' => $request->name,
                'last_name' => $request->last_name,
                'username' => $request->username,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'sex' => $request->sex,
                'phone' => $request->phone,
                'address' => $request->address,
                ]);
               $user = User::where('username', '=', $request->username)->value('id');  
               $dato = Area_User::create([
                'id_user' => $user,
                'id_area' => $request->id_area,
                ]);
                $dat = Role_User::create([
                'user_id' => $user,
                'role_id' => 4,
                ]);
                 return redirect()->to($url);
              
          }
          elseif ($names == "Usuarios") {
                 $datos = User::create([
                'name' => $request->name,
                'last_name' => $request->last_name,
                'username' => $request->username,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'sex' => $request->sex,
                'phone' => $request->phone,
                'address' => $request->address,
                ]);
                $user = User::where('username', '=', $request->username)->value('id');  
                $dat = Role_User::create([
                'user_id' => $user,
                'role_id' => 3,
                ]);
                 return redirect()->to($url);
              
          }
          elseif ($names == "Facturacion") {
                
                 $id_us = \Auth::user()->id;
                
                $file = $request->file('file');
                 if($file != ""){
                   $nombre = $file->getClientOriginalName();
                   \Storage::disk('local')->put($nombre,  \File::get($file));
                 }
                 else{
                  $nombre = "";
                 }


                 $datos = Facturation::create([
                'nombre' => $request->name,
                'archivo' => $nombre,
                'id_admin' => $id_us,
                'id_users' => $request->id_users,
                ]);
                
                $corre = User::where('id', '=', $request->id_user)->value('email');
                if($corre != ""){
                
                if (filter_var($corre, FILTER_VALIDATE_EMAIL)) {
                
                $nombre = "Enviromotic";
                $de = "contacto@digitalsoftlealtad.com";
                $para = $corre;
                $asunto  = "Ya puede descargar la factura en el portal";
                $titulo = "Factura";
               $data = array( 'de' => $de, 'para' => $para, 'asunto' => $asunto, 'nombre' => $nombre, 'titulo' => $titulo);

               Mail::send('mails.mails2', $data, function($message) use($de, $para){
               $message->from('contacto@digitalsoftlealtad.com', 'Enviromotic');
               $message->to($para);
               $message->subject("Factura");
               });
                }
               }


                 return redirect()->to($url);
              
          }
          else{
               $url = $this->getUrlPrefix();
               $data = $model::create($request->all());
               return redirect()->to($url);   
          }
        }
   	}

 //----------------------------------------------------------------------------------------------------------------------- 
	public function getEdit($id)
	{
	   
        $model = $this->getModelInstance();
        $data = $model::findOrFail($id);
        $names = $this->name;
     
           $form = \FormBuilder::create($this->form, [
            'model' => $data,
            'method' => 'POST',
            'url' => ($this->url_prefix.'/edit/'.$id)
        ]);
        
        if($names == "Ticket Seguimiento"){
        
          $data = Message::where('id_ticket', '=', $id)
            ->get();

          return view($this->tpl_prefix.'editmessage',array('catalog'=>$this,'data'=>$data), compact('form'));
            
        }
        else{
        
         return view($this->tpl_prefix.'edit',array('catalog'=>$this), compact('form'));
     
        }
       
	}

//------------------------------------------------------------------------------------------------------------------------
    public function postEdit(Request $request, $id){	
        $model = $this->getModelInstance();
        $v = Validator::make($request->all(), $this->getValidatorAdd() );
        if( $v->fails() ) {
	        return redirect()->back()->withErrors($v->errors());
	    }else{
	       $names = $this->name;
           
            if($names == "Canalizacion"){
	           date_default_timezone_set("America/Mexico_City");
                $fecha = date('Y-m-d h:i') ; // Fecha
                $id_us = \Auth::user()->id;

                $file = $request->file('file');
                 if($file != ""){
                   $nombre = $file->getClientOriginalName();
                   \Storage::disk('local')->put($nombre,  \File::get($file));
                 }
                 else{
                  $nombre = "";
                 }

                $ticket = Ticket::find($id);
                $ticket->id_status = 1;
                $ticket->id_area = $request->id_area;
                $ticket->id_priority = $request->id_priority;
                $ticket->id_captura = $request->id_userarea;
                $ticket->archivo = $nombre;
                $ticket->todate_area = $fecha;
                $ticket->save();
                
                $id_uses = Ticket::where('id', '=', $id)->value('id_user');
                
                 $datos = Message::create([
                'message' => $request->new_message,
                'id_ticket' => $id,
                'id_user' => $id_uses,
                ]);
                
                //$iduserarea = Area_User::where('id_area', '=', $request->id_area)->get();
                //  if($iduserarea != ""){
                //    foreach ($iduserarea as $key => $value) {
                  //     $value->id_user;
                       $correo = User::where('id', '=', $request->userarea)->value('email');
                     if($correo != ""){
                      if (filter_var($correo, FILTER_VALIDATE_EMAIL)) {
                      
                      $affair = Ticket::where('id', '=', $id)->value('affair');  
                       
                      $nombre = "Enviromotic";
                      $de = "contacto@digitalsoftlealtad.com";
                      $para = $correo;
                      $asunto  = $request->new_message;
                      $titulo = "Canalizacion";
                      $data = array( 'de' => $de, 'para' => $para, 'asunto' => $asunto, 'nombre' => $nombre, 'titulo' => $titulo);

                     Mail::send('mails.mails2', $data, function($message) use($de, $para){
                     $message->from('contacto@digitalsoftlealtad.com', 'Canalizacion Enviromotic');
                     $message->to($para);
                     $message->subject($affair);
                   });
                     }
                     }
                    //} 
                  //}
                
                $use = Ticket::where('id', '=', $id)->value('id_user');
                $areasuser = User::where('id', '=', $use)->value('email');
                if($areasuser != ""){
                  if (filter_var($areasuser, FILTER_VALIDATE_EMAIL)) {
                
                $affair = Ticket::where('id', '=', $id)->value('affair');  
              
                $nombre = "Enviromotic";
                $de = "contacto@digitalsoftlealtad.com";
                $para = $areasuser;
                $asunto  = $request->new_message;
                $titulo = "Canalizacion";
               $data = array( 'de' => $de, 'para' => $para, 'asunto' => $asunto, 'nombre' => $nombre, 'titulo' => $titulo);

               Mail::send('mails.mails2', $data, function($message) use($de, $para){
               $message->from('contacto@digitalsoftlealtad.com', 'Canalizacion Enviromotic');
               $message->to($para);
               $message->subject($affair);
               
               });
               }
            }

                 $url = $this->getUrlPrefix();
                 return redirect()->to($url);
              


          }               
          elseif($names == "Ticket Seguimiento"){
               date_default_timezone_set("America/Mexico_City");
                $fecha = date('Y-m-d h:i') ; // Fecha
                $id_us = \Auth::user()->id;
                     $mensaje = $request->new_message;
                     if($mensaje != ""){ $mens=$mensaje; } else{ $mens = ""; }
                
                if($request->close == ""){
                      $datos = Message::create([
                      'message' => $mens,
                      'id_ticket' => $id,
                      'id_user' => $id_us,
                      ]);
                      $file = $request->file('file');
                       if($file != ""){
                         $nombre = $file->getClientOriginalName();
                         \Storage::disk('local')->put($nombre,  \File::get($file));
                       }
                       else{
                        $nombre = "";
                       }
                      $ticket = Ticket::find($id);
                      $ticket->no_tracking = $request->no_tracking;
                      $ticket->archivo = $nombre;
                      $ticket->id_status = 2;
                      $ticket->save();

                     $areasuser = User::where('id', '=', $id_us)->value('email');
                if($areasuser != ""){
                  if (filter_var($areasuser, FILTER_VALIDATE_EMAIL)) {
                
               $affair = Ticket::where('id', '=', $id)->value('affair');  
               $no_tracking = Ticket::where('id', '=', $id)->value('no_tracking');  
              
                $nombre = "Enviromotic";
                $de = "contacto@digitalsoftlealtad.com";
                $para = $areasuser;
                $asunto  = $request->new_message;
                $titulo = "Ticket seguimiento";
                $data = array( 'de' => $de, 'para' => $para, 'asunto' => $asunto, 'nombre' => $nombre, 'titulo' => $titulo);

               Mail::send('mails.mails2', $data, function($message) use($de, $para){
               $message->from('contacto@digitalsoftlealtad.com', 'Soporte Enviromotic');
               $message->to($para);
               $message->subject($affair." Folio ".$no_tracking);
               });
               }
                }


                }
                 else{
            
              // dd($url);
              if (filter_var($request->email, FILTER_VALIDATE_EMAIL)) {
              
                $affair = Ticket::where('id', '=', $id)->value('affair');  
               $no_tracking = Ticket::where('id', '=', $id)->value('no_tracking');  
              
               $export = ($request->url . "!" .$request->email);
                $nombre = "Enviromotic";
                $de = "contacto@digitalsoftlealtad.com";
                $para = $request->email;
                $asunto  = $export;
                
               $data = array( 'de' => $de, 'para' => $para, 'asunto' => $asunto, 'nombre' => $nombre, 'affair' => $affair, 'no_tracking' => $no_tracking);

               Mail::send('mails.mails', $data, function($message) use($de, $para){
              $message->from('contacto@digitalsoftlealtad.com', 'Soporte Enviromotic');
               $message->to($para);
               $message->subject($affair." Folio ".$no_tracking);
               });
              }
                $datos = Message::create([
                'message' => $mens,
                'id_ticket' => $id,
                'id_user' => $id_us,
                ]);
                  
                  $file = $request->file('file');
                 if($file != ""){
                   $nombre = $file->getClientOriginalName();
                   \Storage::disk('local')->put($nombre,  \File::get($file));
                 }
                 else{
                  $nombre = "";
                 }

                $ticket = Ticket::find($id);
                $ticket->no_tracking = $request->no_tracking;
                $ticket->id_status = 3;
                $ticket->archivo = $nombre;
                $ticket->save();

                 }
                 
                 $url = $this->getUrlPrefix();
                 return redirect()->to($url);

          }
          elseif ($names == "Facturacion") {
                
                 $id_us = \Auth::user()->id;
                
                $file = $request->file('file');
                 if($file != ""){
                   $nombre = $file->getClientOriginalName();
                   \Storage::disk('local')->put($nombre,  \File::get($file));
                 }
                 else{
                  $nombre = "";
                 }


                 $datos = Facturation::create([
                'nombre' => $request->name,
                'archivo' => $nombre,
                'id_admin' => $id_us,
                'id_user' => $request->id_user,
                ]);
                
                $corre = User::where('id', '=', $request->id_user)->value('email');
                if($corre != ""){
                  if (filter_var($corre, FILTER_VALIDATE_EMAIL)) {
                
                $nombre = "Enviromotic";
                $de = "contacto@digitalsoftlealtad.com";
                $para = $corre;
                $asunto  = "Ya puede descargar la factura en el portal";
                $titulo = "Factura";
                
               $data = array( 'de' => $de, 'para' => $para, 'asunto' => $asunto, 'nombre' => $nombre, 'titulo' => '$titulo');

               Mail::send('mails.mails2', $data, function($message) use($de, $para){
               $message->from('contacto@digitalsoftlealtad.com', 'Enviromotic');
               $message->to($para);
               $message->subject("Factura");
               });
               }
                }

                $url = $this->getUrlPrefix();    
                 return redirect()->to($url);
              
          }
          elseif ($names == "Usuarios de Area") {
                 $ticket = User::find($id);
                 $ticket->name = $request->name;
                 $ticket->last_name = $request->last_name;
                 $ticket->username = $request->username;
                 $ticket->email = $request->email;
                 $ticket->password = Hash::make($request->password);
                 $ticket->sex = $request->sex;
                 $ticket->phone = $request->phone;
                 $ticket->address = $request->address;
                 $ticket->save();

               Area_User::where('id_user', $id)
                        ->update(['id_area' => $request->id_area]);
                  $url = $this->getUrlPrefix();    
          
                 return redirect()->to($url);
              
          }
          elseif ($names == "Usuarios") {
                   $ticket = User::find($id);
                 $ticket->name = $request->name;
                 $ticket->last_name = $request->last_name;
                 $ticket->username = $request->username;
                 $ticket->email = $request->email;
                 $ticket->password = Hash::make($request->password);
                 $ticket->sex = $request->sex;
                 $ticket->phone = $request->phone;
                 $ticket->address = $request->address;
                 $ticket->save();
                 $url = $this->getUrlPrefix();    
          
                 return redirect()->to($url);
              
          }
          elseif ($names == "Perfil") {
                 $ticket = User::find($id);
                 $ticket->name = $request->name;
                 $ticket->last_name = $request->last_name;
                 $ticket->username = $request->username;
                 $ticket->email = $request->email;
                 $ticket->password = Hash::make($request->password);
                 $ticket->sex = $request->sex;
                 $ticket->phone = $request->phone;
                 $ticket->address = $request->address;
                 $ticket->save();
                 $url = $this->getUrlPrefix();    
          
                 return redirect()->to($url);
              
          }
          
          else{
                    $data = $model::findOrFail($id);
                    $data->fill($request->all());
                    $data->save();
    
                    $url = $this->getUrlPrefix();
                    return redirect()->to($url);     
          }
   }
}

     public function getDestroy($id){
        
        $model = $this->getModelInstance();

         $url = $this->getUrlPrefix();

             $data = $model::destroy($id);
             $url = $this->getUrlPrefix();
             return redirect()->to($url);
    }
    

    public function getVer($id)
  {          
    $url = $this->getUrlPrefix();
    $id_user = Ticket::where('id', '=', $id)->value('id_user');
    $show = Message::select('message.id','message.message', 'message.created_at', 'users.name', 'users.last_name', 'users.email', 'users.phone', 'users.address', 'users.sex')
            ->join('users', 'message.id_user', '=', 'users.id')
            ->where('id_ticket', '=', $id)
            ->get();

    $data = Ticket::select('ticket.id','ticket.no_tracking','ticket.affair','ticket.message','ticket.archivo','cat_status.name as status','cat_priority.name','users.username','ticket.created_at')
                      ->where('ticket.id', '=', $id)
                      ->join('cat_status', 'ticket.id_status', '=', 'cat_status.id')
                      ->join('cat_priority', 'ticket.id_priority', '=', 'cat_priority.id')
                      ->join('users', 'ticket.id_user', '=', 'users.id')
                      ->get();
  $pl = User::where('id', '=', $id_user)->get();
    return view($this->tpl_prefix.'ver',array('data'=>$data),array('show'=>$show, 'pl'=>$pl));
 }

     public function getAjaxlistaSex() {    
      //$almacen = \DB::select("SELECT id,Descripcion FROM cat_area WHERE Activo = 1 ORDER BY Descripcion");
      $almacen = [
                 ['id' => 'H', 'name' => 'Hombre'],
                 ['id' => 'M', 'name' => 'Mujer']
                ];           
      return response()->json(['data' => $almacen]);
    }
    
     public function getAjaxlistaDays_Deliver() {    
      $almacen = [
                 ['id' => '1', 'days_deliver' => '1'],['id' => '2', 'days_deliver' => '2'],['id' => '3', 'days_deliver' => '3'],['id' => '4', 'days_deliver' => '4'],['id' => '5', 'days_deliver' => '5'],['id' => '6', 'days_deliver' => '6'],['id' => '7', 'days_deliver' => '7'],['id' => '8', 'days_deliver' => '8'],['id' => '9', 'days_deliver' => '9'],['id' => '10', 'days_deliver' => '10'],
                 ['id' => '11', 'days_deliver' => '11'],['id' => '12', 'days_deliver' => '12'],['id' => '13', 'days_deliver' => '13'],['id' => '14', 'days_deliver' => '14'],['id' => '15', 'days_deliver' => '15'],['id' => '16', 'days_deliver' => '16'],['id' => '17', 'days_deliver' => '17'],['id' => '18', 'days_deliver' => '18'],['id' => '19', 'days_deliver' => '19'],['id' => '20', 'days_deliver' => '20'],
                 ['id' => '21', 'days_deliver' => '21'],['id' => '22', 'days_deliver' => '22'],['id' => '23', 'days_deliver' => '23'],['id' => '24', 'days_deliver' => '24'],['id' => '25', 'days_deliver' => '25'],['id' => '26', 'days_deliver' => '26'],['id' => '27', 'days_deliver' => '27'],['id' => '28', 'days_deliver' => '28'],['id' => '29', 'days_deliver' => '29'],['id' => '30', 'days_deliver' => '30'],
                ];           
      return response()->json(['data' => $almacen]);
    }

     public function getAjaxlistaArea() {
      $almacen = \DB::select("SELECT id, name FROM cat_area");
      return response()->json(['data' => $almacen]);
    }

     public function getAjaxlistaPriority() {
      $almacen = \DB::select("SELECT id, name FROM cat_priority");
      return response()->json(['data' => $almacen]);
    }
    
    public function getAjaxlistaStatus() {
      $almacen = \DB::select("SELECT id, name FROM cat_status");
      return response()->json(['data' => $almacen]);
    }
    
    public function getAjaxlistaUser() {
      //$almacen = \DB::select("SELECT id, name FROM users");
      $almacen = User::select('users.id','users.name','role_user.role_id')
            ->join('role_user', 'users.id', '=', 'role_user.user_id')
            ->where('role_user.role_id', '>=', 4)
            ->get();

      return response()->json(['data' => $almacen]);
    }
    
    public function getAjaxlistaUsers() {
      //$almacen = \DB::select("SELECT id, name FROM users");
      $almacen = User::select('users.id','users.name','role_user.role_id')
            ->join('role_user', 'users.id', '=', 'role_user.user_id')
            ->where('role_user.role_id', '=', 3)
            ->get();

      return response()->json(['data' => $almacen]);
    }
    
    public function getAjaxArea($id) {
           $almacen = User::select('users.id','users.name')
            ->join('area_user', 'users.id', '=', 'area_user.id_user')
            ->where('area_user.id_area', '=', $id)
            ->get();

      return response()->json(['data' => $almacen]);
   
    }
    
    public function getAjaxlistaNotification() {

      $id = \Auth::user()->id;
      $rol = Role_User::where('user_id', '=', $id)->value('role_id');
        if($rol != 3){
             $almacen = Ticket::where('id_area', '=', NULL)->count();
        }

      return $almacen;
    }


    # Template 
    function get_tpl_prefix(){
        return strtolower($this->tpl_prefix + get_class($this));
	}

    function get_tpl_oper($oStr){
        return strtolower($this->get_tpl_prefix()+"_"+oStr+"->html");
	}

    function get_tpl_list(){
        return $this->get_tpl_oper('list');
	}
	
    function get_tpl_list_data(){
        if($this->tpl_list_data == null ){            
            return 'core/cat_functionault/' + 'list_data' + "->html";
        }else{
            return $this->get_tpl_oper($this->tpl_list_data);
		}
	}
	
    function get_tpl_add(){
        return $this->get_tpl_oper('add');
	}
	
    function get_tpl_ver(){
        return $this->get_tpl_oper('ver');
  }
  
    function get_tpl_edit(){
        return $this->get_tpl_oper('edit');
	}
	
    function get_tpl_view(){
        return $this->get_tpl_oper('view');
	}
	
    # Querys 
    function get_list_query(){
        if($this->model != null ){
            return $this->model->objects->all();
        }else{
            return [];
		}
	}
    
    # Verbose name 
    function get_nombre_plural(){
        return $this->model->_meta->verbose_name_plural;    
	}
	
    function get_nombre(){
        return $this->model->_meta->verbose_name;
	}
	
    ### URLS list, add, edit, delete
    function get_list_url( ){
        return reverse($this->url_prefix."_list" );
	}
	
    function get_search_url( ){
        return reverse($this->url_prefix."_search" );
	}
	
    function get_add_url( ){
        return reverse($this->url_prefix."_add");
	}
    
    function get_ver_url( ){
        return reverse($this->url_prefix."_ver");
  }
  
    function get_edit_url_name( ){        
        return $this->url_prefix."_edit";
	}
	
    function get_delete_url_name( ){
        return $this->url_prefix."_delete";
	}
	
    function get_edit_url( $id ){        
        return reverse($this->get_edit_url_name(), $kwargs=array('id'=>id) );
	}
		
    function get_delete_url( $id ){
        return reverse($this->get_delete_url_name(), $kwargs=array('id'=>id) );
	}


	public function getJsUrl(){		
		return strtolower('assets/js/'.$this->getName().'js');
	}
	
    function get_form_id(){
        if($this->form_id == null ){
            $this->form_id = "form_"+  str(random.randint(1,999));
		}
        return $this->form_id; 
	}
}