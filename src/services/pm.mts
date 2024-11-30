// Project Management service

import { User } from "./identity.mts";
import { projects, type Project, type ProjectMember, Role, Status } from "../data/projects.mts";
import { prompt } from "../util/prompt.mts";

class PM {
  #user: User;

  constructor() {
    this.#user = new User();
  }

  async home(): Promise<void> {
    await this.#requireUser();
    // await this.#user.viewProfile();
    console.info('Projects:');
    for (const p of projects) {
      console.info(`  ${p.id}: ${p.name}`);
    }
    let choice: string = '';
    do {
      choice = await prompt('Select a project (leave blank to cancel): ');
      if (choice.length !== 0) {
        console.info('');
        await this.viewProject(choice);
      }
    } while (choice.length !== 0);
  }

  async viewProject(projectId: string): Promise<void> {
    await this.#requireUser();
    const project = projects.find(p => p.id === projectId);
    if (!project) {
      const err = `Project ${projectId} not found`;
      console.error(err);
      throw new Error(err);
    }
    console.info(`Project: ${project.name}`);
    console.info(`  Description: ${project.description}`);
    console.info(`  Status:      ${project.status}`);
    console.info(`  Team:        ${project.team.map(t => `${t.userId} (${t.roles.join(', ')})`).join(', ')}`);
    await prompt('Return from project view (any key) ... ');
    console.info('');
  } 

  async #requireUser(): Promise<void> {
    if (!this.#user.id) {
      await this.#user.signIn();
    }
  }

}

export { PM };
