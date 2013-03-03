(function ($) {
  $(document).ready(function(){
    $('a.service-links-google-plus-one').each(function(){
      var counter = Drupal.settings.ws_gpo.counter ? 'true' : 'false';
      var g_text = document.createElement('g:plusone');
      g_text.setAttribute('count', counter);
      g_text.setAttribute('href', $(this).attr('href'));
      if (Drupal.settings.ws_gpo.type != '') {
        g_text.setAttribute('size', Drupal.settings.ws_gpo.type);
      }
      $(this).replaceWith(g_text);
    });
  });
})(jQuery);
