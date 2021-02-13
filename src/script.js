function fix() {
  chrome.storage.sync.get({
    bannedSeries: '',
  }, function(items) {
    console.log('NETFIX GO!');
    var series = items.bannedSeries.split(/\r?\n/);
    $.each(series, function(key, value) {
      $("[aria-label*='" + value + "']").parent('.slider-item').hide(1000);
      $("[aria-label*='" + value + "']").parent().parent('.slider-item').hide(1000);
    });
  });
}

document.addEventListener("DOMContentLoaded", function() {
  $(document).bind('DOMSubtreeModified', function() {
    fix();
  });

  // "hover" tests
  var fragment = '<div class="fix-button" style="background-color: aqua; float: right; z-index: 999;">FIX</div>';
  $('.slider-item').append(fragment);
  $('.fix-button').hide();
  $('.slider-item').hover(function() {
    $(this).children('.fix-button').show();
  }, function(){
    $(this).children('.fix-button').hide();
  });
  $(document).on('click', '.fix-button', function() {
    console.log('you clicked: ' + $(this).parent().children('.character-link').attr('aria-label'));
  });

});
