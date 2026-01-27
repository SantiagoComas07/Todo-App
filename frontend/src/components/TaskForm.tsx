import { Box, Button, IconButton, MenuItem, TextField, Typography } from "@mui/material"
import ClearIcon from '@mui/icons-material/Clear';
import { useState, useEffect } from "react";
import { createTask as createTaskApi, updateTask as updateTaskApi } from "../api/taskApi";
import { type TaskProps } from "./TaskItem";

type OpenProps = {
    onClose: () => void;
    editingTask?: TaskProps | null;
    onSave?: () => void;
}

export const TaskForm = ({ onClose, editingTask, onSave }: OpenProps) => {
    const [form, setForm] = useState({
        title: "",
        description: "",
        status: 'pending' 
    });
    const [loading, setLoading] = useState(false);

    const currencies = [
        {
            value: 'pending',
            label: 'Pending',
        },
        {
            value: 'completed',
            label: 'Done',
        }
    ];

    // Cargar datos si es edición
    useEffect(() => {
        if (editingTask) {
            setForm({
                title: editingTask.title,
                description: editingTask.description,
                status: editingTask.status
            });
        } else {
            setForm({
                title: "",
                description: "",
                status: "pending"
            });
        }
    }, [editingTask]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
        const { name, value } = e.target as HTMLInputElement;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!form.title.trim() || !form.description.trim()) {
            alert('Por favor completa todos los campos');
            return;
        }

        try {
            setLoading(true);
            if (editingTask) {
                // Editar tarea existente
                await updateTaskApi(editingTask.id, form);
            } else {
                // Crear nueva tarea
                await createTaskApi(form);
            }
            onSave?.();
            onClose();
        } catch (error) {
            console.error('Error saving task:', error);
            alert('Error al guardar la tarea');
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <Box 
                component="form" 
                className="flex flex-col p-5 py-3 justify-around w-90 h-100 rounded-xs" 
                sx={{ backgroundColor: "primary.light" }}
                onSubmit={handleSubmit}
            >
                <Box component="div" className="w-full flex justify-start">
                    <IconButton onClick={onClose}>
                        <ClearIcon />
                    </IconButton>
                </Box>
                
                <Typography variant="overline" sx={{ color: "secondary.dark" }} className="text-center">
                    {editingTask ? 'Edit Task' : 'New Task'}
                </Typography>
                
                <TextField 
                    label="Title" 
                    variant="outlined" 
                    placeholder="Task title"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    fullWidth
                /> 
                
                <TextField
                    id="outlined-textarea"
                    variant="outlined"
                    label="Description"
                    placeholder="Task description"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    fullWidth
                />

                <TextField
                    id="outlined-select-status"
                    select
                    label="Status"
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                    fullWidth
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                
                <Button 
                    variant="contained" 
                    sx={{ backgroundColor: "secondary.dark", color: "white" }}
                    type="submit"
                    disabled={loading}
                >
                    {loading ? 'Saving...' : editingTask ? 'Update' : 'Create'}
                </Button>
            </Box>
        </>
    )
}