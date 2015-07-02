$( document ).ready(function() {

  $(function() {
    // Bind an event to window.onhashchange that, when the hash changes, gets the
    // hash and adds the class "activelink" to any matching nav link.
    $( window ).hashchange(function() {
      var hash = location.hash;
   
      // Iterate over all nav links, setting the "activelink" class as-appropriate.
      $( "nav a" ).each(function() {
        var that = $( this );
        that[ that.attr( "href" ) === hash ? "addClass" : "removeClass" ]( "activelink" );
      });
    });
    // Since the event is only triggered when the hash changes, we need to trigger
    // the event now, to handle the hash the page may have loaded with.
    $( window ).hashchange();
  });

  console.log( "ready!" );
});