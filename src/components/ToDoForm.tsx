import { ChangeEvent, FC, Fragment, useState } from "react";
import Listbox, {periodDeadline} from './ListElements/ListBox'
import ListItemWrapper from "./ListElements/ListItemWrapper";
import { TextInput, NumInput, ButtonInput } from "./InputElements";
import { ToDo } from "./types";

const ToDoForm: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(1);
  const [selected, setSelected] = useState(periodDeadline[0]);
  const [list, setList] = useState<ToDo[]>([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const isEnabled = task.length > 0 && deadline > 0;
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) : void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    } 
  };
  
  const handleSubmit = (): void => {
    const {name} = selected;
    const newTask = { task: task, deadline: deadline, period: name};
    setList([...list, newTask]);
    setButtonClicked(true);
    setTask("");
    setDeadline(1);
    setSelected(periodDeadline[0]);
  };

  const deleteTask = (taskToDelete: string): void => {
    setList(list.filter((item) => { 
      return item.task !== taskToDelete;
    }))}     
  
  return (
    <Fragment>
      <div>
        <div className="space-y-4">
          <TextInput value={task} onChange={handleChange}/>
          <div title='listbox-wrapper' className="flex justify-center">
            <NumInput value={deadline} onChange={handleChange}/>
            <Listbox value={selected} onChange={setSelected}/>
          </div>  
          <ButtonInput isEnabled={isEnabled} onSubmit={handleSubmit}/>
          {!isEnabled && <p className="text-red-500 font-bold text-sm text-center">*Fill in fields prior to submitting*</p> }
        </div>
      </div>

      {buttonClicked ? <ListItemWrapper list={list} deleteTask={deleteTask}/> : ""}
    </Fragment>
  );
};

export default ToDoForm;
