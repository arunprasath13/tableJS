document.getElementById('addRowForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    console.log(formData)
    var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    console.log(table)
    var newRow = table.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    cell1.innerHTML = formData.get('name');
    cell2.innerHTML = formData.get('email');
    cell3.innerHTML = formData.get('age');
    this.reset();
});
