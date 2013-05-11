(function ($) {
  Drupal.behaviors.ws_tb ={
    scriptadded: false,

    attach: function(context, settings) {
      if (this.scriptadded) {
        twttr.widgets.load();
      } else {
        $('a.service-links-twitter-widget', context).each(function(){
          $(this).attr('href', $(this).attr('href').replace(/http[s]*\%3A\/\//, ''));
        });
        $.getScript('http://platform.twitter.com/widgets.js', function () {
          this.scriptadded = true;
        });
      }
    }
  }
})(jQuery);
