(function ($) {
  Drupal.behaviors.sl_fs = {
    attach: function(context, settings) {
      // It works only for FF, IE, Opera, Chrome
      if (window.sidebar || window.external || window.opera) {
        var $favorites = $("a.service-links-favorite", context).once('service-links-favorite');
        $favorites.show();
        if (window.chrome) {
          $favorites.click(function(event){
            event.preventDefault();
            alert(Drupal.t('Use CTRL + D to add this to your bookmarks'));
          });
        } else if (window.opera && window.print) {
          $favorites.each(function(){
            var url = $(this).attr('href').split('&favtitle=');
            var title = decodeURI(url[1]);
            url = url[0];
            $(this).attr('rel', 'sidebar').attr('href', url).attr('title', title);
          });
        } else if (window.sidebar || (window.external && window.external.AddFavourite)) {
          $favorites.click(function(event){
            event.preventDefault();
            var url = $(this).attr('href').split('&favtitle=');
            var title = decodeURI(url[1]);
            url = url[0];
            if (window.sidebar) {
              window.sidebar.addPanel(title, url, '');
            } else if (window.external) {
              window.external.AddFavorite(url, title);
            }
          });
        }
      } else {
        $favorites.hide();
      };
    }
  }
})(jQuery);
