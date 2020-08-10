interface CatInterface {
  getCatDetails(): {
    breed: string;
    origin: string;
    furColour: string;
  };
}

// Creator
abstract class Cat {
  abstract createCat(): CatInterface;

  describeCat(): string {
    const cat = this.createCat();
    const { breed, origin, furColour } = cat.getCatDetails();

    return `Meow! I'm a ${breed} Cat. I originate from ${origin} and the colour of my fur is ${furColour}.`;
  }
}

// Concrete Creator
class DomesticCat extends Cat {
  createCat(): CatInterface {
    return new PersianCat();
  }
}

// Concrete Creator
class WildCat extends Cat {
  createCat(): CatInterface {
    return new AfricanWildcat();
  }
}

// Concrete Product
class PersianCat implements CatInterface {
  getCatDetails() {
    return {
      breed: 'Persian',
      origin: 'Persia',
      furColour: 'White',
    };
  }
}

// Concrete Product
class AfricanWildcat implements CatInterface {
  getCatDetails() {
    return {
      breed: 'African Wildcat',
      origin: 'Africa',
      furColour: 'Grey',
    };
  }
}

function client(creator: Cat) {
  console.log(creator.describeCat());
}

client(new DomesticCat());
