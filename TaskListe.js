import React from "react";

const TaskList = ({ tasks, deleteTask }) => {
  // Regroupement des tâches par catégorie
  const groupedTasks = tasks.reduce((acc, task) => {
    acc[task.category] = acc[task.category] || [];
    acc[task.category].push(task);
    return acc;
  }, {});

  return (
    <div className="task-list">
      <h1>Liste des tâches</h1>
      {Object.keys(groupedTasks).map((category) => (
        <div key={category} className="task-category">
          <h2>{category}</h2>
          <ul>
            {groupedTasks[category].map((task) => (
              <li
                key={task.id}
                className={task.dueDate && new Date(task.dueDate) - new Date() < 3600000 ? 'due-soon' : task.completed ? 'completed' : ''}
              >
                <span>
                  {task.title} (Échéance : {new Date(task.dueDate).toLocaleString()})
                </span>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="delete-button"
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
