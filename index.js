'use strict';

(function() {
    var __configureProperties = Polymer.Base._configureProperties;

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

    Polymer.Base._addFeature({
        _configureProperties: function(properties, config) {
            app.globalsManager.elementInstances.push(this);

            if (properties) {
                properties.globals = {
                    type: Object,
                    value: app.globalsManager.globals
                };
            }

            __configureProperties.apply(this, [properties, config]);
        }
    });
    
})();
