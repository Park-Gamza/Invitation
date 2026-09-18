const SHEET_NAME = 'Guestbook';
const MAX_MESSAGES = 100;

function doGet(event) {
  try {
    const sheet = getGuestbookSheet_();
    const lastRow = sheet.getLastRow();
    if (lastRow < 2) return output_({ ok: true, messages: [] }, event);

    const startRow = Math.max(2, lastRow - MAX_MESSAGES + 1);
    const rows = sheet.getRange(startRow, 1, lastRow - startRow + 1, 4).getValues();
    const messages = rows.reverse().map(function (row) {
      return {
        createdAt: row[0] instanceof Date ? row[0].toISOString() : String(row[0]),
        name: String(row[1]),
        message: String(row[2]),
        lang: String(row[3] || 'ko'),
      };
    });
    return output_({ ok: true, messages: messages }, event);
  } catch (error) {
    return output_({ ok: false, error: String(error.message || error) }, event);
  }
}

function doPost(event) {
  const lock = LockService.getScriptLock();
  try {
    const params = event && event.parameter ? event.parameter : {};
    if (String(params.website || '').trim()) return json_({ ok: false, error: 'Invalid submission' });

    const name = safeCell_(params.name, 20);
    const message = safeCell_(params.message, 300);
    const lang = params.lang === 'ja' ? 'ja' : 'ko';
    if (!name || !message) return json_({ ok: false, error: 'Name and message are required' });

    lock.waitLock(10000);
    getGuestbookSheet_().appendRow([new Date(), name, message, lang]);
    SpreadsheetApp.flush();
    return json_({ ok: true });
  } catch (error) {
    return json_({ ok: false, error: String(error.message || error) });
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }
}

function getGuestbookSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (!spreadsheet) throw new Error('Run this from an Apps Script project linked to a spreadsheet.');
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['createdAt', 'name', 'message', 'lang']);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function safeCell_(value, maxLength) {
  let text = String(value || '').trim().slice(0, maxLength);
  // Prevent user input from being evaluated as a spreadsheet formula.
  if (/^[=+\-@]/.test(text)) text = "'" + text;
  return text;
}

function json_(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function output_(data, event) {
  const prefix = event && event.parameter ? String(event.parameter.prefix || '') : '';
  if (/^[A-Za-z_$][0-9A-Za-z_$]*$/.test(prefix)) {
    return ContentService.createTextOutput(prefix + '(' + JSON.stringify(data) + ')')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return json_(data);
}
