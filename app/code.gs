let SPREADSHEET_ID = "Google Sheets ID";
let SHEET_NAME = "Google Sheets Table Name";

function doGet(request) {
  let callback = request.parameters.jsonp;
  let range = SpreadsheetApp.openById(SPREADSHEET_ID)
    .getSheetByName(SHEET_NAME)
    .getDataRange();
  let json = callback + "(" + Utilities.jsonStringify(range.getValues()) + ")";

  return ContentService.createTextOutput(json).setMimeType(
    ContentService.MimeType.JAVASCRIPT
  );
}
