define(['router'], function(router) {
    'use strict';

    // APP CLASS
    function App() {
        this.router = router;

        this.start = function() {
            // START BACKBONE ROUTER (after the app has been initialised)
            Backbone.history.start();
        };
    }

    return new App();
});
