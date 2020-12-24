<script>
	function view_con_requisicion()
	{
	 // alert("qlmacen");
	 // select_requi_servi  
	  
	   document.getElementById('select_requi').style.display='block';
	   document.getElementById('select_requi_servi').style.display='none';
	}

	function view_con_requisicion_servicio()
	{
	    document.getElementById('select_requi').style.display='none';
	   document.getElementById('select_requi_servi').style.display='block';
	}
 </script>

 <script>
     function view_supplier(id_supplier)
     {
       //alert(id_supplier.value);
       var ruta = "{{URL('compras/supplier')}}/"+id_supplier.value+"";
       
        $.ajax({
          url: ruta,
          dataType: "JSON",
          type: "GET",
          success: function(res){
       
       console.log(res);
      $('#calle').text(res[0].calle +" "+"Col"+" "+res[0].colonia +" "+"C.p."+" "+res[0].cp+" "+res[0].ciudad+","+" "+res[0].estado+" "+res[0].pais );
             /*$('#colonia').text(res[0].colonia);*/
             $('#rfc').text(res[0].rfc);
            /* $('#ciudad').text(res[0].ciudad);
             $('#estado').text(res[0].estado);
             $('#pais').text(res[0].pais);
             $('#cp').text(res[0].cp);*/
             $('#telefono').text(res[0].telefono);
             $('#movil').text(res[0].movil);
             $('#fax').text(res[0].fax);
             $('#email').text(res[0].email);
          // $('#id_proveedor').val(res[0].id);
          
           }

      }); //fin ajaxcolonia 

     }
</script>

<script>
	  function number_format(number, decimals, decPoint, thousandsSep){
	  decimals = decimals || 0;
	  number = parseFloat(number);

	  if(!decPoint || !thousandsSep){
	    decPoint = '.';
	    thousandsSep = ',';
	  }

	  var roundedNumber = Math.round( Math.abs( number ) * ('1e' + decimals) ) + '';
	  var numbersString = decimals ? roundedNumber.slice(0, decimals * -1) : roundedNumber;
	  var decimalsString = decimals ? roundedNumber.slice(decimals * -1) : '';
	  var formattedNumber = "";

	  while(numbersString.length > 3){
	    formattedNumber += thousandsSep + numbersString.slice(-3)
	    numbersString = numbersString.slice(0,-3);
	  }

	  return (number < 0 ? '-' : '') + numbersString + formattedNumber + (decimalsString ? (decPoint + decimalsString) : '');
	}
	/*
	//english format
	number_format( 1234.50, 2, '.', ',' ); // ~> "1,234.50"

	//german format
	number_format( 1234.50, 2, ',', '.' ); // ~> "1.234,50"

	//french format
	number_format( 1234.50, 2, '.', ' ' ); // ~> "1 234.50"*/
</script> <!-- format_numner-->

<script type="text/javascript">
   function isNumberKey(evt)
    {
     var charCode = (evt.which) ? evt.which : event.keyCode
       if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
 
        return true;
    }
  
</script>

