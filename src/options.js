function optionsSave() {
  var bannedSeries = document.getElementById('bannedSeries').value;
  chrome.storage.sync.set({
    bannedSeries: bannedSeries
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function optionsRestore() {
  chrome.storage.sync.get({
    bannedSeries: '',
  }, function(items) {
    document.getElementById('bannedSeries').value = items.bannedSeries;
  });
}
document.addEventListener('DOMContentLoaded', optionsRestore);
document.getElementById('save').addEventListener('click', optionsSave);
