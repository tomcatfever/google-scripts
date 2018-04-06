function listAllFolders() {
  
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.clear();
  sheet.appendRow(["Name", "Date", "Size", "URL", "ID", "Description"]);
  
  var data;
  var folders = DriveApp.getFolders();
   
   while (folders.hasNext()) {
     var folder = folders.next();
     data = [ 
        folder.getName(),
        folder.getDateCreated(),
        folder.getSize(),
        folder.getUrl(),
        folder.getId(),
        folder.getDescription()
      ];

     sheet.appendRow(data);
   }
};
