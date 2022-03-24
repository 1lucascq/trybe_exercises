type Slices = 4 | 6 | 8;
type Comum = 'calabresa' | 'frango' | 'pepperoni'
type Doce = 'nutella' | 'goiabada com queijo' | 'marshmallow' 
type Vegetariana = 'margherita' | 'palmito' | 'cogumelo'

interface Pizza {
  flavor: Comum | Doce | Vegetariana,
  slices: Slices
}

class Pizza {
  constructor (flavor: Comum | Doce | Vegetariana, slices: Slices) {
    this.flavor = flavor;
    this.slices = slices;
  }
}

const calabresa = new Pizza('calabresa', 8);
const frango = new Pizza('frango', 4);
const pepperoni = new Pizza('pepperoni', 4);
const margherita = new Pizza('margherita', 6);
const cogumelo = new Pizza('cogumelo', 4);
const nutella = new Pizza('nutella', 4);
