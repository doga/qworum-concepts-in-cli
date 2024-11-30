// import { Auth } from './user/data.mts';
// import { HumanResources } from './HumanResources.ts';
// import { ProjectManagement } from './ProjectManagement.ts';

// async function main() {
//   const AuthService = new Auth();
//   const hrService = new HumanResources(AuthService);
//   const projectManagement = new ProjectManagement(AuthService, hrService);

//   // Simulate login (in a real app, you'd prompt for credentials)
//   const Auth = await AuthService.signIn('john.doe', 'password');
//   if (!Auth) {
//     console.log('Login failed');
//     Deno.exit(1);
//   }

//   console.log(`Welcome, ${Auth.fullName}!`);
//   await projectManagement.home(Auth.Authname);
// }

// main().catch(console.error); 

import { PM } from "./services/pm.mts";

const pm = new PM();
pm.home().catch(console.error);
