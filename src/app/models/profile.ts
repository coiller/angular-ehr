export class Profile {
  email: string;
  title: string;
  name: string;
  phone: string;


  constructor(email: string, title: string, name: string, phone: string) {
    this.email = email;
    this.title = title;
    this.name = name;
    this.phone = phone;
  }
}
