interface Builder {
  reset(): void;
  setCPU(): void;
  setGPU(): void;
  setRAM(): void;
}

// Concrete Builder
class HighEndComputerBuilder implements Builder {
  private product: HighEndComputer;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.product = new HighEndComputer();
  }

  setCPU(): void {
    this.product.parts.push('AMD Ryzen 9 3900X');
  }

  setGPU(): void {
    this.product.parts.push('Nvidia GeForce RTX 2080 Ti');
  }

  setRAM(): void {
    this.product.parts.push('Corsair Vengeance LED');
  }

  getProduct(): HighEndComputer {
    const result = this.product;

    this.reset();
    return result;
  }
}

// Product
class HighEndComputer {
  parts: string[] = [];

  listParts(): void {
    console.log(`Product parts: ${this.parts.join(', ')}\n`);
  }
}

class Director {
  private builder: Builder;

  setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  buildMinimalViableProduct(): void {
    this.builder.setCPU();
  }

  buildFullFeaturedProduct(): void {
    this.builder.setCPU();
    this.builder.setGPU();
    this.builder.setRAM();
  }
}

function client(director: Director) {
  const builder = new HighEndComputerBuilder();
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

const director = new Director();
client(director);
