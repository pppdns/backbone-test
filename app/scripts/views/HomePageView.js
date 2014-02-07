define([
    'hbs!templates/homePage'
], function (template) {
    'use strict';

    var HomePageView = Backbone.View.extend({
        template: template,
        render: function() {
            this.$el.html(this.template());
        }
    });

    return HomePageView;
});
