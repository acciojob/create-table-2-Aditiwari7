function createTable() {
    //Write your code here
	var rn = prompt("Input number of rows");
	var cn = prompt("Input number of columns");
	let r = parseInt(rn);
	let c = parseInt(cn);

	var table = document.getElementById("myTable");

	table.innerHTML = "";

	for (let i = 0; i < r; i++) {
		let newRow = table.insertRow(i);
		for (let i = 0; i < c; i++) {
			let newCell = newCol.insertCell(j);
			newCell.innerHTML = `Row-${i} Column-${j}`;
		}
	}
}
