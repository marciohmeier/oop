import { Cage } from "./cage"
import { StatusCode } from "./statusCode"
import { Animal } from "./animal"

export class Zoo {
  private name : string
  private listOfCage : Array<Cage>

  constructor(name : string) {
    this.name = name
    this.listOfCage = []
  }

  public setName(name : string) : void{
    this.name = name;
  }

  public getName() : string{
    return this.name;
  }

  public addCageToZoo(cage : Cage) : StatusCode {

    let status = cage.validateCage()
    if (status.checkError()) return status

    this.listOfCage.push(cage)

    return new StatusCode(true)
  }

  public addAnimalToZoo(animal : Animal) : StatusCode {
    for (let i = 0; i < this.listOfCage.length; i++) {
      let cage = this.listOfCage[i];
      
      let status = cage.addAnimalToCage(animal)
      if (status.checkOK()) {
        return status
      }
    }
    return new StatusCode(false, `Animal ${animal.getClassName()} (${animal.getName()}) cannot be added to the zoo because it has no available cage`)
  }

  public toString() : string {

    return `Zoo Name: ${this.getName()}
Cage Quantity in Zoo: ${this.listOfCage.length}
Type of Animal acceptable: ${this.listOfCage.map((cage : Cage, i :number) => {return cage.getAnimalTypeToString()}).toString().replace(/,/g, ", ")}
-----------------\nCages\n-----------------\n
${this.listOfCage.map((cage : Cage, i :number) => {return `\rCage ${i+1}:\n\r\t${cage.toString()}`}).toString().replace(/,/g, "")}`
  }
}