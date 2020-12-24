<?php 

namespace App\Models\Catalogos;
use Illuminate\Database\Eloquent\Model;

class Facturation extends Model{
    
    public $timestamps = true;
    protected $table= 'facturation';
    protected $fillable = ['id', 'nombre', 'archivo', 'id_admin', 'id_users'];

}