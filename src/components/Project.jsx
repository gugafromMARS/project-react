import photo from "../assets/no-projects.png";

export default function Project({ addProject }) {
  let content = (
    <div className="project no-creation">
      <img id="logo" src={photo} alt="logo"></img>
      <h1>No Project Selected</h1>
      <p>Select a project or get started with a new one</p>
      <button>Create new project</button>
    </div>
  );

  if (addProject) {
    content = (
      <div className="project">
        <div className="adding">
          <button id="cancel">Cancel</button>
          <button id="saving">Save</button>
        </div>
        <div className="creating">
          <label>Title</label>
          <input type="text"></input>
          <label>Description</label>
          <textarea type="text" cols="40" rows="3"></textarea>
          <label>Due data</label>
          <input type="date"></input>
        </div>
      </div>
    );
  }

  return (
    <section>
      {!addProject && content}
      {addProject && content}
    </section>
  );
}
