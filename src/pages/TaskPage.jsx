// Project files
import TaskItem from "../components/TaskItem";

export default function TaskPage({ tasks }) {
  // Constants
  const TasksArray = tasks.map((item) => (
    <TaskItem key={item.id} item={item} />
  ));

  return (
    <div>
      <h1>Task fetch in React</h1>

      {/* We use ternary operation to choose between 2 options */}
      {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator */}
      {tasks.length > 0 ? <ul>{TasksArray}</ul> : <p>No pending tasks 🎉</p>}
    </div>
  );
}
