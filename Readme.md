# Polymer Global Variables

Share variables across all the polymer elements in your application.

The Polymer data system have great and powerful tools (Data bindings, observers,...) but sometimes it feels very repetitive to passing the same data to almost every element you declare (e.g., localization, authentication flags,...).

This hack tries to solve this issue setting a global object in every Polymer component instance of your project.
