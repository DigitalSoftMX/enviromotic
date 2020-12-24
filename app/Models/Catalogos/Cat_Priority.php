<?php 

namespace App\Models\Catalogos;
use Illuminate\Database\Eloquent\Model;

class Cat_Priority extends Model{
    
    public $timestamps = false;
    protected $table= 'cat_priority';
    protected $fillable = ['id', 'name'];

}
