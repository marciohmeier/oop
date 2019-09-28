export abstract class Animal {
  public name : string
  public abstract doNoise():string

  constructor(name? : string) {
    this.name = name || ''
  }

  public setName(name : string) : void {
    this.name = name
  }
  
  public getName() : string {
    return this.name
  }

  public getClassName() : string {
    let dataClass = this.constructor.toString().match(/\w+/g)
    return dataClass![1];
  }

  public toString() : string {
    return `\tName: ${this.getName()}\n\tClassification: ${this.getClassName()}`
  }
}