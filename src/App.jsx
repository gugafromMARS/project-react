import { useRef, useState } from "react";
import Project from "./components/Project";
import SideBar from "./components/SideBar";

export const project = {
  title: "",
  description: "",
  date: "",
};

function App() {
  const [addingProject, setAddingProject] = useState(false);

  const title = useRef();
  const description = useRef();
  const date = useRef();

  function handleClick() {
    setAddingProject(true);
  }

  return (
    <main className="h-screen my-8">
      <div id="content">
        <SideBar addProject={handleClick} />
        <Project addProject={addingProject} />
      </div>
    </main>
  );
}

export default App;
