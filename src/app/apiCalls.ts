import type { Task } from "@prisma/client";

export async function fetchUsersTasks(userId: string): Promise<Task[]> {
	const response = await fetch("/api/todo/" + userId, { next: { revalidate: 10 } });
	const tasks = (await response.json()) as Task[];
	console.log("Fetched Task:", tasks);
	return tasks;
}
export async function createUsersTask(task_: Task): Promise<Task> {
	const response = await fetch("/api/todo");
	const task = (await response.json()) as Task;
	console.log("Task:", task);
	return task;
}
export async function deleteUsersTask(task_: Task): Promise<Task> {
	const response = await fetch("/api/todo");
	const task = (await response.json()) as Task;
	console.log("Task:", task);
	return task;
}
export async function switchDoneUsersTask(task_: Task): Promise<Task> {
	const response = await fetch("/api/todo");
	const task = (await response.json()) as Task;
	console.log("Task:", task);
	return task;
}

