/*global require*/
'use strict';

require.config({
    hbs: {
        disableI18n: true,
        templateExtension: 'hbs.html',
        helperPathCallback: function(name) {
            return 'scripts/helpers/' + name;
        }
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery               : '../bower_components/jquery/jquery',
        backbone             : '../bower_components/backbone/backbone',
        underscore           : '../bower_components/underscore/underscore',
        bootstrap            : '../bower_components/sass-bootstrap/dist/js/bootstrap',
        handlebars           : '../bower_components/require-handlebars-plugin/Handlebars',
        hbs                  : '../bower_components/require-handlebars-plugin/hbs',
        i18nprecompile       : '../bower_components/require-handlebars-plugin/hbs/i18nprecompile',
        json2                : '../bower_components/require-handlebars-plugin/hbs/json2',
        'backbone.deep-model': '../bower_components/backbone-deep-model/distribution/deep-model'
    },
    deps: ['jquery', 'underscore', 'backbone', 'hbs']
});

require([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    // make them global
    window.$ = $;
    window._ = _;
    window.Backbone = Backbone;

    require(['app'], function(app) {
        window.app = app;
        // start the application
        app.start();
    });
});
