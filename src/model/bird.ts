import { Animal } from './animal'

export class Bird extends Animal {

  public doNoise():string {
    return "Bird noise!"
  }
}