const submitButton = document.getElementById("submit-data");
const emptyTableButton = document.getElementById("empty-table");

submitButton.addEventListener("click", function () {
  var table = document.getElementById("data-table");
  var status = 0;
  for (let i = 0, row2; (row2 = table.rows[i]); i++) {
    if (
      document.getElementById("input-username").value ===
      row2.cells.item(0).innerHTML
    ) {
      row2.cells.item(1).innerHTML =
        document.getElementById("input-email").value;
      row2.cells.item(2).innerHTML =
        document.getElementById("input-address").value;
      let value = "";
      if (document.getElementById("input-admin").checked === true) {
        value = "X";
      } else {
        value = "-";
      }
      row2.cells.item(3).innerHTML = value;

      let imgsrc = document.getElementById("input-image").files[0];
      if (typeof imgsrc !== "undefined") {
        urli = URL.createObjectURL(imgsrc);
        var img = document.createElement("img");
        img.src = urli;
        img.width = 64;
        img.height = 64;
        var e = this.firstElementChild;
        row2.deleteCell(4);
        row2.insertCell(4);
        row2.cells.item(4).appendChild(img);
      } else {
        console.log("undefined?");
        console.log(imgsrc);
      }
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
    let picture = row.insertCell(4);
    // Data to the new elements from the form
    username.innerHTML = document.getElementById("input-username").value;
    email.innerHTML = document.getElementById("input-email").value;
    address.innerHTML = document.getElementById("input-address").value;
    if (document.getElementById("input-admin").checked === true) {
      admin.innerHTML = "X";
    } else {
      admin.innerHTML = "-";
    }
    let imgsrc = document.getElementById("input-image").files[0];
    if (typeof imgsrc !== "undefined") {
      urli = URL.createObjectURL(imgsrc);
      var img = document.createElement("img");
      img.src = urli;
      img.width = 64;
      img.height = 64;
      picture.appendChild(img);
    } else {
      console.log("undefined?");
      console.log(imgsrc);
    }
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
