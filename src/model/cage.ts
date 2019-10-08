import { Animal } from './animal'
import { StatusCode } from './statusCode'

export class Cage {
  private maxCapacity : number
  private animalType : any
  private animalsList : Array<Animal>

  constructor(maxCapacity : number, animalType : any) {
    this.maxCapacity = maxCapacity
    this.animalType = animalType
    this.animalsList = []
  }

  public setMaxCapacity(maxCapacity : number) : void {
    this.maxCapacity = maxCapacity
  }

  public getMaxCapacity() : number {
    return this.maxCapacity
  }
  
  public setAnimalType(animalType : any) : void {
    this.animalType = animalType
  }

  public getAnimalType() : any {
    return this.animalType
  }

  public getAnimalListSize() {
    return this.animalsList.length
  }
  
  public validateCage() : StatusCode {

    if (this.getMaxCapacity() < 1) {
      return new StatusCode(false, `Cage's capacity should be at least 1`)
    }

    return new StatusCode(true)
  }

  public addAnimalToCage(animal : Animal) : StatusCode {

    if (!(animal instanceof this.getAnimalType())) {
      return new StatusCode(false, `Animal ${typeof animal} is not allowed in this cage`)
    }

    if (this.getAnimalListSize() >= this.getMaxCapacity()) {
      return new StatusCode(false, `Cage is already full`)
    }

    this.animalsList.push(animal);
    return new StatusCode(true, `Animal added with success`)
  }

  public toString() : string {
    return `\rThe cage capacity: ${this.maxCapacity}\nType of animal: ${ this.getAnimalTypeToString() }\n\nCage's Animal List:

    ${this.animalsList.map((animal : Animal, i :number) => {
      return `\tAnimal ${i+1}:\n${animal.toString()}\n\n`
    }).toString().replace(/,/g,"")}
      `
  }

  public getAnimalTypeToString() : string{
    return this.animalType.name;
  }
}