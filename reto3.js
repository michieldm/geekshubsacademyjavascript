class Electrodoméstico {
  constructor(precioBase = "100", color = "blanco", consumoEnergetico = "F", peso = "5") {
    this.energyLabels = {
      "A": 100,
      "B": 80,
      "C": 60,
      "D": 50,
      "E": 30,
      "F": 10,
    };

    this.weights = {
      "19": 10,
      "49": 50,
      "79": 80,
      "10000000000000000000000000000000000000": 100,
    };

    this.colors = [
      "blanco",
      "negro",
      "rojo",
      "azul",
      "gris",
    ];

    this.precioBase = precioBase; // in EUR
    this.color = this.comprobarColor(color); //default check to guarantee lowercase
    this.consumoEnergetico = this.comprobarConsumoEnergetico(consumoEnergetico);
    this.peso = peso; // in KG
  }


  /**
   * @param {string} color
   */
  comprobarColor(color) {
    color = color.toLowerCase();
    if (this.colors.includes(color)) {
      return color;
    }
    return "blanco";
  }

  /**
 * @param {string} consumoEnergetico
 */
  comprobarConsumoEnergetico(consumoEnergetico) {
    consumoEnergetico = consumoEnergetico.toUpperCase();
    let permittedEnergyLabels = Object.keys(this.energyLabels);
    if (permittedEnergyLabels.includes(consumoEnergetico)) {
      return consumoEnergetico;
    }
    return "F";
  }

  getPrecioFinal() {
    this.precioBase
    let precioFinal = this.precioBase;
    //add weightAddon, sort first to ensure adding in child classes
    const orderedWeights = Object.keys(this.weights).sort().reduce(
      (obj, key) => {
        obj[key] = this.weights[key];
        return obj;
      },
      {}
    );

    for (const [key, value] of Object.entries(orderedWeights)) {
      if(this.peso <= key) {
        precioFinal += value;
        break;
      }
    }

    console.log(orderedWeights)
    //energy addon
    for (const [key, value] of Object.entries(this.energyLabels)) {
      if(this.consumoEnergetico === key) {
        precioFinal += value;
      }
    }
    return precioFinal;
  }
}

let Electrodoméstico1 = new Electrodoméstico(200, "rojo", "A", 4);
console.log(Electrodoméstico1)
console.log(Electrodoméstico1.getPrecioFinal())
//uncomment to trigger errors
//let Electrodoméstico2 = new Electrodoméstico(200, "verde", "A", 4);
//let Electrodoméstico3 = new Electrodoméstico(200, "rojo", "Z", 4);


class Lavadora extends Electrodoméstico {
  constructor(parentArgs, carga = 5) {
    super(...parentArgs);
    this.carga = carga;
    this.cargas = {
      "30": 0,
      "10000000000000000000000000000000000000": 50,
    };
  }

  getPrecioFinal() {
    let finalPrice = super.getPrecioFinal();
    const orderedWeights = Object.keys(this.cargas).sort().reduce(
      (obj, key) => {
        obj[key] = this.cargas[key];
        return obj;
      },
      {}
    );
    for (const [key, value] of Object.entries(orderedWeights)) {
      if(this.carga <= key) {
        finalPrice += value;
        break;
      }
    }
    return finalPrice;
  }
}

let lavadora = new Lavadora([200, "rojo", "A", 4], 35);
console.log(lavadora.precioBase)
console.log(lavadora.getPrecioFinal())



class Television extends Electrodoméstico {
  constructor(parentArgs, resolución = 20, fourK= false) {
    super(...parentArgs);
    this.resolución = resolución;
    this.fourK = fourK;
    this.cargas = {
      "30": 0,
      "10000000000000000000000000000000000000": 50,
    };
  }

  getFourK() {
    return this.fourK;
  }

  getResolución() {
    return this.resolución;
  }

  getPrecioFinal() {
    let finalPrice = super.getPrecioFinal();
    if(this.getResolución() > 40) {
      finalPrice *= 1.3;
    }

    if(this.getFourK()) {
      finalPrice += 50;
    }
    return finalPrice;
  }
}

const television = new Television([200, "rojo", "A", 4], 50, true);
const television2 = new Television([200, "rojo", "C", 4], 10, true);
console.log(television.getPrecioFinal())
console.log(television2.getPrecioFinal())






