import { LiWrapperProps, ToDo } from "../types";
import ListItems from "./ListItems";

const ListItemWrapper = ({list, deleteTask}: LiWrapperProps) => {
 
  return (
    <div className="bg-orange-100 mt-8 h-auto p-4 rounded-xl mb-1">
      <div className="border-b-4 border-black flex justify-between mb-2">
        <p className="py-2 px-6 font-semibold">Task</p>
        <p className="py-2 px-6 font-semibold">Deadline</p>
      </div>
      {list.map((task: ToDo, key: number) => {
        return <ListItems listItem={task} deleteTask={deleteTask} key={key}/>
      })}
    </div>     
  )
}

export default ListItemWrapper;