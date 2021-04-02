export default function TaskItem({ item }) {
  // Constants
  const { title, completed } = item;

  return (
    <li className="task-item">
      <input type="checkbox" checked={completed} readOnly />
      <span>{title}</span>
    </li>
  );
}
