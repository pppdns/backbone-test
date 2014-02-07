/*global define*/

define([], function () {
    'use strict';

    var CompanyModel = Backbone.Model.extend({
        defaults: {
            name: '?'
        }
    });

    return CompanyModel;
});
