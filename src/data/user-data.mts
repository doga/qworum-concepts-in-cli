import type { Identifier } from "./auth.mts";

type Name = {
  first: string;
  last: string;
}

type UserInfo = {
  name: Name;
}

class UserData {
  static #userData: Map<Identifier, UserInfo> = new Map([
    ['u1', {name: { first: 'John', last: 'Doe' }}],
    ['u2', {name: { first: 'Jane', last: 'Doe' }}],
  ]);

  static getUserData(id: Identifier): UserInfo | null {
    return this.#userData.get(id) ?? null;
  }
} 

export { UserData };
export type { UserInfo, Name };
