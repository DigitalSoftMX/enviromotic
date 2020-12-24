function Item(id, nombre, telephone, emails, cargo, depto) {
   
    this.id= ko.observable(id);
    this.nombre = ko.observable(nombre);
    this.telephone = ko.observable(telephone);
    this.emails = ko.observable(emails);
    this.cargo = ko.observable(cargo);
    this.depto = ko.observable(depto);
}

var viewModel = {
    items: ko.observableArray([]),
    filter: ko.observable(""),
    search: ko.observable(""),
    addItem: function() {
        this.items.push(new Item("", "", "", "", "", ""));
    },
    removeItem: function(item) {
        this.items.remove(item);
    }
};
//ko.utils.arrayFilter - filter the items using the filter text
viewModel.filteredItems = ko.dependentObservable(function() {
    var filter = this.filter().toLowerCase();
    if (!filter) {
        return this.items();
    } else {
        return ko.utils.arrayFilter(this.items(), function(item) {
            return ko.utils.stringStartsWith(item.first_name().toLowerCase(), filter);
        });
    }
}, viewModel);

//ko.utils.arrayFirst - identify the first matching item by name
viewModel.firstMatch = ko.dependentObservable(function() {
    var search = this.search().toLowerCase();
    if (!search) {
        return null;
    } else {
        alert('busqueda con elementos');
        return ko.utils.arrayFirst(this.filteredItems(), function(item) {
            return ko.utils.stringStartsWith(item.first_name().toLowerCase(), search);
        });
    }
}, viewModel);

//ko.utils.arrayMap - prepare items to be sent back to server
viewModel.mappedItems = ko.dependentObservable(function() {
    var items = ko.toJS(this.items);
    return ko.utils.arrayMap(items, function(item) {
        return item;
    });
}, viewModel);

var JSONdataFromServer = '[{"id":"", "nombre":"", "telephone":"", "emails":"", "cargo":"", "depto":""}]';
if (contactsJson) {
    JSONdataFromServer = JSON.stringify(contactsJson);
};
//parse into an object
var dataFromServer = ko.utils.parseJson(JSONdataFromServer);

//do some basic mapping (without mapping plugin)
var mappedData = ko.utils.arrayMap(dataFromServer, function(item) {
    return new Item(item.id, item.nombre, item.telephone, item.emails, item.cargo, item.depto);
});

viewModel.items(mappedData);

ko.applyBindings(viewModel);