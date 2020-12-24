<?php 

namespace App\Models\Catalogos;
use Illuminate\Database\Eloquent\Model;

class Area_User extends Model{
    
    public $timestamps = false;
    protected $table= 'area_user';
    protected $fillable = ['id', 'id_user', 'id_area'];

}
