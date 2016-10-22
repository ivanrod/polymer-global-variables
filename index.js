'use strict';

(function() {
    if (!Polymer || !Polymer.Base) {
        console.warn('Polymer is not loaded yet. polymer-global-variables cant be used.');
        return;
    }

    if (Polymer.globalsManager) {
        console.warn('Polymer.globalsManager already defined.');
        return;
    }

    var __configureProperties = Polymer.Base._configureProperties;

    Polymer.globalsManager = {
        globals: {},
        elementsInstances: [],

        set: function(key, value) {
            this.globals[key] = value;

            // Iterate through every element created
            // and use 'set' to notify changes in all of them
            for (var i in this.elementsInstances) {
                this.elementsInstances[i].set('globals.' + key, value);
            }

            return this.globals;
        }
    };

    Polymer.Base._addFeature({
        // Replace _configureProperties method to load elements properties with globals property
        _configureProperties: function(properties, config) {
            var instances = Polymer.globalsManager.elementsInstances;

            // Prevent duplicate instances
            if (instances.indexOf(this) < 0) {
                Polymer.globalsManager.elementsInstances.push(this);
            }

            // Add globals property to every instance
            if (properties) {
                properties.globals = {
                    type: Object,
                    value: Polymer.globalsManager.globals
                };
            }

            // Continue using the original _configureProperties method
            __configureProperties.apply(this, [properties, config]);
        }
    });

})();
