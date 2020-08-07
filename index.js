class Vehicles {
    constructor(marca, modelo, precio){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
}

class Auto extends Vehicles {
    constructor(marca, modelo, puertas, precio){
        super(marca, modelo, precio);
        this.puertas = puertas;
    }

    printAuto(){
        console.log("Marca: " + this.marca + " // Modelo: " + this.modelo + " // Puertas: " + this.puertas + " // Precio: " + currency(this.precio));
    }
}

class Moto extends Vehicles {
    constructor(marca, modelo, cilindrada, precio){
        super(marca, modelo, precio);
        this.cilindrada = cilindrada;
    }

    printMoto(){
        console.log("Marca: " + this.marca + " // Modelo: " + this.modelo + " // Cilindrada: " + this.cilindrada + " // Precio: " + currency(this.precio));
    }
}

const currency = (num) => {
    return (
      "$" + num
        .toFixed(2) //Two decimal digits
        .replace('.', ',') //Replace decimal point character with ,
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') 
    )
}

const vehicles = [new Auto("Peugeot","206", "4", 200000), 
                new Auto("Peugeot","208", "5", 250000), 
                new Moto("Honda", "Titan", "125c", 60000), 
                new Moto("Yamaha", "YBR", "160c", 80500.50)
];

let tempCaro = tempBarato = vehicles[0].precio;
let modelY;
let masCaro;
let masBarato;

vehicles.forEach(element => {
    if(element instanceof Auto){
        element.printAuto();
    }
    else if(element instanceof Moto){
        element.printMoto();
    }
    if(element.precio > tempCaro){
        tempCaro = element.precio;
        masCaro = [element.marca, element.modelo]
    }
    if(element.precio < tempBarato){
        tempBarato = element.precio;
        masBarato = [element.marca, element.modelo];
    }
    if(element.modelo.includes("Y")){
        modelY = [element.marca, element.modelo, currency(element.precio)];
    }
});

console.log("=============================");
console.log("Vehículo más caro: " + masCaro[0] + " " + masCaro[1]);
console.log("Vehículo más caro: " + masBarato[0] + " " + masBarato[1]);
console.log("Vehículo que contiene en el modelo la letra ‘Y’: " + modelY[0] + " " + modelY[1] + " " + modelY[2]);


vehicles.sort((a, b) => (a.precio < b.precio) ? 1 : -1);
console.log("=============================");
console.log("Vehículos ordenados por precio de mayor a menor:");
vehicles.forEach(element => {
    console.log(element.marca + " " + element.modelo);
});
