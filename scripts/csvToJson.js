const fs = require('fs');
const path = require('path');

function convertCsvToJson(csvString) {
  const rows = csvString.split(/\r?\n/);

  // Get the headers from the first row
  const headers = rows[0].split(";");

  const jsonData = [];

  // Loop through the remaining rows (excluding the header row)
  for (let i = 1; i < rows.length; i++) {
    const rowValues = rows[i].split(";");
    const obj = {};

    // Loop through the headers and create key-value pairs for the JSON object
    for (let j = 0; j < headers.length; j++) {
      const value = rowValues[j].trim();
      obj[headers[j]] = value;
    }

    jsonData.push(obj);
  }

  return jsonData;
}

const csvFilePath = path.join(__dirname, '..', 'src', 'data', 'newsSource.csv');
const outputPath = path.join(__dirname, '..', 'src', 'data', 'newsSource.json')

fs.readFile(csvFilePath, "utf8", (err, csvData) => {
  if (err) {
    console.error("Error reading CSV file:", err);
    return;
  }

  const jsonData = convertCsvToJson(csvData.trim());

  try {
    const jsonString = JSON.stringify(jsonData, null, 2);
    fs.writeFileSync(outputPath, jsonString);

  } catch (error) {
    throw new Error('Error writing to file:', error);
  }
});
