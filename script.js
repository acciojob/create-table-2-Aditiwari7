function createTable() {
    //Write your code here
	var rn = prompt("Input number of rows")
	var cn = prompt("Input number of columns")
	let r = parseInt(rn);
	let c = parseInt(cn);

	let table = document.getElementById("myTable");

	// table.innerHTML = "";

	for (let i = 0; i < r; i++) {
		let Row = table.insertRow();
		for (let j = 0; j < c; j++) {
			let Cell = Row.insertCell();
			Cell.innerHTML = `Row-${i} Column-${j}`;
		}
	}
}
