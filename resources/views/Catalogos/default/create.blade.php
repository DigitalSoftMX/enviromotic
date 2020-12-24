@extends('apps')

@section('content')
<div class="tab-content">
	<div class="tab-pane active" id="Obras">
        <div class="row">
       		<div class="col-md-12">		               											
								    		               		
			  	<div class="col-md-10">
			    	<div class="grid simple">
						<div class="grid-title no-border">
			              <h5><span class="semi-bold"> Nuevo {{$catalog->getNamePlural()}}</span></h5>
			            </div>
			    		   <div class="grid-body no-border p-t-15">
			    		  
                            {!! form_start($form) !!}

                            {!! form_rest($form) !!}
                            <button type="submit" class="btn btn-default">Aceptar</button>
                            {!! form_end($form) !!}
       
						</div>
					</div> 
			  	</div>
          	</div>
        </div>
    </div>	
</div>
@endsection

