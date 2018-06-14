export default class {
  constructor(_username, _password) {
    this.username = _username;
    this.password = _password;
  }

  toString() {
    return `(${this.username}, ${this.password})`;
  }
}
