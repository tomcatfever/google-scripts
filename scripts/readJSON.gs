/******************************************************
** try reading from json
******************************************************/

function ReadJson(ColRow){
  var Search = DriveApp.getFilesByName(ColRow).next(); // Search for unique file. Consider adding err handler.
  var File = Search.getAs('application/json'); // Get Blob encoded as 'application/json' from file
  var Obj = JSON.parse(File.getDataAsString()); // Parse contents of blob as a String with UTF-8 encoding to Obj
  
  // Variables to return 
  return Obj;
};

function myLog(){
  var Obj = ReadJson('20180227_112118.jpg.json');
  Logger.log(Object.keys(Obj));
  Logger.log(Obj['url']);
};
