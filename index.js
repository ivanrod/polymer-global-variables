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

            for (var i in this.elementsInstances) {
                this.elementsInstances[i].set('globals.' + key, value);
            }

            return this.globals;
        }
    };

    Polymer.Base._addFeature({
        _configureProperties: function(properties, config) {
            Polymer.globalsManager.elementsInstances.push(this);

            if (properties) {
                properties.globals = {
                    type: Object,
                    value: Polymer.globalsManager.globals
                };
            }

            __configureProperties.apply(this, [properties, config]);
        }
    });

})();
