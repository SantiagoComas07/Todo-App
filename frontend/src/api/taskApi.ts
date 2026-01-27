import { api } from './axios.api';
import { type TaskProps } from '../components/TaskItem';

// Obtener todas las tareas
export const fetchTasks = async (): Promise<TaskProps[]> => {
  try {
    const response = await api.get<TaskProps[]>('/tasks');
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

// Obtener una tarea por ID
export const fetchTaskById = async (taskId: string): Promise<TaskProps> => {
  try {
    const response = await api.get<TaskProps>(`/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching task:', error);
    throw error;
  }
};

// Crear una nueva tarea
export const createTask = async (task: Omit<TaskProps, 'id'>): Promise<TaskProps> => {
  try {
    const response = await api.post<TaskProps>('/tasks/', task);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

// Actualizar una tarea
export const updateTask = async (taskId: string, updates: Partial<TaskProps>): Promise<TaskProps> => {
  try {
    const response = await api.put<TaskProps>(`/tasks/${taskId}`, updates);
    return response.data;
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
};

// Eliminar una tarea
export const deleteTask = async (taskId: string): Promise<void> => {
  try {
    await api.delete(`/tasks/${taskId}`);
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};
