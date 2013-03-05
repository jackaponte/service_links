(function ($) {
   Drupal.behaviors.ws_gpo = {
    scriptadded: false,

    attach: function (context, settings) {
      $('a.service-links-google-plus-one', context).each(function(){
        var counter = Drupal.settings.ws_gpo.counter ? 'true' : 'false';
        var g_text = document.createElement('g:plusone');
        g_text.setAttribute('count', counter);
        g_text.setAttribute('href', $(this).attr('href'));
        if (Drupal.settings.ws_gpo.type != '') {
          g_text.setAttribute('size', Drupal.settings.ws_gpo.type);
        }
        $(this).replaceWith(g_text);
      });

      if (this.scriptadded) {
        gapi.plusone.go();
      } else {
        $.ajax({
          url: "https://apis.google.com/js/plusone.js",
          dataType: "script",
          cache: true,
          parameters: { parsetags: "explicit" },
          success: function () {
            this.scriptadded = true;
            gapi.plusone.go();
          }
        });
      }
    }  
  }
})(jQuery);
