<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DetailController extends Controller
{
   public function downloadFile($file){

 $path = storage_path('app/').$file;
    
      return response()->download($path);
    }
}
