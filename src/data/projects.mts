import { Identifier } from "./auth.mts";
enum Role {
  PM = 'Project Manager',
  DEV = 'Developer',
  QA = 'Quality Assurance',
}

enum Status {
  PENDING = 'Pending',
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed',
}

type ProjectMember = { userId: Identifier; roles: Role[]; }
type Project = {
  id: string;
  name: string;
  description: string;
  status: Status;
  team: ProjectMember[];
}

const 
projects: Project[] = [
  {
    id: '1',
    name: 'Website Redesign',
    description: 'Modernize company website',
    status: Status.IN_PROGRESS,
    team: [{userId: 'u1', roles: [Role.PM]}, {userId: 'u2', roles: [Role.DEV]}]
  },
  {
    id: '2',
    name: 'Mobile App Development',
    description: 'Develop a mobile app for iOS and Android',
    status: Status.PENDING,
    team: [{userId: 'u1', roles: [Role.PM]}]
  }
];

export { projects, type Project, type ProjectMember, Role, Status };
