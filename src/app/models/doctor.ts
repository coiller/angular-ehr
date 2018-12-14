export class Doctor {
  username: string;
  password: string;
  type: string;

  constructor(username, password) {
    this.password = password;
    this.username = username;
    this.type = 'DOCTOR';
  }
}
