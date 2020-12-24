<?php 

namespace App\Models\Catalogos;
use Illuminate\Database\Eloquent\Model;

class Message extends Model{
    
    public $timestamps = true;
    protected $table= 'message';
    protected $fillable = ['id', 'message', 'id_ticket', 'id_user'];

}
