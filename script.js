function createTable() {
    //Write your code here
	var rn = prompt("Input number of rows");
	var cn = prompt("Input number of columns");

	var table = document.getElementById("myTable");

	table.innerHTML = "";

	for (let i = 0; i < parseInt(rn); i++) {
		let newRow = table.insertRow(i);
		for (let i = 0; i < parseInt(cn); i++) {
			let newCell = newCol.insertCell(j);
			newCell.innerHTML = `Row-${i} Column-${j}`;
		}
	}
}
