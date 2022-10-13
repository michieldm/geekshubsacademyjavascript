const Electrodomésticos = [
  new Television([200, "rojo", "A", 4], 50, true),
  new Television([400, "rojo", "C", 4], 10, true),
  new Television([350, "rojo", "E", 40], 10, false),
  new Television([200, "rojo", "C", 4], 10, true),
  new Electrodoméstico(50, "rojo", "F", 4),
  new Electrodoméstico(1000, "rojo", "D", 4),
  new Electrodoméstico(100, "rojo", "C", 4),
  new Lavadora([200, "azul", "A", 4], 35),
  new Lavadora([200, "gris", "A", 4], 35),
  new Lavadora([150, "rojo", "D", 50], 35),
];
console.log(Electrodomésticos);
objectTypes = [];
for (let i = 0; i < Electrodomésticos.length; i++) {
  objectTypes.push(Electrodomésticos[i].constructor.name);
}
objectTypes = [...new Set(objectTypes)];
console.log(objectTypes);

for (let i = 0; i < objectTypes.length; i++) {
  // Find a <table> element with id="myTable":
  var table = document.getElementById("pricing-list");

  // Create an empty <tr> element and add it to the 1st position of the table:
  var row = table.insertRow(table.rows.length);

  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  // Add some text to the new cells:
  cell1.innerHTML = objectTypes[i];
  cell2.innerHTML = getQuantity(objectTypes[i], Electrodomésticos);
  cell3.innerHTML = getTotalPrice(objectTypes[i], Electrodomésticos)+"€";
}

function getTotalPrice(type, objects) {
  let total = 0;
  for (let i = 0; i < objects.length; i++) {
    if(objects[i].constructor.name === type  || Object.getPrototypeOf(objects[i].constructor).name === type) {
      total += objects[i].getPrecioFinal()
    }
  }
  return total;
}

function getQuantity(type, objects) {
  let total = 0;
  for (let i = 0; i < objects.length; i++) {
    if(objects[i].constructor.name === type || Object.getPrototypeOf(objects[i].constructor).name === type) {
      total++
    }
  }
  return total;
}


