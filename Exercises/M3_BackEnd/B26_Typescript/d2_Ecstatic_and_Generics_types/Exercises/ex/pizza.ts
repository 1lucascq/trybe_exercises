type Slices = 4 | 6 | 8;

interface Pizza {
  flavor: string
  slices: Slices
}

class Pizza {
  constructor (flavor: string, slices: Slices) {
    this.flavor = flavor;
    this.slices = slices;
  }
}

const calabresa = new Pizza('calabresa', 8);
const margherita = new Pizza('margherita', 6);
const nutella = new Pizza('nutella', 4);
