'use strict';

(function() {
    window.app = window.app || {};
    app.globals = {};
    app.elementInstances = [];

    var originalConfigureProperties = Polymer.Base._configureProperties;

    Polymer.Base._addFeature({
        _configureProperties: function(properties, config) {
            app.elementInstances.push(this);

            if (properties) {
                properties.globals = {
                    type: Object,
                    value: app.globals
                };
            }

            originalConfigureProperties.apply(this, [properties, config]);
        }

    });

    app.globalsManager = {
        set: function(key, value) {
            app.globals[key] = value;

            for (var i in app.elementInstances) {
                app.elementInstances[i].set('globals.' + key, value);
            }
        }
    };
})();
