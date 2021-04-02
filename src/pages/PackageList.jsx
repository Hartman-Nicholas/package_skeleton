// NPM Packages
import { useState, useEffect } from "react";

// Project files
import TaskPage from "./TaskPage";

export default function PackageList() {
  // State
  const [status, setStatus] = useState(0); // 0 = loading data, 1 = data loaded, 2 = error;
  const [tasks, setTasks] = useState([]);

  // Constants
  const API_URL = "https://jsonplaceholder.typicode.com/todos/";

  // Methods
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => onFetchSuccess(json))
      .catch((error) => onFetchFail(error));
  }, [setTasks, setStatus]);

  function onFetchSuccess(json) {
    setTasks(json);
    setStatus(1);
  }

  function onFetchFail(error) {
    console.log("Error", error);
    setStatus(2);
  }

  return (
    <div className="App">
      {/* We use short circuit to simulate a Switch statement */}
      {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND */}
      {status === 0 && <p>🕓 Loading...</p>}
      {status === 1 && <TaskPage tasks={tasks} />}
      {status === 2 && <p>🚨 Please check your connection</p>}
    </div>
  );
}
