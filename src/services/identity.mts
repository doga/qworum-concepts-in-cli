// User identity service

import { Auth, type Identifier } from "../data/auth.mts";
import { UserData, type UserInfo } from "../data/user-data.mts";
import { prompt } from "../util/prompt.mts";

class User {
  #id: Identifier | null = null;
  #data: UserInfo | null = null;

  constructor() {
    this.#id = null;
    this.#data = null;
  }

  get id(): Identifier | null {
    return this.#id;
  }

  get data(): UserInfo | null {
    return this.#data;
  }

  /**
   * Sign in to the system.
   * @throws {Error} If the user cancels the sign-in process.
   * @returns {Identifier} The user's ID.
   */
  async signIn(): Promise<Identifier> {
    let 
    id: Identifier | null = null,
    password: string | null = null;

    do {
      console.info(`\nSign in`);
      id = await prompt('ID (leave blank to cancel): ');
      if(id.length === 0){
        const err = 'Sign-in cancelled';
        console.error(err);
        throw new Error(err);
      }
      password = await prompt('Password: ');
    } while (!Auth.verify(id, password));
    this.#id = id;
    this.#data = UserData.getUserData(id);
    console.info('');
    return id;
  }


  /**
   * View the user's profile.
   * @throws {Error} If the user is not signed in.
   */
  async viewProfile(): Promise<void> {
    if (!this.#id) {
      const err = 'User not signed in';
      console.error(err);
      throw new Error(err);
    }
    console.info(`User profile for ${this.#id}:`, this.#data);
    await prompt('Return from profile view (any key) ... ');
    console.info('');
  }
}

export { User };
