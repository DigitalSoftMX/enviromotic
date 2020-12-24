function Item(id, id_producto_almacen, codigoBarras, unidad_medida, presentacion, contenido, cantidad, precio, total, id_producto_requisicion) {

    this.id = ko.observable(id);
    this.id_producto_almacen = ko.observable(id_producto_almacen);
    this.codigoBarras = ko.observable(codigoBarras);
    this.unidad_medida = ko.observable(unidad_medida);
    this.presentacion = ko.observable(presentacion);
    this.contenido = ko.observable(contenido);
    this.cantidad = ko.observable(cantidad);
    this.precio = ko.observable(precio);
    this.total = ko.observable(total);
    this.id_producto_requisicion = ko.observable(id_producto_requisicion);

}

var viewModel = {
      
    items:  ko.observableArray([]),
    filter: ko.observable(""),
    search: ko.observable(""),
  
    addItem: function() {

        this.items.push(new Item("", "", "", "", "", "","","","",""));

    },

    removeItem: function(item) {

         console.log(ko.toJSON({ id:item.id }));
         var  id_obj = item.id();
        // alert(id_obj);
         var token = $("#token").val();

                $.ajax({
                      url:"../requisicion/delete_item/"+id_obj+"",
                      headers: {'X-CSRF-TOKEN': token},
                     dataType: 'JSON',
                     type:'GET',
                    success: function(response){
                      console.log(response);
                             // window.location.replace(redirect);
                             
                       }
                  });
       
        this.items.remove(item);
    },


     permissionChanged: function(item) {
      
        console.log(item.id_producto_almacen._latestValue);
        console.log(item);

        var k = $(event.target).attr("data-id"); 

     //  alert(k);

        var id_items = item.id_producto_almacen._latestValue;

          // var solicitud = $("#solicitud").val();
//alert(solicitud);
     
        // if(solicitud == 0)
        // {
           //var url_action ="../orden_item/search_products_items/"+id_items+"";
        // }else{
        //   if(solicitud == 1){
            var url_action ="orden_item/search_products_items/"+id_items+"";
        //   }
        // }

                $.ajax({
                     url:url_action,
                     dataType: 'JSON',
                     type:'GET',
                    success: function(response){
                      console.log(response);
                           // window.location.replace(redirect);
                        
                             $('#codigoBarras'+k).val(response.codigoBarras);
                             $('#unidad_medida'+k).val(response.descripcionunidad);
                             $('#presentacion'+k).val(response.descripciotipo);
                             $('#id_producto_requisicion'+k).val(response.cat_producto_id);

                            // $('#clave_producto').focus();
                              foco(k);
                        }
                  });

    }


};

  function foco(row)
{

      e = jQuery.Event("change");
      e.which = 9; //enter key
      jQuery('#codigoBarras'+row).trigger(e);
      jQuery('#unidad_medida'+row).trigger(e);
      jQuery('#presentacion'+row).trigger(e);
      jQuery('#id_producto_requisicion'+row).trigger(e);

}


//ko.utils.arrayFilter - filter the items using the filter text
viewModel.filteredItems = ko.dependentObservable(function() {
    var filter = this.filter().toLowerCase();
    if (!filter) {
        return this.items();
    } else {
        return ko.utils.arrayFilter(this.items(), function(item) {
            return ko.utils.stringStartsWith(item.name().toLowerCase(), filter);
        });
    }
}, viewModel);


//ko.utils.arrayFirst - identify the first matching item by name
viewModel.firstMatch = ko.dependentObservable(function() {
    var search = this.search().toLowerCase();
    if (!search) {
        return null;
    } else {
        return ko.utils.arrayFirst(this.filteredItems(), function(item) {
            return ko.utils.stringStartsWith(item.name().toLowerCase(), search);
        });
    }
}, viewModel);


//ko.utils.arrayMap - prepare items to be sent back to server
viewModel.mappedItems = ko.dependentObservable(function() {
    var items = ko.toJS(this.items);
    return ko.utils.arrayMap(items, function(item) {
        //delete item.priceWithTax;
        return item;
    });
}, viewModel);

//a JSON string that we got from the server that wasn't automatically converted to an object

var JSONdataFromServer = '[{"id":"", "id_producto_almacen":"", "codigoBarras":"", "unidad_medida":"", "presentacion":"", "contenido":"", "cantidad":"", "id_producto_requisicion":"", "precio":"", "total":""}]';
if (requestJson) {
    JSONdataFromServer = JSON.stringify(requestJson);

};


//parse into an object
var dataFromServer = ko.utils.parseJson(JSONdataFromServer);

//do some basic mapping (without mapping plugin)
var mappedData = ko.utils.arrayMap(dataFromServer, function(item) {

    return new Item(item.id, item.id_producto_almacen, item.codigoBarras, item.unidad_medida, item.presentacion, item.contenido, item.cantidad, item.id_producto_requisicion, item.precio, item.total);

});


viewModel.items(mappedData);
ko.applyBindings(viewModel);