import React, { useState, useEffect } from "react";
import TaskList from "./TaskListe";
import TaskForm from "./TaskForm";
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]); // Liste des tâches

  // Ajouter une tâche
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Supprimer une tâche
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Notifications pour les tâches proches de leur échéance
  useEffect(() => {
    const now = new Date();
    tasks.forEach((task) => {
      const dueDate = new Date(task.dueDate);
      if (dueDate - now < 3600000 && dueDate > now) { // Moins d'une heure avant l'échéance
        alert(`Rappel : La tâche "${task.title}" est proche de son échéance !`);
      }
    });
  }, [tasks]);

  return (
    <div className="container">
      <h1>Gestionnaire de Tâches</h1>
      {/* Formulaire pour ajouter des tâches */}
      <TaskForm addTask={addTask} />
      
      {/* Liste des tâches */}
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      ) : (
        <p>Aucune tâche à afficher</p>
      )}
    </div>
  );
};

export default App;
