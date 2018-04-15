/* See the project at https://github.com/peterherrmann/BetterLog
*  To add the library:
*  1) Click on the menu item "Resources > Libraries..."
*  2) In the "Find a Library" text box, enter the project key
*    `MYB7yzedMbnJaMKECt6Sm7FLDhaBgl_dE` and click the "Select" button.
*  3) Choose a version in the dropdown box (usually best to pick the latest version).
*  4) Click the "Save" button.
*/
function myFunction() {
  try {
    // Add one line to use BetterLog and log to a spreadsheet
    Logger = BetterLog.useSpreadsheet('your-spreadsheet-key-goes-here'); 
    
    //Now you can log and it will also log to the spreadsheet
    Logger.log("That's all you need to do");  
    
    //Do more logging
    for (var i = 0; i < 5; i++) {
      var processingMessage = 'Processing ' + i;
      Logger.finest('This is inside my loop. i is %s', i );
    }
    //We're done
    Logger.log('The loop is done and i is now %s', i );
    
  } catch (e) { //with stack tracing if your exceptions bubble up to here
    e = (typeof e === 'string') ? new Error(e) : e;
    Logger.severe('%s: %s (line %s, file "%s"). Stack: "%s" . While processing %s.',e.name||'', 
               e.message||'', e.lineNumber||'', e.fileName||'', e.stack||'', processingMessage||'');
    throw e;
  }
}
