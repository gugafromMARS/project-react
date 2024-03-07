import { forwardRef, useState } from "react";
import photo from "../assets/no-projects.png";

const CreateProject = forwardRef(function Project(
  { newProject, handleCancel, handleNewProject, handleSave },
  ref
) {
  let projectContentOn = (
    <div className="project">
      <div className="adding">
        <button onClick={handleCancel} id="cancel">
          Cancel
        </button>
        <button onClick={handleSave} id="saving">
          Save
        </button>
      </div>
      <div className="creating">
        <label>Title</label>
        <input ref={ref.ref1} type="text"></input>
        <label>Description</label>
        <textarea ref={ref.ref2} type="text" cols="40" rows="3"></textarea>
        <label>Due data</label>
        <input ref={ref.ref3} type="date"></input>
      </div>
    </div>
  );

  let projectContentOff = (
    <div className="project no-creation">
      <img id="logo" src={photo} alt="logo"></img>
      <h1>No Project Selected</h1>
      <p>Select a project or get started with a new one</p>
      <button onClick={handleNewProject}>Create new project</button>
    </div>
  );

  let content = projectContentOff;

  if (newProject) {
    content = projectContentOn;
  }

  return (
    <section>
      {!newProject && content}
      {newProject && content}
    </section>
  );
});

export default CreateProject;
