// Abstract Factory
interface CatFactory {
  createDomesticCat(): DomesticCat;
  createWildCat(): WildCat;
}

// Concrete Factory 1
class EuropeanCatFactory implements CatFactory {
  createDomesticCat(): DomesticCat {
    return new EuropeanShortHair();
  }

  createWildCat(): WildCat {
    return new EurasianLynx();
  }
}

// Concrete Factory 2
class AsianCatFactory implements CatFactory {
  createDomesticCat(): DomesticCat {
    return new JapaneseBobtail();
  }

  createWildCat(): WildCat {
    return new BorneanBayCat();
  }
}

// Abstract Prooduct A
interface DomesticCat {
  getDetails(): {
    breed: string;
    origin: string;
    furColour: string;
  };
}

// Concrete Product A1
class EuropeanShortHair implements DomesticCat {
  getDetails() {
    return {
      breed: 'European Short Hair',
      origin: 'Sweden',
      furColour: 'Brown',
    };
  }
}

// Concrete Product A2
class JapaneseBobtail implements DomesticCat {
  getDetails() {
    return {
      breed: 'Japanese Bobtail',
      origin: 'Japan',
      furColour: 'White',
    };
  }
}

// Abstract Product B
interface WildCat {
  getDetails(): {
    breed: string;
    origin: string;
    furColour: string;
  };
}

// Concrete Product B1
class EurasianLynx implements WildCat {
  getDetails() {
    return {
      breed: 'Eurasian Lynx',
      origin: 'Siberia',
      furColour: 'Orange',
    };
  }
}

class BorneanBayCat implements WildCat {
  getDetails() {
    return {
      breed: 'Bornean Bay Cat',
      origin: 'Borneo',
      furColour: 'Orange',
    };
  }
}

function client(factory: CatFactory) {
  const domesticCat = factory.createDomesticCat();
  const wildCat = factory.createWildCat();

  const {
    breed: domesticCatBreed,
    origin: domesticCatOrigin,
    furColour: domesticCatFurColour,
  } = domesticCat.getDetails();
  const {
    breed: wildCatBreed,
    origin: wildCatOrigin,
    furColour: wildCatFurColour,
  } = wildCat.getDetails();

  console.log(
    `Meow! I'm a ${domesticCatBreed}. I originate from ${domesticCatOrigin} and the colour of my fur is ${domesticCatFurColour}.`
  );
  console.log(
    `Meow! I'm a ${wildCatBreed}. I originate from ${wildCatOrigin} and the colour of my fur is ${wildCatFurColour}.`
  );
}

console.log('European Cats...');
client(new EuropeanCatFactory());

console.log('');

console.log('Asian Cats...');
client(new AsianCatFactory());
