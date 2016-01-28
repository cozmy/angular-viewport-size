(function () {
  'use strict';

  angular
    .module('common.viewport-size', [])
    .service('viewportSize', ['$document', '$window', function ($document, $window) {
      //////////////
      // Bindings //
      //////////////
      Object.defineProperty(this, 'height', {
        get: getViewportHeight,
        enumerable: true
      });

      Object.defineProperty(this, 'width', {
        get: getViewportWidth,
        enumerable: true
      });

      ///////////////
      // Functions //
      ///////////////
      function getViewportHeight() {
        return Math.max($document[0].documentElement.clientHeight, $window.innerHeight || 0);
      }

      function getViewportWidth() {
        return Math.max($document[0].documentElement.clientWidth, $window.innerWidth || 0);
      }
    }]);
})();
