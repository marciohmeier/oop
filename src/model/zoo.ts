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
    return new StatusCode(false, `Animal ${typeof animal} cannot be added to the zoo because it has no available cage`)
  }
}