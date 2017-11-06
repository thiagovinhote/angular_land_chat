export interface Roles {
  reader: boolean;
  author?: boolean;
  admin?:  boolean;

}

export class User {

  public $key?: string;
  public imageUrl: string;
  public name: string;
  public email: string;

  public roles: Roles;

  constructor() {}

}
