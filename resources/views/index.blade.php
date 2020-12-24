@extends('app')
@section('htmlheader_title') {{-- Titulo de pestaña de Navegador --}}
@endsection  {{-- Titulo de pestaña de Navegador --}}
@section('main-content')

<div class="row  border-bottom white-bg dashboard-header">

    <div class="wrapper">
        <h2>Bienvenido {{ Auth::user()->name }}</h2>
          
    </div>
</div>

@endsection