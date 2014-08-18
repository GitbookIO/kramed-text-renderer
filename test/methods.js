var assert = require('assert');

var marked = require('marked');

var renderer = require('../');



describe('Text renderer', function() {
    it("should have all methods that marked's renderer has", function() {
        var m1 = methods(marked.Renderer.prototype);
        var m2 = methods(renderer.prototype);

        // Ensure arrays are sorted
        m1.sort();
        m2.sort();

        assert.equal(
            m1.join(),
            m2.join()
        );
    });
});



// Returns a list of method names for an object
function methods(obj) {
    var keys;
    try {
        keys = Object.keys(obj);
    } catch (err) {
        return [];
    }

    return keys.filter(function(k) {
        return (typeof obj[k] === "function");
    });
}
