export class Message {

  public isCurrent?: boolean

  constructor(
    public text: string,
    public idUser: string,
    public date: number,
    public user?: any,
    public $key?: string,
  ){}

}
