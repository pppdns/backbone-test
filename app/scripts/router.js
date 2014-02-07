define([], function () {
    'use strict';

    var $el = $('#content'),
        Router;

    Router = Backbone.Router.extend({
        routes: {
            '': 'home',
            'home': 'home',
            // other routes here...

            '*filter': 'notExistentRoute'
        },

        home: function() {
            require(['views/HomePageView'], function(HomePageView) {
                // instatntiate the view for the home page
                var view = new HomePageView({
                    el: $el
                });

                // display with some animation
                $el.hide();
                view.render();
                $el.fadeIn(2000);
            });
        },
        // other route handlers here...
    });

    return new Router();
});
