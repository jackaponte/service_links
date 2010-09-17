if (Drupal.jsEnabled) {
  $(document).ready(function(){
  // only show for FF and IE
    if (window.sidebar || window.external.AddFavourite) {
      $("a.service-links-favorite").show();
      $("a.service-links-favorite").click(function(event){
        event.preventDefault();
        var url = unescape(this.href.replace(/\+/g,' '));
        var url = url.replace(/^[^\?]*\?/g, "");
        var title = url.replace(/^[^#]*#/g,"");
        url = url.replace(/#.*$/g, "");

        if (window.sidebar) {
          window.sidebar.addPanel(title, url,"");
        } else if ( window.external ) {
          window.external.AddFavorite( url, title);
        }
      });
    } else {
      $("a.service-links-favorite").hide();
    }
  });
}
