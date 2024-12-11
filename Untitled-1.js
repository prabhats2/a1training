// Replace with your Google Sheet ID and API Key
const SHEET_ID = "1AX4Ch5eiVy1zdmUdnbcIlU6h5ZX_lvopwsw70Uuba8w"; // Example: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
const API_KEY = "AIzaSyBt5jMU9Sxnlxq50cZPrk6Jl8aCU-1iwTU";
const RANGE = "Sheet1"; // Name of the sheet/tab in your Google Sheet

async function fetchSheetData() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayData(data.values);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayData(rows) {
  if (!rows || rows.length === 0) return;

  const tableHeader = document.getElementById("headerRow");
  const tableBody = document.getElementById("tableBody");

  // Populate table headers
  rows[0].forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    tableHeader.appendChild(th);
  });

  // Populate table rows
  rows.slice(1).forEach((row) => {
    const tr = document.createElement("tr");
    row.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      tr.appendChild(td);
    });
    tableBody.appendChild(tr);
  });
}

// Fetch and display the data
fetchSheetData();
