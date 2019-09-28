import { Animal } from './animal'

export class Mammal extends Animal {
  public  doNoise():string {
    return "Mammal noise!"
  }

  public toString() : string {
    return `${super.toString()}\n\t${this.doNoise()}`
  }
}