{{-- Script Tabla de Productos --}}
  <script>
    function product(id_product)
    {
        var id_items = id_product.value;
      //  alert(id_items);
        var url_action ="{{URL('compras/items/products')}}/"+id_items+"";

		        /* Para obtener el texto */
		var combo = document.getElementById("id_producto_almacen");
		var selected = combo.options[combo.selectedIndex].text;

                $.ajax({
                     url:url_action,
                     dataType: 'JSON',
                     type:'GET',
                    success: function(response){
                      console.log(response);
                           // window.location.replace(redirect);
                            $('#producto_nombre').val(selected);
                            $('#id_producto_requisicion').val(response.productos_almacen[0].id);
                            $('#id_producto_id').val(response.productos_almacen[0].cat_producto_id);
                             /* $('#codigoBarras').val(response.codigoBarras);
                             $('#unidad_medida').val(response.descripcionunidad);
                             $('#presentacion').val(response.descripciotipo);
                             $('#precio').val(response.precio);
                             */
                         
                              if((response.unicos_presenta).length > 1 )
                              {
                                  select = '<select id="presentacion" name="presentacion" class="form-control">';
                                            option = '<option> Seleccione una presentacion </option>';
                                             $.each(response.unicos_presenta, function(index, value){
                                               option += '<option value="'+index+'">'+value+'</option>'; 
                                             });
                                            $('#selectPresentacion').html(select + option + '</select>');
                                            $('#id_select_presentacion').val("");
                                            $('#unico_presenta').val("0");
                                            $('#precio').val("");
                              }
                              else
                              {
                              	 $.each(response.unicos_presenta, function(index, value){

                                      $('#selectPresentacion').html('<input type="text" name="presentacion" id="presentacion" class="form-control oculto" value="'+value+'" readonly>');
                                         $('#id_select_presentacion').val(index);
                                       });

                                    $('#unico_presenta').val("1");
                              }

                              if((response.unicos_unidad).length > 1)
                                { 
                                     // $('.oculto').hide();
                                  select = '<select id="unidad_medida" name="unidad_medida" class="form-control">';
                                          option = '<option> Seleccione una presentacion </option>';
                                             $.each(response.unicos_unidad, function(index, value){
                                               option += '<option value="'+index+'">'+value+'</option>'; 
                                             });
                                            $('#selectUnidad').html(select + option + '</select>');
                                            $('#id_select_unidad').val("");
                                             $('#unico_unidad').val("0");
                                             $('#precio').val("");

                                }else{


                                    $.each(response.unicos_unidad, function(index, value){

                                       $('#selectUnidad').html('<input type="text" name="unidad_medida" id="unidad_medida" class="form-control oculto" value="'+value+'" readonly>');

                                      $('#id_select_unidad').val(index);
                                              
                                             });
                                          $('#unico_unidad').val("1");
                                          
                               }


                               if((response.cantidad).length > 1){
                                
                                
                                 $('#codigoBarras').val("");
                                 $('#texto_contenido').val("");
                                        select = '<select id="contenido" name="contenido" class="form-control" onchange="valor_contenido();">';
                                          option = '<option> Seleccione un contenido </option>';
                                             $.each(response.cantidad, function(index, value){
                                               option += '<option value="'+index+'">'+value+'</option>'; 
                                             });
                                            $('#selectContenido').html(select + option + '</select>');
                                            $('#precio').val("");
                                             $('#unico_cantidad').val("0");

                               }else{

                                     $('#selectContenido').html('<input type="text" name="contenido" id="contenido" class="form-control oculto" value="'+response.cantidad+'" readonly>');
                                      $('#texto_contenido').val(response.cantidad);

                                       $('#codigoBarras').val(response.cat_claves);
                                        $('#precio').val(response.productos_almacen[0].precio);
                                        
                                         $('#unico_cantidad').val("1");
                                   
                                 }

                                 if((response.unico_impuesto).length > 1){
                                  // alert("entro");
                                    select = '<select id="factor" name="factor" class="form-control">';
                                          option = '<option> Seleccione una Opcion </option>';
                                             $.each(response.unico_impuesto, function(index, value){
                                               option += '<option value="'+index+'">'+value+'</option>'; 
                                             });
                                            $('#selectFactor').html(select + option + '</select>');

                                 }else{
                                           
                                     $('#selectFactor').html('<input type="number" name="factor" id="factor" class="form-control oculto" value="'+response.unico_impuesto+'" readonly>');
                                    //  $('#texto_contenido').val(response.unico_impuesto);
                                 }

                              /*var array = $.map(response.tipos_impuesto, function(value, index) {
										    return [value];
										});


                                        if(array.length > 1 )
                                        {
                                           
		                                    select = '<select id="factor" name="factor" class="form-control">';
		                                          option = '<option> Seleccione una Opcion </option>';
		                                             $.each(array, function(index, value){
		                                               option += '<option value="'+index+'">'+value+'</option>'; 
		                                             });
		                                            $('#selectFactor').html(select + option + '</select>');
                                        }*/
                        }
                  });
    }
</script>

<script>
    function valor_contenido()
    {
       
          var valor_cantidad = $("#contenido option:selected").text();
                               $('#texto_contenido').val(valor_cantidad);

          var id_presentacion = $('#id_select_presentacion').val();
          var id_unidad = $('#id_select_unidad').val();
          var id_productos = $('#id_producto_id').val();

          var url_action_clave ="{{URL('compras/search_key_products')}}/"+id_presentacion+"/"+id_unidad+"/"+id_productos+"/"+valor_cantidad+"";
   
               $.ajax({
                     url:url_action_clave,
                     dataType: 'JSON',
                     type:'GET',
                     success: function(values){
                      console.log(values);
                       $('#codigoBarras').val(values[0].clave);
                       $('#precio').val(values[0].precio);
                       $('#id_producto_requisicion').val(values[0].id);
                    }
                });
    }
</script>
{{-- Script Tabla de Productos --}}

{{-- Script Sumas --}}
  <script>
      function suma_row(valor)
    {
    	var cantidad = valor.value;
        var precio = document.getElementById("precio").value;
       // var factor = document.getElementById("factor").value;
     
        subtotal = (parseFloat(cantidad)*parseFloat(precio));
        document.getElementById("total").value = number_format(parseFloat(subtotal),2,'.',',');
    }
  </script>
{{-- Script Sumas --}}

