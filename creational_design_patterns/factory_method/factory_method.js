var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Creator
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.describeCat = function () {
        var cat = this.createCat();
        var _a = cat.getCatDetails(), breed = _a.breed, origin = _a.origin, furColour = _a.furColour;
        return "Meow! I'm a " + breed + " Cat. I originate from " + origin + " and the colour of my fur is " + furColour + ".";
    };
    return Cat;
}());
// Concrete Creator
var DomesticCat = /** @class */ (function (_super) {
    __extends(DomesticCat, _super);
    function DomesticCat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DomesticCat.prototype.createCat = function () {
        return new PersianCat();
    };
    return DomesticCat;
}(Cat));
// Concrete Creator
var WildCat = /** @class */ (function (_super) {
    __extends(WildCat, _super);
    function WildCat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WildCat.prototype.createCat = function () {
        return new AfricanWildcat();
    };
    return WildCat;
}(Cat));
// Concrete Product
var PersianCat = /** @class */ (function () {
    function PersianCat() {
    }
    PersianCat.prototype.getCatDetails = function () {
        return {
            breed: 'Persian',
            origin: 'Persia',
            furColour: 'White'
        };
    };
    return PersianCat;
}());
// Concrete Product
var AfricanWildcat = /** @class */ (function () {
    function AfricanWildcat() {
    }
    AfricanWildcat.prototype.getCatDetails = function () {
        return {
            breed: 'African Wildcat',
            origin: 'Africa',
            furColour: 'Grey'
        };
    };
    return AfricanWildcat;
}());
function client(creator) {
    console.log(creator.describeCat());
}
client(new DomesticCat());
