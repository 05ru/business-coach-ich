# business-coach-ich

## Сохранение заявок в Google Sheets

1. Создайте Google Таблицу и добавьте заголовки столбцов: `createdAt`, `name`, `phone`, `source`.
2. В таблице откройте **Расширения → Apps Script** и вставьте скрипт:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.createdAt || new Date().toISOString(),
    data.name || '',
    data.phone || '',
    data.source || 'website'
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Нажмите **Deploy → New deployment → Web app**, выставьте доступ `Anyone` и скопируйте URL.
4. В файле `.env` (или в переменных окружения хостинга) укажите:

```bash
VITE_GOOGLE_SHEETS_WEBHOOK_URL="https://script.google.com/macros/s/.../exec"
```

После этого заявки из блока **«Получить консультацию»** будут отправляться в Google Sheets.