{{--script Tabla agregar--}}
<script>
var items = 1;
   function product_add(id_product)
    {
         var unico_uni = $('#unico_unidad').val();
         var unico_pre  = $('#unico_presenta').val();
         var unico_cat  = $('#unico_cantidad').val();

         var producto = $('#producto_nombre').val();
         var codigoBarras = $('#codigoBarras').val();
         var unidad_medida = $('#unidad_medida').val();
         var presentacion = $('#presentacion').val();
         var contenido = $('#contenido').val();
         var cantidad = $('#cantidad').val();
         var precio = $('#precio').val();
         var iva = $('#factor').val();
         var sub_total = $('#total').val();
         var id_producto_requisicion = $('#id_producto_requisicion').val();
          var item_data = $('#item_data').val();
         //alert(producto+" "+codigoBarras+" "+unidad_medida+" "+presentacion+" "+contenido+" "+cantidad+" "+precio+" "+sub_total+" "+iva);
         var sub_total_iva = 0;

          var rowCount = $('#TblOrderList .ingData').length;
          //alert(rowCount);
            if(unico_uni == 1){
	          var unidad_medida = $('#unidad_medida').val();
	        }else
	        {
	           var unidad_medida = $("#unidad_medida option:selected").text();
	        }

	        if(unico_pre == 1){
	           var presentacion = $('#presentacion').val();
	        }else{
	           var presentacion =$("#presentacion option:selected").text();
	        }

	        if(unico_cat == 1){
	           var contenido = $('#contenido').val();
	        }else{
	           var contenido = $("#contenido option:selected").text();
	        }

           if(iva != 0){

           	     //iva = (iva/100) + 1;
           	   iva_2 = (iva/100);
              sub_total_iva = eval(sub_total.replace(',','').replace(',','') * iva_2);
              alert(sub_total_iva);
           
           }
           else{

              sub_total_iva = iva;

           }
          //////////////////////////////////////////////////////
          if(rowCount == 0)
          {
             items = 1;
              rowCount++;
          }else{
          	rowCount++;
          	 items=item_data++;
          }

          var outHTML =
		        '<tr class="ingData" id="ingRow' + rowCount + '">'
		            + '<td align="center" style="display:none;"><input type="text" id="ids_row'+rowCount+'" name="ids_row['+items+']" value="' + items + '"></td>'
		            + '<td align="center" style="display:none;"><div id="id_row' + rowCount + '">' + items + '</div></td>'
		            + '<td align="center"><div id="producto' + rowCount + '">' + producto + '</div></td>'
		            + '<td align="center"><div id="codigoBarras' + rowCount + '">' + codigoBarras + '</div></td>'
		            + '<td align="center"><div id="unidad_medida' + rowCount + '">' + unidad_medida + '</div></td>'
		            + '<td align="center"><div id="presentacion' + rowCount + '">' + presentacion + '</div></td>'
		            + '<td align="center"><div id="contenido' + rowCount + '">' + contenido + '</div></td>'

		            + '<td align="right"><input type="text" class="form-control alin" data-id="'+rowCount+'" name="cantidad_row['+ items +']" id="cantidad_row' + rowCount + '" value="' + cantidad + '" onkeyup="suma_row_table(this);" onkeypress="return isNumberKey(this);"/></td>'

		            + '<td align="right"><input type="text" class="form-control alin" data-id="'+rowCount+'" name="precio_row['+ items +']" id="precio_row' + rowCount + '" value="' + precio + '" onkeyup="suma_row_table_price(this);"/></td>'

                    + '<td style="display:none;"><input type="text" class="form-control alin" data-id="'+rowCount+'" name="iva_row['+ items +']" id="iva_row' + rowCount + '" value="' + iva + '" /></td>'

		            + '<td style="width:130px " align="center"><input type="text" class="sin_border suma_total form-control alin2" name="sub_total_row['+ items +']" id="sub_total_row' + rowCount + '" value="' + sub_total + '" readonly/></td>'

		            + '<td style="width:130px; display:none;" align="center"><input type="text" class="sin_border suma_iva_agregar form-control alin2" name="sub_total_iva['+ items +']" id="sub_total_iva' + rowCount + '" value="' + sub_total_iva + '" readonly/></td>'

		            + '<td style="display:none;"><input type="number" name="id_producto_requisicion['+ items +']" id="id_producto_requisicion' + rowCount + '" value="' + id_producto_requisicion + '"/></td>'

		            + '<td style="display:none;"><input type="number" name="id_items_items['+ items +']" id="id_items_items' + rowCount + '" value="0"/></td>'

                    + '<td style="display:none;"><input type="number" name="id_requisicion_maestro['+ items +']" id="id_requisicion_maestro' + rowCount + '" value="0"/></td>'

		            + '<td align="center">'
		                // + '<button class="OrderREMOVE" type="button">Editar</button>' 
		                + '<button class="btn btn-danger btn-xs" type="button" onclick="myDeleteFunction(this);" value="'+rowCount+'" title="Eliminar"><i class="glyphicon glyphicon-trash"></i></button>'
		                // + '<button class="OrderDOWN" type="button">down</button>' 'data-qty' => $data->id
		            + '</td>'
		        + '</tr>';

		     $('#TblOrderList tr:last').after(outHTML);

           

	   $('#codigoBarras').val("");
       $('#unidad_medida').val("");
       $('#presentacion').val("");
       $('#contenido').val("");
       $('#cantidad').val("");
       $('#precio').val("");
       $('#total').val("");
       $('#factor').val("");
       $('#id_producto_requisicion').val("");
       $('#item_data').val(items+1);

       suma_iva_agregar();
       suma_col_total();
       suma_col();
    }
     function myDeleteFunction(renglon) 
		{
           
            $('#ingRow'+renglon.value).closest('tr').remove();
               suma_iva_agregar();
               suma_col_total();
               suma_col();

		}
