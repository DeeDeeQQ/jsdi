function Person({name, surname, age}) {
    this.name = name;
    this.surname = surname;
    this.age = age;

    if(!Person.list)
    {
        Person.list = [];
    }
    Person.list.push(this);
}

function get()
{
    var err = document.getElementById('error');
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var age = document.getElementById("age").value;

    if(name&&surname&&age){
        err.innerHTML = '';
        new Person({
            name: name,
            surname: surname,
            age: age,
        });
        return
    }
    err.innerHTML = 'Please input all values';
    return
}


function show()
{
    if(!Person.list){
        var err = document.getElementById('error');
        err.innerHTML = 'Please input persons';
        return
    }
    Person.list.forEach(function(item, i) {
        var table = document.getElementById("table")
        var tr = document.createElement('tr');
        table.appendChild(tr);
        var tdname = document.createElement('td');
        var tdsname = document.createElement('td');
        var tdage = document.createElement('td');
        tdname.innerText = item['name'];
        tdsname.innerText = item['surname'];
        tdage.innerText = item['age'];
        tr.appendChild(tdname);
        tr.appendChild(tdsname);
        tr.appendChild(tdage);
    })

}