'use strict';

(function() {
    window.app = window.app || {};

    app.globalsManager = {
        globals: {},
        elementInstances: [],

        set: function(key, value) {
            this.globals[key] = value;

            for (var i in this.elementInstances) {
                this.elementInstances[i].set('globals.' + key, value);
            }
        }
    };

    var originalConfigureProperties = Polymer.Base._configureProperties;

    Polymer.Base._addFeature({
        _configureProperties: function(properties, config) {
            app.globalsManager.elementInstances.push(this);

            if (properties) {
                properties.globals = {
                    type: Object,
                    value: app.globalsManager.globals
                };
            }

            originalConfigureProperties.apply(this, [properties, config]);
        }

    });
})();
