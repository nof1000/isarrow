/**
 * Checks whether a value is an arrow function
 *
 * @module isclass
 * @author Denis Maslennikov <mrdenniska@gmail.com> (nofach.com)
 * @license MIT
 */

/**
 * Exports
 * @public
 */
module.exports = (fn) => {
    if (typeof(fn) === 'function') {
        if (!fn.prototype) {
            try {
                fn.arguments && fn.caller;
                return false;
            } catch(e) {
                return true;
            }
        }
    }

    return false;
};
