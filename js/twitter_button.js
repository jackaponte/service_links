(function ($) {
  Drupal.behaviors.ws_tb ={
    scriptadded: false,

    attach: function(context, settings) {
      if (this.scriptadded) {
        twttr.widgets.load();
      } else {
        $.getScript('http://platform.twitter.com/widgets.js', function () {
          this.scriptadded = true;
        });
      }
    }
  }
})(jQuery);
