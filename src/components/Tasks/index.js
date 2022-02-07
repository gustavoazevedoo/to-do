/* eslint-disable no-restricted-syntax */
import { useEffect, useMemo, useState } from 'react';
import {
  CreateTask, TaskList, Footer,
} from './styles';
import plus from '../../assets/images/icons/plus.svg';
import Task from './Task';

export default function Tasks() {
  const [tasks, setTasks] = useState(() => {
    const storageData = localStorage.getItem('tasks');

    if (storageData) {
      return JSON.parse(storageData);
    }

    return [];
  });
  const [isAllActive, setIsAllActive] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isCompleteActive, setIsCompleteActive] = useState(false);

  const [newTaskTitle, setNewTaskTitle] = useState('');

  const completedTasks = useMemo(() => tasks.filter((task) => task.isComplete), [tasks]);
  const uncompletedTasks = useMemo(() => tasks.filter((task) => !task.isComplete), [tasks]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('render');
  }, [tasks]);

  function handleShowAllTasks() {
    setIsAllActive(true);
    setIsActive(false);
    setIsCompleteActive(false);
  }

  function handleShowActiveTasks() {
    setIsAllActive(false);
    setIsActive(true);
    setIsCompleteActive(false);
  }

  function handleShowCompletedTasks() {
    setIsAllActive(false);
    setIsActive(false);
    setIsCompleteActive(true);
  }

  function handleCreateNewTask(event) {
    event.preventDefault();

    if (newTaskTitle.trim() === '') return;

    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false,
    };

    setTasks((prevState) => [...prevState, newTask]);
    setNewTaskTitle('');
  }

  function handleToggleTaskCompletion(id) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isComplete: !task.isComplete,
        };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function handleRemoveCompleteTasks() {
    setTasks(uncompletedTasks);
  }

  return (
    <>
      <CreateTask>
        <button
          type="submit"
          onClick={handleCreateNewTask}
        >
          <img src={plus} alt="Add task" />
        </button>
        <input
          type="text"
          placeholder="Create a new todo..."
          onChange={(e) => setNewTaskTitle(e.target.value)}
          value={newTaskTitle}
        />
      </CreateTask>

      <TaskList>
        {isAllActive && (
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onToggleTaskCompletion={handleToggleTaskCompletion}
            />
          ))
        )}

        {isActive && (
          uncompletedTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onToggleTaskCompletion={handleToggleTaskCompletion}
            />
          ))
        )}

        {isCompleteActive && (
          completedTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onToggleTaskCompletion={handleToggleTaskCompletion}
            />
          ))
        )}
      </TaskList>

      {tasks.length > 0 && (
        <Footer>
          <span>
            {uncompletedTasks.length}
            {' '}
            items left
          </span>
          <div className="filters">
            <button
              type="button"
              className={isAllActive ? 'active' : null}
              onClick={handleShowAllTasks}
            >
              All
            </button>
            <button
              type="button"
              className={isActive ? 'active' : null}
              onClick={handleShowActiveTasks}
            >
              Active
            </button>
            <button
              type="button"
              className={isCompleteActive ? 'active' : null}
              onClick={handleShowCompletedTasks}
            >
              Completed
            </button>
          </div>
          <button
            type="button"
            onClick={handleRemoveCompleteTasks}
          >
            Clear Completed
          </button>
        </Footer>
      )}
    </>
  );
}