//////////////// Funciones Sumas /////////////////////////
    function suma_iva_agregar()
    {
       var iva_suma = $('#iva_suma');
        
         var iva_total = 0;

         if(iva_suma.text() != ''){
         //  iva_suma = iva_suma.text().replace('$','');
           iva_suma.html(iva_suma.text().replace('$',''));
         //  iva_total = iva_suma;
//alert(iva_total);
         }else{
           iva_suma.html("");
         	iva_total = 0;

         }

       $(".suma_iva_agregar").each(function(index, el) {

		      var str = $(this).val();
		      iva_total = (parseFloat(iva_total) + eval(str.replace(',','').replace(',','')));
		      // alert('iva number otro '+iva_total);
          });

       iva_suma.html ('$'+' '+number_format(iva_total,2,'.',','));
      // iva_suma.html ('$'+' '+ iva_total);
       //alert('iva number '+iva_total);
       document.getElementById("cantidad_ivasuma").value =iva_total;
       

    }

    function suma_col_total()
    {
    	var sub = $('#subtotalPrice');
    	 var sub_total = 0;
    	if(sub.text() != '')
    	{

         sub.html(sub.text().replace('$','').replace(',',''));
        // alert( sub_total);
    	}
    	else{
    		sub.html("");
    		sub_total = 0;

    	}
       

        $(".suma_total").each(function(index, el) {
		   		     
		      var str = $(this).val();
     	       sub_total = (parseFloat(sub_total) + eval(str.replace(',','').replace(',','')));
		    
          });

         sub.html ('$'+' '+number_format(sub_total,2,'.',','));
      //  alert(sub_total);
          document.getElementById("cantidad_subtotal").value = sub_total;
         

    }

    function suma_row_table(valores)
    {
        

    	var data_id = $(valores).data('id');

        var cantidad = document.getElementById("cantidad_row"+data_id).value;
        var precio = document.getElementById("precio_row"+data_id).value;
        var iva = document.getElementById("iva_row"+data_id).value;
   

        var SubTotalIva = 0;
   
         if(iva != 0){

           	   general_row =  (parseFloat(cantidad)*parseFloat(precio));
               SubTotalIva = (general_row * iva)/100;
               alert(SubTotalIva);
           }
           else{

              general_row =  (parseFloat(cantidad)*parseFloat(precio));

           }

        document.getElementById("sub_total_row"+data_id).value = parseFloat(general_row);
        document.getElementById("sub_total_iva"+data_id).value = parseFloat(SubTotalIva);

       suma_iva_agregar();
       suma_col_total();
       suma_col()
    }

     function suma_row_table_price(valores)
    {
    	var data_id = $(valores).data('id');
    	
        var cantidad = document.getElementById("cantidad_row"+data_id).value;
        var precio = document.getElementById("precio_row"+data_id).value;
        var iva = document.getElementById("iva_row"+data_id).value;


        var SubTotalIva = 0;

         if(iva != 0){

           	      general_row =  (parseFloat(cantidad)*parseFloat(precio));
           	      SubTotalIva = (general_row * iva)/100;
           }
           else{

              general_row =  (parseFloat(cantidad)*parseFloat(precio));

           }

        document.getElementById("sub_total_row"+data_id).value = parseFloat(general_row);
        document.getElementById("sub_total_iva"+data_id).value = parseFloat(SubTotalIva);

       suma_iva_agregar();
       suma_col_total();
       suma_col()
    }

      function suma_col()
    {

    	var iva_suma = $('#cantidad_ivasuma').val();
        var sub = $('#cantidad_subtotal').val();
        var g_total = $('#total_general');

          iva_suma = eval(iva_suma.replace('$','').replace(',',''));
          sub = eval(sub.replace('$','').replace(',',''));
          //g_total = eval(g_total.replace('$',''));
        //g_total = g_total.replace("tres","dos");
      //    iva_suma = iva_suma.replace("$","''");
 
         // alert(iva_suma +' '+ sub +' '+ g_total.text());

        var suma_general = 0;

          if(g_total.text() != ''){
             suma_general = eval(g_total.text().replace('$','').replace(',',''));
            // alert(suma_general);
          }else{
             g_total.html("");
             suma_general = 0;
          }
        

       

         suma_general = (parseFloat(sub) + parseFloat(iva_suma));
         g_total.html ('$'+' '+number_format(suma_general,2,'.',','));

         // alert(suma_general);
    }


</script>

<script>
	
function view_con_requisicion()
{
 // alert("qlmacen");
 // select_requi_servi  
  
   document.getElementById('select_requi').style.display='block';
   document.getElementById('select_requi_servi').style.display='none';
}

function view_con_requisicion_servicio()
{
    document.getElementById('select_requi').style.display='none';
   document.getElementById('select_requi_servi').style.display='block';
}

var itemss = 1;

