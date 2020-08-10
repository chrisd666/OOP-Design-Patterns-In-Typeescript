// Concrete Factory 1
var EuropeanCatFactory = /** @class */ (function () {
    function EuropeanCatFactory() {
    }
    EuropeanCatFactory.prototype.createDomesticCat = function () {
        return new EuropeanShortHair();
    };
    EuropeanCatFactory.prototype.createWildCat = function () {
        return new EurasianLynx();
    };
    return EuropeanCatFactory;
}());
// Concrete Factory 2
var AsianCatFactory = /** @class */ (function () {
    function AsianCatFactory() {
    }
    AsianCatFactory.prototype.createDomesticCat = function () {
        return new JapaneseBobtail();
    };
    AsianCatFactory.prototype.createWildCat = function () {
        return new BorneanBayCat();
    };
    return AsianCatFactory;
}());
// Concrete Product A1
var EuropeanShortHair = /** @class */ (function () {
    function EuropeanShortHair() {
    }
    EuropeanShortHair.prototype.getDetails = function () {
        return {
            breed: 'European Short Hair',
            origin: 'Sweden',
            furColour: 'Brown'
        };
    };
    return EuropeanShortHair;
}());
// Concrete Product A2
var JapaneseBobtail = /** @class */ (function () {
    function JapaneseBobtail() {
    }
    JapaneseBobtail.prototype.getDetails = function () {
        return {
            breed: 'Japanese Bobtail',
            origin: 'Japan',
            furColour: 'White'
        };
    };
    return JapaneseBobtail;
}());
// Concrete Product B1
var EurasianLynx = /** @class */ (function () {
    function EurasianLynx() {
    }
    EurasianLynx.prototype.getDetails = function () {
        return {
            breed: 'Eurasian Lynx',
            origin: 'Siberia',
            furColour: 'Orange'
        };
    };
    return EurasianLynx;
}());
var BorneanBayCat = /** @class */ (function () {
    function BorneanBayCat() {
    }
    BorneanBayCat.prototype.getDetails = function () {
        return {
            breed: 'Bornean Bay Cat',
            origin: 'Borneo',
            furColour: 'Orange'
        };
    };
    return BorneanBayCat;
}());
function client(factory) {
    var domesticCat = factory.createDomesticCat();
    var wildCat = factory.createWildCat();
    var _a = domesticCat.getDetails(), domesticCatBreed = _a.breed, domesticCatOrigin = _a.origin, domesticCatFurColour = _a.furColour;
    var _b = wildCat.getDetails(), wildCatBreed = _b.breed, wildCatOrigin = _b.origin, wildCatFurColour = _b.furColour;
    console.log("Meow! I'm a " + domesticCatBreed + ". I originate from " + domesticCatOrigin + " and the colour of my fur is " + domesticCatFurColour + ".");
    console.log("Meow! I'm a " + wildCatBreed + ". I originate from " + wildCatOrigin + " and the colour of my fur is " + wildCatFurColour + ".");
}
console.log('European Cats...');
client(new EuropeanCatFactory());
console.log('');
console.log('Asian Cats...');
client(new AsianCatFactory());
