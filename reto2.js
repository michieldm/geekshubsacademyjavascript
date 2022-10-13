class Password {
  constructor(longitud = 8) {
    this.longitud = longitud;
    this.password = this.setPassword();
  }

  setPassword() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < this.longitud; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }

  getPassword() {
    return this.password;
  }
}

let password1 = new Password();
console.log(password1.password);

let password2 = new Password(15);
console.log(password2.getPassword());