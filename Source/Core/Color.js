/*global define*/
define(function() {
    "use strict";

    /**
     * A color, specified using red, green, blue, and alpha values,
     * which range from <code>0</code> (no intensity) to <code>1.0</code> (full intensity).
     *
     * @constructor
     * @alias Color
     */
    var Color = function(red, green, blue, alpha) {
        /**
         * The red component.
         */
        this.red = typeof red === 'undefined' ? 1.0 : red;
        /**
         * The green component.
         */
        this.green = typeof green === 'undefined' ? 1.0 : green;
        /**
         * The blue component.
         */
        this.blue = typeof blue === 'undefined' ? 1.0 : blue;
        /**
         * The alpha component.
         */
        this.alpha = typeof alpha === 'undefined' ? 1.0 : alpha;
    };

    /**
     * Converts a 'byte' color component in the range of 0 to 255 into
     * a 'float' color component range of 0 to 1.0.
     * @memberof Color
     *
     * @param {Number} number The number to be converted.
     * @returns {number} The converted number.
     */
    Color.byteToFloat = function(number) {
        return number / 255.0;
    };

    /**
     * Converts a 'float' color component in the range of 0 to 1.0 into
     * a 'byte' color component range of 0 to 255.
     * @memberof Color
     *
     * @param {Number} number The number to be converted.
     * @returns {number} The converted number.
     */
    Color.floatToByte = function(number) {
        return number === 1.0 ? 255.0 : (number * 256.0) | 0;
    };

    /**
     * Duplicates a Color.
     * @memberof Color
     *
     * @param {Color} color The Color to duplicate.
     * @param {Color} [result] The object to store the result in, if undefined a new instance will be created.
     * @return {Color} The modified result parameter or a new instance if result was undefined.
     */
    Color.clone = function(color, result) {
        if (typeof result === 'undefined') {
            return new Color(color.red, color.green, color.blue, color.alpha);
        }
        result.red = color.red;
        result.green = color.green;
        result.blue = color.blue;
        result.alpha = color.alpha;
        return result;
    };

    /**
     * Returns a duplicate of a Color instance.
     * @memberof Color
     *
     * @param {Color} [result] The object to store the result in, if undefined a new instance will be created.
     * @return {Color} The modified result parameter or a new instance if result was undefined.
     */
    Color.prototype.clone = function(result) {
        return Color.clone(this, result);
    };

    /**
     * Returns true if this Color equals other componentwise.
     * @memberof Color
     *
     * @param {Color} other The Color to compare for equality.
     * @return {Boolean} <code>true</code> if the Colors are equal componentwise; otherwise, <code>false</code>.
     */
    Color.prototype.equals = function(other) {
        return (this === other) ||
        (typeof this !== 'undefined' &&
         typeof other !== 'undefined' &&
         this.red === other.red &&
         this.green === other.green &&
         this.blue === other.blue &&
         this.alpha === other.alpha);
    };

    /**
     * Returns <code>true</code> if this Color equals other componentwise within the specified epsilon.
     * @memberof Color
     *
     * @param {Color} other The Color to compare for equality.
     * @param {Number} [epsilon=0.0] The epsilon to use for equality testing.
     * @return {Boolean} <code>true</code> if the Colors are equal within the specified epsilon; otherwise, <code>false</code>.
     */
    Color.prototype.equalsEpsilon = function(other, epsilon) {
        return (this === other) ||
                ((typeof other !== 'undefined') &&
                 (Math.abs(this.red - other.red) <= epsilon) &&
                 (Math.abs(this.green - other.green) <= epsilon) &&
                 (Math.abs(this.blue - other.blue) <= epsilon) &&
                 (Math.abs(this.alpha - other.alpha) <= epsilon));
    };

    /**
     * Creates a string containing the CSS color value for this color.
     * @memberof Color
     *
     * @return {String} The CSS equivalent of this color.
     */
    Color.prototype.toCSSColor = function() {
        var r = Color.floatToByte(this.red);
        var g = Color.floatToByte(this.green);
        var b = Color.floatToByte(this.blue);
        return 'rgba(' + r + ',' + g + ',' + b + ',' + this.alpha + ')';
    };

    /**
     * An immutable Color instance initialized to white, RGBA (1.0, 1.0, 1.0, 1.0).
     * @memberof Color
     */
    Color.WHITE = Object.freeze(new Color(1.0, 1.0, 1.0, 1.0));

    /**
     * An immutable Color instance initialized to black, RGBA (0.0, 0.0, 0.0, 1.0).
     * @memberof Color
     */
    Color.BLACK = Object.freeze(new Color(0.0, 0.0, 0.0, 1.0));

    /**
     * An immutable Color instance initialized to red, RGBA (1.0, 0.0, 0.0, 1.0).
     * @memberof Color
     */
    Color.RED = Object.freeze(new Color(1.0, 0.0, 0.0, 1.0));

    /**
     * An immutable Color instance initialized to green, RGBA (0.0, 1.0, 0.0, 1.0).
     * @memberof Color
     */
    Color.GREEN = Object.freeze(new Color(0.0, 1.0, 0.0, 1.0));

    /**
     * An immutable Color instance initialized to blue, RGBA (0.0, 0.0, 1.0, 1.0).
     * @memberof Color
     */
    Color.BLUE = Object.freeze(new Color(0.0, 0.0, 1.0, 1.0));

    /**
     * An immutable Color instance initialized to yellow, RGBA (1.0, 1.0, 0.0, 1.0).
     * @memberof Color
     */
    Color.YELLOW = Object.freeze(new Color(1.0, 1.0, 0.0, 1.0));

    /**
     * An immutable Color instance initialized to magenta, RGBA (1.0, 0.0, 1.0, 1.0).
     * @memberof Color
     */
    Color.MAGENTA = Object.freeze(new Color(1.0, 0.0, 1.0, 1.0));

    /**
     * An immutable Color instance initialized to cyan, RGBA (0.0, 1.0, 1.0, 1.0).
     * @memberof Color
     */
    Color.CYAN = Object.freeze(new Color(0.0, 1.0, 1.0, 1.0));

    return Color;
});