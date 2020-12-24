$(document).ready(function(){
  $("#form1").validate({
      // Inputs de Productos
      rules: {
        id_producto_almacen : {
            required: true
        },
        codigoBarras : {
            required: true
        },
        presentacion : {
            required: true
        },
        unidad_medida : {
            required: true
        },
        contenido : {
            required: true
        },
        cantidad : {
            required: true
        },
        Traspasar : {
            required: true
        },
      },
      highlight: function(element) {
        $(element).closest(".form-group").removeClass("has-success").addClass("has-error").parents('form.animate-form').addClass("animated shake");
      },
      unhighlight: function(element) {
        $(element).closest(".form-group").removeClass("has-error").addClass("has-success");
      }
  });  
});