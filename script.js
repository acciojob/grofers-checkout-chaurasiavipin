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
