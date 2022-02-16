/* eslint-disable jsx-a11y/label-has-associated-control */
import { Container } from './styles';
import cross from '../../../assets/images/icons/cross.svg';

/* eslint-disable react/prop-types */
export default function Task({ task, onToggleTaskCompletion, onRemoveTask }) {
  return (
    <Container>
      <div>
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
      </div>

      <button type="button" onClick={() => onRemoveTask(task.id)}>
        <img src={cross} alt="delete" />
      </button>
    </Container>
  );
}
