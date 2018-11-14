
let htmlManager = {

        thead: document.getElementById('myTable'),

        createTable: function (object) {

                for (let i = 0; i < object.length; i++) {

                        //create new td in the table
                        let tr = document.createElement('tr');
                        htmlManager.thead.appendChild(tr);
                        tdId = document.createElement('td');
                        tdId.innerHTML = object[i].id;
                        tr.appendChild(tdId);
                        let tdName = document.createElement('td');
                        tdName.innerHTML = object[i].name;
                        tr.appendChild(tdName);
                        let tdAge = document.createElement('td');
                        tdAge.innerHTML = object[i].age;
                        tr.appendChild(tdAge);
                        let tdCity = document.createElement('td');
                        tdCity.innerHTML = object[i].city;
                        tr.appendChild(tdCity);



                }
        }



};

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
                let myObject = JSON.parse(this.responseText);
                htmlManager.createTable(myObject);
               


        }
}
xhttp.open("GET", "infos.json", true);
xhttp.send();
