import { forwardRef } from "react";

const Project = forwardRef(function Project(
  { tasksHandler, selectedProject, deleteProject, clearTask },
  ref
) {
  const haveProjectSelected = Object.keys(selectedProject).length != 0;

  const haveTasks = selectedProject.tasks.length > 0;

  let content = (
    <section>
      <div className="project-content">
        <div className="project-info">
          <h1>{selectedProject.title}</h1>
          <button onClick={() => deleteProject(selectedProject)}>Delete</button>
          <p>{selectedProject.date}</p>
          <p>{selectedProject.description}</p>
        </div>
        <div className="project-tasks">
          <h2>Tasks</h2>
          <input ref={ref} type="text"></input>
          <button onClick={() => tasksHandler(selectedProject)}>
            Add task
          </button>
          {!haveTasks && <p>This project doesn't have any tasks yet.</p>}
          {haveTasks && (
            <div className="tasks">
              <ul>
                {selectedProject.tasks.map((task, taskIndex) => (
                  <li key={taskIndex}>
                    {task}
                    <button
                      onClick={() => clearTask(selectedProject, taskIndex)}
                    >
                      Clear
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );

  return <>{haveProjectSelected && content}</>;
});

export default Project;
