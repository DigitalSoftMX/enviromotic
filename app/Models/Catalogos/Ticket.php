<?php 

namespace App\Models\Catalogos;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model{
    
    public $timestamps = true;
    protected $table= 'ticket';
    protected $fillable = ['id', 'no_tracking', 'affair', 'message', 'archivo','archivob','id_status', 'id_priority', 'id_user'];

}