function view_requisition(id_req_alm)
{
      var table_invoice_items = $("#data_table");
      var ruta = "{{URL('compras/items')}}/"+id_req_alm.value+"";
      var item_data = $('#item_data').val();

   //////////////////////////////////////////////////////
          
       

        $.ajax({
          url: ruta,
          dataType: "JSON",
          type: "GET",
          success: function(res){
             console.log(res);
           var rowCount = $('#TblOrderList .ingData').length;


           var iva = 0;
           var sub_total_iva = 0;
           var sub_total = 0;
           var sub_total_iva = 0;
		        if(rowCount == 0)
		          {
		             itemss = 1;
		              rowCount++;
		          }else{
		          	rowCount++;
		          	 itemss = item_data++;
		          }

              $(res).each(function(key, value) {

              	 if(value.factor != 0){

           	     //iva = (iva/100) + 1;
           	   iva = (value.factor);
           	   iva_2 = (value.factor/100);
               sub_total = (value.cantidad * value.precio);
               sub_total_iva = sub_total * iva_2;
               
           
           }
           else{

              iva= value.factor;
              sub_total_iva = 0;
              sub_total = (value.cantidad * value.precio);
              

           }


       table_invoice_items.append('<tr class="ingData" id="ingRow'+rowCount+'">'

            + '<td align="center" style="display:none;"><input type="text" id="ids_row'+rowCount+'" name="ids_row['+ itemss +']" value="' + itemss + '"></td>'
             + '<td align="center" style="display:none;"><div id="id_row' + rowCount + '">' + itemss + '</div></td>'
		     + '<td align="center"><div id="producto' + rowCount + '">' + value.desc_product + '</div></td>'
		     + '<td align="center"><div id="codigoBarras' + rowCount + '">' + value.codigoBarras + '</div></td>'
		     + '<td align="center"><div id="unidad_medida' + rowCount + '">' + value.unidad_medida + '</div></td>'
		     + '<td align="center"><div id="presentacion' + rowCount + '">' + value.presentacion + '</div></td>'
		     + '<td align="center"><div id="contenido' + rowCount + '">' + value.contenido + '</div></td>'

		     + '<td align="right"><input type="text" class="form-control alin" data-id="'+rowCount+'" name="cantidad_row['+ itemss +']" id="cantidad_row' + rowCount + '" value="' + value.cantidad + '" onkeyup="suma_row_table(this);" onkeypress="return isNumberKey(this);"/></td>'

		     + '<td align="right"><input type="text" class="form-control alin" data-id="'+rowCount+'" name="precio_row['+ itemss +']" id="precio_row' + rowCount + '" value="' + value.precio + '" onkeyup="suma_row_table_price(this);"/></td>'

             + '<td style="display:none;"><input type="text" class="form-control alin" data-id="'+rowCount+'" name="iva_row['+ itemss +']" id="iva_row' + rowCount + '" value="' + iva + '" /></td>'

		    + '<td style="width:130px" align="center"><input type="text" class="sin_border suma_total form-control alin2" name="sub_total_row['+ itemss +']" id="sub_total_row' + rowCount + '" value="' + sub_total + '" readonly/></td>'

		    + '<td style="width:130px; display:none;" align="center"><input type="text" class="sin_border suma_iva_agregar form-control alin2" name="sub_total_iva['+ itemss +']" id="sub_total_iva' + rowCount + '" value="' + sub_total_iva + '" readonly/></td>'

		     + '<td style="display:none;"><input type="number" name="id_producto_requisicion['+ itemss +']" id="id_producto_requisicion' + rowCount + '" value="' + value.id_producto_almacen + '"/></td>'

		     + '<td style="display:none;"><input type="number" name="id_items_items['+ itemss +']" id="id_items_items' + rowCount + '" value="' + value.id + '"/></td>'

             + '<td style="display:none;"><input type="number" name="id_requisicion_maestro['+ itemss +']" id="id_requisicion_maestro' + rowCount + '" value="' + id_req_alm.value + '"/></td>'

		     + '<td align="center">'
		                // + '<button class="OrderREMOVE" type="button">Editar</button>'
		     + '<button class="btn btn-danger btn-xs" type="button" onclick="myDeleteFunction(this);" value="'+rowCount+'" title="Eliminar"><i class="glyphicon glyphicon-trash"></i></button>'
		                // + '<button class="OrderDOWN" type="button">down</button>' 'data-qty' => $data->id
		     + '</td>'
             	+'</tr>')
					itemss++;
					rowCount++;

					
                 });

    //alert(itemss);
       
$('#item_data').val(itemss);
       suma_iva_agregar();
       suma_col_total();
       suma_col();


           }

      }); //fin ajaxcolonia  
}


