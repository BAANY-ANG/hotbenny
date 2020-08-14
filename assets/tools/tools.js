function init()
{
    var database = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe", "username":"test", "password":"test" },' +
    '{ "firstName":"Anna" , "lastName":"Smith", "username":"Anna", "password":"Smith" },' +
    '{ "firstName":"Benny" , "lastName":"Yang", "username":"Anna", "password":"Smith" },' +
    '{ "firstName":"Ben" , "lastName":"10", "username":"Anna", "password":"Smith" },' +
    '{ "firstName":"Admin" , "lastName":"Admin", "username":"Anna", "password":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones", "username":"admin", "password":"password" } ]}';
    return database;
}

function random()
{
    return Math.floor(Math.random() * 6);
}

function valid_username(username)
{
    retValue = false;
    if (username)
    {
        retValue = false;
    }
    else
    {
        retValue = true;
    }
    return retValue;
}

function valid_password(password="")
{
    retValue = false;
    if (password)
    {
        retValue = false;
    }
    else
    {
        retValue = true;
    }
    return retValue;
}

function login() {
    var database = init();
    var json = JSON.parse(database);
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(valid_username(username) && valid_password(password))
    {
        var rand = random();
        document.getElementById('welcome').innerHTML = "Welcome " + json.employees[rand].firstName + " " + json.employees[rand].lastName;
        document.getElementById('Error').innerHTML = "";
    }
    else
    {
        document.getElementById('Error').innerHTML = "Please enter a valid password or username";
        document.getElementById('welcome').innerHTML = "";
    }
}