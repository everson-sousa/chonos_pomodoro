import './styles/theme.css';
import './styles/global.css';
import { Home } from './pages/Home';
import { useState } from 'react';
import { TaskStateModel } from './models/TaskStateModel';

// export type TaskStateModel = {
//   tasks: TaskModel[];
//   secondsRemaining: number;
//   formattedSecondsRemaining: string;
//   activeTask: TaskModel | null;
//   currentCicle: number;
//   config: {
//     workTime: number;
//     shortBreakTime: number;
//     longBreakTime: number;
//   };
// };

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

export function App() {
  const [state, setState] = useState(initialState);

  return <Home state={state} setState={setState} />;
}