</script>
{{--script Tabla agregar--}}
<script>
 
 $items_service = 1;

  function services_add()
    { //llave

        var servicio =  $('#servicio_name').val();
        var cantidad = $('#cantidad_servicio').val();
        var precio = $('#precio_servicio').val();
        var iva = $('#iva_servicio').val();
        var subtotal = 0;
        var sub_total_iva = 0;
        var item_data_service = $('#item_data_service').val();
         var rowCount = $('#TblOrderListServicio .ingData').length;

        if(iva == 0 || iva == '')
        {
           subtotal = $('#sub_total_servicio').val();
           sub_total_iva = 0;

        }else{

           iva_data = (iva/100);
           subtotal = $('#sub_total_servicio').val();
           sub_total_iva = eval(subtotal.replace(',','').replace(',','') * iva_data);

        }


           if(servicio != '')
            {

                if(cantidad != '')
                {

                   if(rowCount == 0)
                        {
                            items_service = 1;
                            rowCount++;
                        }else{
                          rowCount++;
                           items_service= item_data_service++;
                        }



                        var outHTML =
                          '<tr class="ingData" id="ingRowSer' + rowCount + '">'
                              + '<td align="center" style="display:none;"><input type="text" id="ids_row_ser'+rowCount+'" name="ids_row_ser['+items_service+']" value="' + items_service + '"></td>'

                              + '<td align="center" style="display:none;"><div id="id_row' + rowCount + '">' + items_service + '</div></td>'

                              + '<td><input type="text" class="form-control alin3" data-id="'+rowCount+'" name="servicio_row_ser['+ items_service +']" id="servicio_row_ser' + rowCount + '" value="' + servicio + '" /></td>'

                              + '<td><input type="text" class="form-control alin" data-id="'+rowCount+'" name="cantidad_row_ser['+ items_service +']" id="cantidad_row_ser' + rowCount + '" value="' + cantidad + '"  onkeypress="return isNumberKey(this);" onkeyup="suma_row_cantidad(this);"/></td>'

                              + '<td><input type="text" class="form-control alin" data-id="'+rowCount+'" name="precio_row_ser['+ items_service +']" id="precio_row_ser' + rowCount + '" value="' + precio + '"  onkeypress="return isNumberKey(this);" onkeyup="suma_row_precio(this);"/></td>'

                              + '<td><input type="text" class="form-control alin" data-id="'+rowCount+'" name="iva_row_ser['+ items_service +']" id="iva_row_ser' + rowCount + '" value="' + iva + '"  onkeypress="return isNumberKey(this);" onkeyup="suma_row_iva(this);"/></td>'

                              + '<td  align="right"><input type="text" class="form-control alin2 sin_border suma_total_servicio" data-id="'+rowCount+'" name="subtotal_row_ser['+ items_service +']" id="subtotal_row_ser' + rowCount + '" value="' + subtotal + '"  onkeypress="return isNumberKey(this);" readonly/></td>'

                              + '<td  align="right" style="display:none;"><input type="text" class="form-control alin2 sin_border suma_iva_servicio" data-id="'+rowCount+'" name="subtotal_iva_row_ser['+ items_service +']" id="subtotal_iva_row_ser' + rowCount + '" value="' + sub_total_iva + '"  onkeypress="return isNumberKey(this);"/></td>'

                              + '<td  align="right" style="display:none;"><input type="text" class="form-control alin2 sin_border" data-id="'+rowCount+'" name="id_requi_item_row['+ itemss_services +']" id="id_requi_item_row' + rowCount + '" value="0"  onkeypress="return isNumberKey(this);"/></td>'

                              + '<td style="display:none;"><input type="number" name="id_servicio_maestro['+ items_service +']" id="id_servicio_maestro' + rowCount + '" value="0" class="form-control alin2 sin_border"/></td>'

                            //  + '<td align="center"><div id="servicio' + rowCount + '">' + servicio + '</div></td>'
                              + '<td align="center">'
                                  // + '<button class="OrderREMOVE" type="button">Editar</button>'
                                  + '<button class="btn btn-danger btn-xs" type="button" onclick="myDeleteFunctionServicio(this);" value="'+rowCount+'" title="Eliminar"><i class="glyphicon glyphicon-trash"></i></button>'
                                  // + '<button class="OrderDOWN" type="button">down</button>' 'data-qty' => $data->id
                              + '</td>'
                          + '</tr>';

                           $('#TblOrderListServicio tr:last').after(outHTML);

                       $('#servicio_name').val("");
                       $('#cantidad_servicio').val("");
                       $('#precio_servicio').val("");
                        $('#iva_servicio').val("");
                        $('#sub_total_servicio').val("");

                        suma_sub_total();
                        suma_iva_total();
                        suma_col();


                }
                else
                {
                  bootbox.alert({ 
                        size: 'medium',
                        message: "<div class='row'> <div class='col-md-2'><img alt='image' class='img-circle' src='{{asset('img/alert_1.png')}}' width='50px'/></div><div class='col-md-10'><p class='text-primary' style='font-weight: bold; font-size: 15px; font-style: italic;'>ESCRIBA UNA CANTIDAD.</p></div></div>",
                         title: '<p class="text-primary" style="font-weight: bold; font-size: 16px; font-style: italic; color: #9F6000;">ALERTA</p>',
                        buttons: {
                                     'ok': {
                                        label: 'Aceptar',
                                        className: 'btn-primary pull-right'
                                    }
                                },
                        callback: function(){ /* your callback code */ }
                    });
                }

            }
            else
            {

              bootbox.alert({ 
                            size: 'medium',
                            message: "<div class='row'> <div class='col-md-2'><img alt='image' class='img-circle' src='{{asset('img/alert_1.png')}}' width='50px'/></div><div class='col-md-10'><p class='text-primary' style='font-weight: bold; font-size: 15px; font-style: italic;'>ESCRIBA UN NOMBRE AL SERVICIO.</p></div></div>",
                             title: '<p class="text-primary" style="font-weight: bold; font-size: 16px; font-style: italic; color: #9F6000;">ALERTA</p>',
                            buttons: {
                                         'ok': {
                                            label: 'Aceptar',
                                            className: 'btn-primary pull-right'
                                        }
                                    },
                            callback: function(){ /* your callback code */ }
                        });
            }





    }//fin llave

     function myDeleteFunctionServicio(renglon) 
    {
           
           $('#ingRowSer'+renglon.value).closest('tr').remove();
               suma_sub_total();
                        suma_iva_total();
                        suma_col();

    }

