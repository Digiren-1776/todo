import { useState, ChangeEvent } from 'react';
import Listbox, {periodDeadline} from './ListBox'
import { ListItemProps, ToDo } from '../types';

const ListItems = ({listItem, deleteTask}: ListItemProps) => {
  const {task, deadline, period} = listItem;
  const [newTask, setNewTask] = useState<string>("");
  const [newDeadline, setNewDeadline] = useState<number>(1);
  const [newPeriod, setNewPeriod] = useState(periodDeadline[0]);
  const [savedEdit, setSavedEdit] = useState<ToDo>();
  const [editState, setEditState] = useState<boolean>(false);
  const [onSave, setOnSave] = useState<boolean>(false);
  const [cancelClicked, setCancelClicked] = useState<boolean>(false);
  const {name} = newPeriod;
  const updatedPeriod = name;  

  const handleChange = (e: ChangeEvent<HTMLInputElement>) : void => {
    if (e.target.name === "task") {
      setNewTask(e.target.value);
    } else {
      setNewDeadline(Number(e.target.value));
  }  
};

 const handleEdit = (): void => {
   setCancelClicked(!cancelClicked);
   setEditState(true);
   setOnSave(false);
   console.log(cancelClicked);
   
 }

 const handleCancel = (): void => {
   setCancelClicked(!cancelClicked);
   setEditState(false);
  }

  const handleSave = (): void => {
    const updatedTask = { task: newTask, deadline: newDeadline, period: updatedPeriod };
    setSavedEdit(updatedTask);
    setOnSave(true);
    setEditState(false);
  };
  
  
  return (
    <div>
      {editState ? (
      <div className='border-2 border-black font-mukta py-2 text-cyan-700'>
      <input 
      required
      title="Save Task"
      type="text"
      name="task"
      placeholder={task}
      value={newTask}
      onChange={handleChange} 
      className="w-2/5 font-mukta px-1 ml-1 overflow-x-auto placeholder:text-sm placeholder:font-semibold placeholder:bg-gray-200 placeholder:focus:text-transparent" 
      />
      <div className='border-2 border-red-800 flex-none w-36'>
        <span className='bg-orange-200/50 mr-4 border-2'>
          <button type="button" 
          disabled={newTask.length <= 0 || newDeadline <= 0} 
          title="Save Task" onClick={handleSave} 
          className="disabled:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-800 hover:scale-[115%] disabled:hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor">
          <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
          </svg>
            {" "}
          </button>
          <button type="button" title="Cancel" onClick={handleCancel}
          className="disabled:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 hover:scale-[115%]" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
            {""}
          </button>
        </span>
        <span className='flex text-center align-top py-2'>
          <input
          title="Edit Number" 
          type="number"
          name="deadline"
          value={newDeadline}
          onChange={handleChange}
          className='w-1/2 text-center'
          />
          <Listbox value={newPeriod} onChange={setNewPeriod}/>
        </span>
      </div>
    </div> 
      ) : (
        <div className='flex justify-between font-mukta py-2 text-cyan-700'>
          <span className='px-1 grow mr-2 overflow-x-auto'>
          {onSave ? newTask : savedEdit?.task ? savedEdit.task : task}
          </span>
          <div title="rightside" className='justify-between w-46'>
            <span className='bg-orange-200/50 text-purple-800 mr-4'>
              <button title="Edit Task" onClick={handleEdit}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-black hover:scale-[115%]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                {" "}
              </button>
              <button title="Delete Task" onClick={()=>deleteTask?.(listItem.task)}>
                <svg className="w-5 h-5 hover:text-red-800 hover:scale-[115%]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {""}
              </button>
            </span>
            <span className='text-center align-top py-2'>
              {onSave ? newDeadline : savedEdit?.deadline ? savedEdit.deadline : deadline}
              {/* {onSave ? newDeadline : newDeadline === deadline ? deadline: newDeadline} */}
              {" "}
              {onSave ? updatedPeriod : cancelClicked ? savedEdit?.period : period}  
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListItems;
