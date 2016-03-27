System.register("moduleB/entryPoint.js", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var moduleB;
  return {
    setters: [],
    execute: function() {
      moduleB = 'B';
      exports_1("default", moduleB);
    }
  };
});
