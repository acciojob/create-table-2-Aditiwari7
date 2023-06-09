function createTable() {
    //Write your code here
	var rn = parseInt(prompt("Input number of rows"));
	var cn = parseInt(prompt("Input number of columns"));

	var table = document.getElementById("myTable");

	table.innerHTML = "";

	for (let i = 0; i < rn; i++) {
		var newRow = table.insertRow(i);
		for (let i = 0; i < cn; i++) {
			var newCell = newCol.insertCell(j);
			newCell.innerHTML = "Row-"+i+"Column-"+j:
		}
	}
}
