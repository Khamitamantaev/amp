import { TaskUpdateManyWithoutProjectsInput } from "./TaskUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  code?: string | null;
  description?: string | null;
  dueDate?: Date | null;
  name?: string;
  projectOwner?: string | null;
  startDate?: Date | null;
  tasks?: TaskUpdateManyWithoutProjectsInput;
};
