function calculateTotal() {
  // Get all price elements
  const priceElements = document.querySelectorAll(".prices");
  let total = 0;

  // Calculate total by summing all prices
  priceElements.forEach(price => {
    total += parseFloat(price.textContent);
  });

  // Create a new row
  const newRow = document.createElement("tr");
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2; // Make the total cell span across both columns
  totalCell.textContent = "Total Price: ₹" + total;

  // Append the cell to the row, and row to the table
  newRow.appendChild(totalCell);
  document.getElementById("grocery-table").appendChild(newRow);
}
