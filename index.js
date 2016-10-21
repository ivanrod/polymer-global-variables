'use strict';

(function() {
    if (!Polymer || !Polymer.Base) {
        console.warn('Polymer is not loaded yet. polymer-global-variables cant be used.')
    }

    var __configureProperties = Polymer.Base._configureProperties;

    window.app = window.app || {};

    app.globalsManager = {
        globals: {},
        elementsInstances: [],

        set: function(key, value) {
            this.globals[key] = value;

            for (var i in this.elementsInstances) {
                this.elementsInstances[i].set('globals.' + key, value);
            }

            return this.globals;
        }
    };

    Polymer.Base._addFeature({
        _configureProperties: function(properties, config) {
            app.globalsManager.elementsInstances.push(this);

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
