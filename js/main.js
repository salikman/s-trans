"use strict";

(function($) {
    ///////////////////////////
    // Mmen
    document.addEventListener("DOMContentLoaded", () => {
        new Mmenu( "#menu", {
            "offCanvas": true,
            "extensions": ["position-right"],
            "navbar": {
                'title' : 'Меню'
            }
        });
    });

})(jQuery);