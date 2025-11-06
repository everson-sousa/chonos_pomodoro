export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number | null; //quando o timer chega no final
  completeDate: number | null; //quando a task é interrompida
  interruptDate: number | null;
  type: 'workTime' | 'shortBreakTime' | 'longBreakTime';
};
