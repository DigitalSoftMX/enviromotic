<?php 

namespace App\Models\Catalogos;
use Illuminate\Database\Eloquent\Model;

class Cat_Area extends Model{
    
    public $timestamps = false;
    protected $table= 'cat_area';
    protected $fillable = ['id', 'name'];

}
