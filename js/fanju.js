function byId(id){
	return typeof (id) === "string" ? document.getElementById(id):id;
}

var cycles=byId("cycle").getElementsByTagName("button"),
	pics=byId("fj").getElementsByClassName("fanju-table");

for (var i = 0; i < cycles.length; i++) {
	cycles[i].onmouseover = changezhouqi;
}

function changezhouqi(){
	for (var i = 0; i < cycles.length; i++) {
		if (cycles[i] === this) {
			cycles[i].className = "active";
			pics[i].className = "fanju-table active";
		} else {
			cycles[i].className = "cycle-item";
			pics[i].className = "fanju-table";
		}
		
	}
}