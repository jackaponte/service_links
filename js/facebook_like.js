(function ($) {
  Drupal.behaviors.ws_fl = {
    attach: function (context, settings) {
      $('a.service-links-facebook-like', context).each(function(){
        var iframe = document.createElement('iframe');

        iframe.src = $(this).attr('href').replace('http://', '//').replace(/http[s]*\%3A\/\//, '');
        iframe.setAttribute('scrolling', 'no');
        iframe.setAttribute('frameborder', 0);
        iframe.setAttribute('allowTransparency', 'true');

        $(iframe).css('border', 'none').css('overflow', 'hidden')
                 .css('width', Drupal.settings.ws_fl.width + 'px')
                 .css('height', Drupal.settings.ws_fl.height + 'px');
        
        $(this).replaceWith(iframe);
      });
    }
  }
})(jQuery);
