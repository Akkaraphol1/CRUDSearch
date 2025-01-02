// Google Apps Script code
const sheetName = 'Sheet1';
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheetByName(sheetName);

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index');
}


// Function to retrieve all data from Google Sheet
function getData() {
  const data = sheet.getDataRange().getValues();
  return data;
}

// Function to add a new record to Google Sheet
function addData(name, age, email) {
  const lastRow = sheet.getLastRow();
  sheet.appendRow([lastRow, name, age, email]);
  return 'Record added successfully';
}

// Function to update a record in Google Sheet
function updateData(id, name, age, email) {
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] == id) {
      sheet.getRange(i + 1, 2).setValue(name);
      sheet.getRange(i + 1, 3).setValue(age);
      sheet.getRange(i + 1, 4).setValue(email);
      return 'Record updated successfully';
    }
  }
  return 'Record not found';
}

// Function to delete a record in Google Sheet
function deleteData(id) {
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] == id) {
      sheet.deleteRow(i + 1);
      return 'Record deleted successfully';
    }
  }
  return 'Record not found';
}


