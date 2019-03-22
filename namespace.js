/*
 * @author Tushar
 * @version 1.0
 * This library is used create namespaces into javaScript application.
 */
(function (window) {
  var Namespace = (function (window) {
    "use strict";

    function _init(current, part, parent) {
      if (current) {
        return current;
      } else {
        parent[part] = {};
        return parent[part];
      }
    }

    function _namespace(identifier) {
      var ns = window;
      if (identifier !== "") {
        var parts = identifier.split(Namespace.separator);
        for (var i = 0, j = parts.length; i < j; i++) {
          var current = ns[parts[i]];
          ns = _init(current, parts[i], ns);
        }
      } else {
        throw new Error("Identifier required");
      }
      return ns;
    }

    return _namespace;
  })(window);

  Namespace.separator = ".";

  window.Namespace = Namespace;
}(window));