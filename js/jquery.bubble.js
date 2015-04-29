/* --------------------------------------- *\
 *                                         *
 *             JQUERY BUBBLE               *
 *                                         *
 *  - Ej:                                  *
 *                                         *
 *   $('.bubble').bubble();                *
 *                                         *
 *  - Ej Separator (Default ','):          *
 *                                         *
 *   $('.bubble').bubble(':');             *
 *                                         *
 *  - Ej:                                  *
 *                                         *
 *   $('a').on('click', function(e) {      *
 *      e.preventDefault();                *
 *      $(this).bubble();                  *
 *   });                                   *
 *                                         *
\* --------------------------------------- */

(function( $ ) {

  function searchTag(str, strArray) {
    for (var j=0; j<strArray.length; j++) {
      if (strArray[j].match(str)) return j;
    }
    return -1;
  }

  $.fn.bubble = function(separator) {

    if (typeof options === "undefined" || options === null) {
      separator = ',';
    }

    var self = this;
    var tag = self.data('bubble-key');

    $('.bubble.is-active').removeClass('is-active');
    $('.bubble').each( function(i) {
        var dataTag = $(this).data('bubble-tags')
                             .replace(/\s/g, '')
                             .split(separator);

        var resultTag = searchTag(tag, dataTag);

        if ( resultTag >= 0 ) {
          $(this).addClass('is-active');
        }
    });

    return self;
  };

}(jQuery));