let Clients = {
    id: "",
    name: "",
    age: "",
    city: "",
    getClient: function(object){
        this.id = object.id
        this.name = object.name
        this.age = object.age
        this.city = object.city
    } 
};

function createTable(){

        let thead = document.getElementById('myTable');
        //create new tr element
        let tr = document.createElement('tr');
        thead.appendChild(tr);
        //create new td in the table
        let td = document.createElement('td');
        tr.appendChild(td);
}

let htmlManager = {


}


    

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
     let myObject = JSON.parse(this.responseText);
     

  }
}
xhttp.open("GET", "../js/infos.json", true);
xhttp.send();