class Animal {

    falar(): string {
        return `Emitir som`;
    }
}
// subclasse cachorro, herdada de animal
class Cachorro extends Animal {
    falar(): string {
        return `au au`;
        
    }
} // subclasse gato, herdada de animal
class Gato extends Animal {
falar(): string {
    return `miau`;
}
}

// array de animais
const animais: Animal[] = [new Cachorro(), new Gato(), new Animal()];

// percorrer array

animais.forEach((animal, i) => {
    console.log(`Animal ${i + 1} : ${animal.falar()}`)
})
