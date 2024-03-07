import { useRef, useState } from "react";
import CreateProject from "./components/CreateProject";
import SideBar from "./components/SideBar";
import Project from "./components/Project";

function App() {
  const [creatingNewProject, setCreatingNewProject] = useState(false);
  const [projects, setProjects] = useState([]);
  const [projectSelected, setProjectSelected] = useState({});
  const [isShowing, setIsShowing] = useState(false);

  const title = useRef();
  const description = useRef();
  const date = useRef();
  const task = useRef();

  function handleNewProject() {
    setCreatingNewProject(true);
    setIsShowing(false);
  }

  function handleCancel() {
    setCreatingNewProject(false);
  }

  function handleSave() {
    const newProject = {
      title: title.current.value,
      description: description.current.value,
      date: date.current.value,
      tasks: [],
    };
    handleProjects(newProject);
    setCreatingNewProject(false);
  }

  function handleProjects(newProject) {
    setProjects((prevProjects) => [...prevProjects, newProject]);
  }

  function handleClickProject(projectIndex) {
    setProjectSelected(projects[projectIndex]);
    setIsShowing(true);
  }

  function handleTasks(project) {
    project.tasks.push(task.current.value);

    const index = projects.indexOf(project);
    setProjects((prevProjects) => {
      const updateProjects = [...prevProjects];
      updateProjects[index] = project;
      return updateProjects;
    });
  }

  function handleDelete(project) {
    if (projects.includes(project)) {
      setProjects((prevProjects) => {
        const index = prevProjects.indexOf(project);
        const updatedProjects = [...prevProjects];
        updatedProjects.splice(index, 1);
        return updatedProjects;
      });
    }
    setIsShowing(false);
  }

  function handleTaskClear(project, taskIndex) {
    setProjects((prevProjects) => {
      const index = projects.indexOf(project);
      const updatedProjects = [...prevProjects];
      updatedProjects[index].tasks.splice(taskIndex, 1);
      return updatedProjects;
    });
  }

  return (
    <main className="h-screen my-8">
      <div id="content">
        <SideBar
          allProjects={projects}
          addProject={handleNewProject}
          clickProject={handleClickProject}
        />
        {!isShowing && (
          <CreateProject
            ref={{ ref1: title, ref2: description, ref3: date }}
            newProject={creatingNewProject}
            handleNewProject={handleNewProject}
            handleCancel={handleCancel}
            handleSave={handleSave}
          />
        )}
        {isShowing && (
          <Project
            ref={task}
            tasksHandler={handleTasks}
            selectedProject={projectSelected}
            deleteProject={handleDelete}
            clearTask={handleTaskClear}
          />
        )}
      </div>
    </main>
  );
}

export default App;
