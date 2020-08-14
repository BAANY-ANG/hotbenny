function init()
{
    var database = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe", "username":"test", "password":"test" },' +
    '{ "firstName":"Anna" , "lastName":"Smith", "username":"Anna", "password":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones", "username":"admin", "password":"password" } ]}';
    return database;
}

function login() {
    var database = init();
    var json = JSON.parse(database);

    document.getElementById('welcome').innerHTML = "Welcome " + json.employees[1].firstName + " " + json.employees[1].lastName; 
}