const submitButton = document.getElementById("submit-data");
const emptyTableButton = document.getElementById("empty-table");

submitButton.addEventListener("click", function () {
  var table = document.getElementById("data-table");
  var status = 0;
  for (let i = 0, row2; (row2 = table.rows[i]); i++) {
    console.log(i);
    if (
      document.getElementById("input-username").value ===
      row2.cells.item(0).innerHTML
    ) {
      console.log("spotattu");
      row2.cells.item(1).innerHTML = document.getElementById(
        "input-email"
      ).value;
      row2.cells.item(2).innerHTML = document.getElementById(
        "input-address"
      ).value;
      let value = "";
      if (document.getElementById("input-admin").checked === true) {
        value = "X";
      } else {
        value = "-";
      }
      row2.cells.item(3).innerHTML = value;
      console.log(document.getElementById("input-admin").checked);
      status = 1;
    }
  }

  if (status === 0) {
    // New row
    var row = table.insertRow(-1);
    // New elements
    let username = row.insertCell(0);
    let email = row.insertCell(1);
    let address = row.insertCell(2);
    let admin = row.insertCell(3);
    // Data to the new elements from the form
    username.innerHTML = document.getElementById("input-username").value;
    email.innerHTML = document.getElementById("input-email").value;
    address.innerHTML = document.getElementById("input-address").value;
    admin.innerHTML = document.getElementById("input-admin").value;

    if (document.getElementById("input-admin").checked === true) {
      admin.innerHTML = "X";
    } else {
      admin.innerHTML = "-";
    }
    console.log(document.getElementById("input-admin").checked);
  }
});

emptyTableButton.addEventListener("click", function () {
  // Deleting all but the header row
  var table = document.getElementById("data-table");
  var rowCount = table.rows.length;
  var HeaderRowCount = 1;
  for (i = HeaderRowCount; i < rowCount; i++) {
    table.deleteRow(HeaderRowCount);
  }
});
