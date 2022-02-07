/* eslint-disable jsx-a11y/label-has-associated-control */
import { Container } from './styles';

/* eslint-disable react/prop-types */
export default function Task({ task, onToggleTaskCompletion }) {
  return (
    <Container>
      <input
        id={task.id}
        type="checkbox"
        checked={task.isComplete}
        onClick={() => onToggleTaskCompletion(task.id)}
        readOnly
      />
      <label htmlFor={task.id} />
      {
        task.isComplete
          ? <s>{task.title}</s>
          : <p>{task.title}</p>
      }
    </Container>
  );
}
