export default function SideBar({ allProjects, addProject, clickProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div id="add-project">
        <button onClick={addProject}>+ Add Project</button>
      </div>
      <ul>
        {allProjects.map((project, projectIndex) => {
          return (
            <li key={projectIndex}>
              <button onClick={() => clickProject(projectIndex)}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
