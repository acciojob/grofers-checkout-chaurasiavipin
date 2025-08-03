function calculateTotal() {
  const priceElements = document.querySelectorAll(".prices");
  let total = 0;

  priceElements.forEach(prices => {
    const value = parseFloat(prices.textContent);
    if (!isNaN(value)) {
      total += value;
    }
  });

  // Remove existing total row if already added
  const oldRow = document.getElementById("totalRow");
  if (oldRow) {
    oldRow.remove();
  }

  const newRow = document.createElement("tr");
  newRow.id = "totalRow";

  const totalCell = document.createElement("td");
  totalCell.colSpan = 6;
  totalCell.textContent = "Total Price: ₹" + total;

  newRow.appendChild(totalCell);

  // Append to table
  const table = document.querySelector("table");
  table.appendChild(newRow);
}

function calculateTotal() {
  // Step 1: Get all price elements
  const priceElements = document.querySelectorAll(".price");

  // Step 2: Initialize total to 0
  let total = 0;

  // Step 3: Loop through each price element
  priceElements.forEach(price => {
    // Get the text value and convert to number
    total += parseFloat(price.textContent);
  });

  // Step 4: Create a new row
  const table = document.getElementById("groceryTable");
  const newRow = document.createElement("tr");

  // Step 5: Create one cell and set colspan to 2
  const cell = document.createElement("td");
  cell.colSpan = 2; // so it takes full row
  
  cell.textContent = `total price ₹${total}`;

  // Step 6: Add the cell to the row and row to the table
  newRow.appendChild(cell);
  table.appendChild(newRow);
}

