import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState(""); // État pour la catégorie

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && description && dueDate && category) {
      const newTask = {
        id: Date.now(),
        title,
        description,
        dueDate,
        category, // Ajouter la catégorie à la nouvelle tâche
      };

      addTask(newTask); // Appel de la fonction pour ajouter la tâche
      setTitle("");
      setDescription("");
      setDueDate("");
      setCategory(""); // Réinitialiser la catégorie après l'ajout
    } else {
      alert("Veuillez remplir tous les champs !");
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titre de la tâche"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description de la tâche"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="datetime-local"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="" disabled>Choisir une catégorie</option>
        <option value="Travail">Travail</option>
        <option value="Personnel">Personnel</option>
        <option value="Urgent">Urgent</option>
        <option value="Loisirs">Loisirs</option>
      </select>
      <button type="submit">Ajouter la tâche</button>
    </form>
  );
};

export default TaskForm;
