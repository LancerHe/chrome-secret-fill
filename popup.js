function databaseEvent(database) {
    chrome.tabs.executeScript(null, {code:"var database='" + database + "'"}); 
    chrome.tabs.executeScript(null,
      {file:"scripts/mysql.js"});
    window.close();
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn-fill-database').addEventListener('click', function() {databaseEvent( document.getElementById('database').value) });
});