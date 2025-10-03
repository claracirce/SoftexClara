"use strict";
class Animal {
    falar() {
        return `Emitir som`;
    }
}
// subclasse cachorro, herdada de animal
class Cachorro extends Animal {
    falar() {
        return `au au`;
    }
} // subclasse gato, herdada de animal
class Gato extends Animal {
    falar() {
        return `miau`;
    }
}
// array de animais
const animais = [new Cachorro(), new Gato(), new Animal()];
// percorrer array
animais.forEach((animal, i) => {
    console.log(`Animal ${i + 1} : ${animal.falar()}`);
});