</script>

<script>
  
  function suma_data_servicio_cantidad(cantidad)
  {
      var qty = cantidad.value;
      var precio =  document.getElementById("precio_servicio").value;
      var subtotal = 0;

       subtotal = qty * precio;
       document.getElementById("sub_total_servicio").value = number_format(parseFloat(subtotal),2,'.',',');


  }

  function suma_data_servicio_precio(cantidad)
  {
      var qty = document.getElementById("cantidad_servicio").value;
      var precio = cantidad.value;
      var subtotal = 0;

       subtotal = qty * precio;
       document.getElementById("sub_total_servicio").value = number_format(parseFloat(subtotal),2,'.',',');
  }

  function suma_sub_total()
  {
    var sub = $('#subtotalPrice');
    var sub_total = 0;
      if(sub.text() != '' ){
        sub_total = sub.text();
      }else{
      	 sub.html("");
      	 sub_total = 0;
      }
        

        $(".suma_total_servicio").each(function(index, el) {
               
          var str = $(this).val();
             sub_total = sub_total + eval(str.replace(',','').replace(',',''));
        
          });

         sub.html ('$'+' '+number_format(sub_total,2,'.',','));
          document.getElementById("cantidad_subtotal").value = sub_total;
  }

  function suma_iva_total()
  {
     var iva_suma = $('#iva_suma');
     var iva_total = 0;
         

          if(iva_suma.text() != ''){
           iva_total = iva_suma.text().replace('$','');
         }else{
            iva_suma.html("");
         	iva_total = 0;

         }

       

       $(".suma_iva_servicio").each(function(index, el) {

          var str = $(this).val();
          iva_total = iva_total + eval(str.replace(',','').replace(',',''));
          });

       iva_suma.html ('$'+' '+number_format(iva_total,2,'.',','));
       document.getElementById("cantidad_ivasuma").value = iva_total;
  }
                        suma_sub_total();
                        suma_iva_total();
                        suma_col();

  function suma_row_cantidad(valor_text)
  {

        var data_id = $(valor_text).data('id');
       
        var cantidad_row = document.getElementById("cantidad_row_ser"+data_id).value;
        var precio_row = document.getElementById("precio_row_ser"+data_id).value;
        var iva_row = document.getElementById("iva_row_ser"+data_id).value;

      
        var SubTotalIva = 0;

       //  alert(cantidad_row);
   
         if(iva_row != 0 || iva_row != ''){

    
                iva_row = iva_row/100;

               general_row =  (parseFloat(cantidad_row)*parseFloat(precio_row));
               SubTotalIva = general_row * iva_row;
           }
           else{

              general_row =  (parseFloat(cantidad_row)*parseFloat(precio_row));

              SubTotalIva=0;

           }


        document.getElementById("subtotal_row_ser"+data_id).value = number_format(parseFloat(general_row),2,'.',',');
        document.getElementById("subtotal_iva_row_ser"+data_id).value = number_format(parseFloat(SubTotalIva),2,'.',',');

         suma_sub_total();
                        suma_iva_total();
                        suma_col();

  }

  function suma_row_precio(valor_text)
  {

        var data_id = $(valor_text).data('id');
       
        var cantidad_row = document.getElementById("cantidad_row_ser"+data_id).value;
        var precio_row = document.getElementById("precio_row_ser"+data_id).value;
        var iva_row = document.getElementById("iva_row_ser"+data_id).value;

      
        var SubTotalIva = 0;

         //alert(cantidad_row);
   
         if(iva_row != 0 || iva_row != ''){

    
                iva_row = iva_row/100;

               general_row =  (parseFloat(cantidad_row)*parseFloat(precio_row));
               SubTotalIva = general_row * iva_row;
           }
           else{

              general_row =  (parseFloat(cantidad_row)*parseFloat(precio_row));

              SubTotalIva=0;

           }


        document.getElementById("subtotal_row_ser"+data_id).value = number_format(parseFloat(general_row),2,'.',',');
        document.getElementById("subtotal_iva_row_ser"+data_id).value = number_format(parseFloat(SubTotalIva),2,'.',',');

         suma_sub_total();
                        suma_iva_total();
                        suma_col();

  }

  function suma_row_iva(valor_text)
  {

        var data_id = $(valor_text).data('id');
       
        var cantidad_row = document.getElementById("cantidad_row_ser"+data_id).value;
        var precio_row = document.getElementById("precio_row_ser"+data_id).value;
        var iva_row = document.getElementById("iva_row_ser"+data_id).value;

      
        var SubTotalIva = 0;

         //alert(cantidad_row);
   
         if(iva_row != 0 || iva_row != ''){

    
                iva_row = iva_row/100;

               general_row =  (parseFloat(cantidad_row)*parseFloat(precio_row));
               SubTotalIva = general_row * iva_row;
           }
           else{

              general_row =  (parseFloat(cantidad_row)*parseFloat(precio_row));

              SubTotalIva=0;

           }


        document.getElementById("subtotal_row_ser"+data_id).value = number_format(parseFloat(general_row),2,'.',',');
        document.getElementById("subtotal_iva_row_ser"+data_id).value = number_format(parseFloat(SubTotalIva),2,'.',',');

         suma_sub_total();
                        suma_iva_total();
                        suma_col();

  }

