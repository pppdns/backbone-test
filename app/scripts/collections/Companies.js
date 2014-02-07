/*global define*/

define([
    'models/Company'
], function (CompanyModel) {
    'use strict';

    var CompanyCollection = Backbone.Collection.extend({
        model: CompanyModel
    });

    return CompanyCollection;
});
