// Concrete Builder
var HighEndComputerBuilder = /** @class */ (function () {
    function HighEndComputerBuilder() {
        this.reset();
    }
    HighEndComputerBuilder.prototype.reset = function () {
        this.product = new HighEndComputer();
    };
    HighEndComputerBuilder.prototype.setCPU = function () {
        this.product.parts.push('AMD Ryzen 9 3900X');
    };
    HighEndComputerBuilder.prototype.setGPU = function () {
        this.product.parts.push('Nvidia GeForce RTX 2080 Ti');
    };
    HighEndComputerBuilder.prototype.setRAM = function () {
        this.product.parts.push('Corsair Vengeance LED');
    };
    HighEndComputerBuilder.prototype.getProduct = function () {
        var result = this.product;
        this.reset();
        return result;
    };
    return HighEndComputerBuilder;
}());
// Product
var HighEndComputer = /** @class */ (function () {
    function HighEndComputer() {
        this.parts = [];
    }
    HighEndComputer.prototype.listParts = function () {
        console.log("Product parts: " + this.parts.join(', ') + "\n");
    };
    return HighEndComputer;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    Director.prototype.buildMinimalViableProduct = function () {
        this.builder.setCPU();
    };
    Director.prototype.buildFullFeaturedProduct = function () {
        this.builder.setCPU();
        this.builder.setGPU();
        this.builder.setRAM();
    };
    return Director;
}());
function client(director) {
    var builder = new HighEndComputerBuilder();
    director.setBuilder(builder);
    console.log('Standard basic product:');
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();
    console.log('Standard full featured product:');
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();
    // Using Builder pattern without Director
    console.log('Custom product:');
    builder.setCPU();
    builder.setRAM();
    builder.getProduct().listParts();
}
var director = new Director();
client(director);
