export class StatusCode {
  private message : string
  private isOK : boolean

  constructor(error : boolean, message?:string) {
    this.isOK = error
    this.message = message || ''
  }

  public getErrorMessage() :string {
    return this.message
  }

  public checkError() : boolean {
    return !this.isOK
  }
  
  public checkOK() : boolean {
    return this.isOK
  }
}