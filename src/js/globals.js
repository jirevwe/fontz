(function (exports) {
    'use strict';

    var user = 'no name';

    exports.user = user; //Make this method available in global
})(typeof window === 'undefined' ? module.exports : window);