</script>

<script>

  var itemss_services = 1;

function view_requisition_services(id_req_servicio)
{

      var table_invoice_items_services = $("#data_table_service");
      var ruta = "{{URL('compras/items/services')}}/"+id_req_servicio.value+"";
      var item_data_service = $('#item_data_service').val();

        $.ajax({
          url: ruta,
          dataType: "JSON",
          type: "GET",
          success: function(res){
             console.log(res);
           var rowCount = $('#TblOrderListServicio .ingData').length;
           var precio = 0;
           var iva = 0;
           var subtotal = 0;
           var sub_total_iva = 0;


             if(rowCount == 0)
              {
                 itemss_services = 1;
                  rowCount++;
              }else{
                rowCount++;
                 itemss_services = item_data_service++;
              }

            $(res).each(function(key, value) {

               table_invoice_items_services.append( '<tr class="ingData" id="ingRowSer' + rowCount + '">'
                              + '<td align="center" style="display:none;"><input type="text" id="ids_row_ser'+rowCount+'" name="ids_row_ser['+itemss_services+']" value="' + itemss_services + '"></td>'

                              + '<td align="center" style="display:none;"><div id="id_row' + rowCount + '">' + itemss_services + '</div></td>'

                              + '<td><input type="text" class="form-control alin3" data-id="'+rowCount+'" name="servicio_row_ser['+ itemss_services +']" id="servicio_row_ser' + rowCount + '" value="' + value.nombre_servicio + '" /></td>'

                              + '<td><input type="text" class="form-control alin" data-id="'+rowCount+'" name="cantidad_row_ser['+ itemss_services +']" id="cantidad_row_ser' + rowCount + '" value="' + value.cantidad + '"  onkeypress="return isNumberKey(this);" onkeyup="suma_row_cantidad(this);"/></td>'

                              + '<td><input type="text" class="form-control alin" data-id="'+rowCount+'" name="precio_row_ser['+ itemss_services +']" id="precio_row_ser' + rowCount + '" value="' + precio + '"  onkeypress="return isNumberKey(this);" onkeyup="suma_row_precio(this);"/></td>'

                              + '<td><input type="text" class="form-control alin" data-id="'+rowCount+'" name="iva_row_ser['+ itemss_services +']" id="iva_row_ser' + rowCount + '" value="' + iva + '"  onkeypress="return isNumberKey(this);" onkeyup="suma_row_iva(this);"/></td>'

                              + '<td  align="right"><input type="text" class="form-control alin2 sin_border suma_total_servicio" data-id="'+rowCount+'" name="subtotal_row_ser['+ itemss_services +']" id="subtotal_row_ser' + rowCount + '" value="' + subtotal + '"  onkeypress="return isNumberKey(this);" readonly/></td>'

                              + '<td  align="right" style="display:none;"><input type="text" class="form-control alin2 sin_border suma_iva_servicio" data-id="'+rowCount+'" name="subtotal_iva_row_ser['+ itemss_services +']" id="subtotal_iva_row_ser' + rowCount + '" value="' + sub_total_iva + '"  onkeypress="return isNumberKey(this);"/></td>'

                              + '<td style="display:none;" align="right" ><input type="text" class="form-control alin2 sin_border" data-id="'+rowCount+'" name="id_requi_item_row['+ itemss_services +']" id="id_requi_item_row' + rowCount + '" value="' + value.id + '"  onkeypress="return isNumberKey(this);"/></td>'

                              + '<td style="display:none;"><input type="number" name="id_servicio_maestro['+ itemss_services +']" id="id_servicio_maestro' + rowCount + '" value="'+ id_req_servicio.value +'" class="form-control alin2 sin_border"/></td>'

                            //  + '<td align="center"><div id="servicio' + rowCount + '">' + servicio + '</div></td>'
                              + '<td align="center">'
                                  // + '<button class="OrderREMOVE" type="button">Editar</button>'
                                  + '<button class="btn btn-danger btn-xs" type="button" onclick="myDeleteFunctionServicio(this);" value="'+rowCount+'" title="Eliminar"><i class="glyphicon glyphicon-trash"></i></button>'
                                  // + '<button class="OrderDOWN" type="button">down</button>' 'data-qty' => $data->id
                              + '</td>'
                          + '</tr>')

                    itemss_services++;
                    rowCount++;

             });

        $('#item_data_service').val(itemss_services);
            suma_sub_total();
            suma_iva_total();
            suma_col();

         }
 }); //fin ajaxcolonia  

}

</script>