type Identifier = string;

type Password = {
  cleartext: string;
}

type Credential = {
  id: Identifier;
  password: Password;
}


class Auth {

  static #credentials: Credential[] = [
    {
      id: 'u1',
      password: {cleartext: ''}
    },
    {
      id: 'u2',
      password: {cleartext: ''}
    },
  ];

  static verify(id: Identifier, password: string): Identifier | null {
    // In a real app, this would verify credentials against a database
    if (Auth.#credentials.find(c => c.id === id && c.password.cleartext === password)) {
      return id;
    }
    return null;
  }

} 

export { Auth };
export type { Identifier };
