class Fridge{
    constructor(color, brand, model, price){
        this.color=color;
        this.brand=brand;
        this.model=model;
    }

    show(){
        let html = "";
		html += "<tr>";
		html += "<td>" + this.color + "</td>";
		html += "<td>" + this.brand + "</td>";
		html += "<td>" + this.model + "</td>";
		html += "</tr>";
		return html;
    }
}

let array = [
    new Fridge('Red', 'VW', 'Tiguan'),
    new Fridge('Black','Toyota', 'Corolla'),
    new Fridge('Blue', 'Toyota', 'Prius'),
    new Fridge('Yellow', 'Audi', 'Q7')
]

function run(){

	var html = "<table class='b-table'>";
	html += "<tr class='b-table__th'><td>Колір</td><td>Марка</td><td>Модель</td></tr>"
	for (i=0;i<array.length;i++){
		html += array[i].show();
	}
	html += "</table>";
	document.getElementById("result").innerHTML = html;
}