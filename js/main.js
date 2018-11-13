let Clients = {
        id: "",
        name: "",
        age: "",
        city: "",
        getClient: function (object) {
                for (const key in object) {
                        if (object.hasOwnProperty(key)) {
                                this[key] = object[key];
                        }
                }

        }
};



let htmlManager = {
        thead: document.getElementById('myTable'),
        getTr: function (object) {
                //create new tr element
                let tr = document.createElement('tr');
                htmlManager.thead.appendChild(tr);
        },

        getTdid: function (object) {
                //create new td in the table
                let tr = document.createElement('tr');
                htmlManager.thead.appendChild(tr);
                tdId = document.createElement('td');
                tdId.innerHTML = object[1].id;
                tr.appendChild(tdId);
        },

        gettdName: function (object) {
                let tr = document.createElement('tr');
                htmlManager.thead.appendChild(tr);
                let tdName = document.createElement('td');
                tdName.innerHTML = object[1].name;
                tr.appendChild(tdName);
        },

        getTdage: function (object) {
                let tr = document.createElement('tr');
                htmlManager.thead.appendChild(tr);
                let tdAge = document.createElement('td');
                tdAge.innerHTML = object[1].age;
                tr.appendChild(tdAge);

        },

        getTdCity: function (object) {
                let tr = document.createElement('tr');
                htmlManager.thead.appendChild(tr);
                let tdCity = document.createElement('td');
                tdCity.innerHTML = object[1].city;
                tr.appendChild(tdCity);
        }



};

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
                let myObject = JSON.parse(this.responseText);
                htmlManager.getTdid(myObject);
                htmlManager.gettdName(myObject);
                htmlManager.getTdage(myObject);
                htmlManager.getTdCity(myObject);
                // htmlManager.getTr(myObject);


        }
}
xhttp.open("GET", "infos.json", true);
xhttp.send();