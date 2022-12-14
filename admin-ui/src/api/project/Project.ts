import { Task } from "../task/Task";

export type Project = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  name: string;
  projectOwner: string | null;
  startDate: Date | null;
  tasks?: Array<Task>;
  updatedAt: Date;
};
