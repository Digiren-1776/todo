import { Fragment } from "react"
import { InputProps } from "./types"

export const TextInput = ({value, onChange}: InputProps) => {
  return (
   <Fragment>
    <input
      required
      type="text"
      placeholder='Enter task here'
      name="task"
      value={value} 
      onChange={onChange}
      className="block w-full font-mukta text-center md:basis-3/5 mr-2 pl-2 py-2 placeholder:text-sm placeholder:font-semibold placeholder:bg-gray-200 placeholder:focus:text-transparent"
    />
    </Fragment>  
  )
}

export const NumInput = ({value, onChange}: InputProps) => {
  return (
    <Fragment>
      <input
        required
        title="numeric input"
        type="number"
        name="deadline"
        value={value}
        onChange={onChange}
        className="w-2/5 font-mukta text-center rounded-lg mr-4"
      />
    </Fragment>
  )
}

export const ButtonInput = ({isEnabled, onSubmit}: InputProps) => {
  return (
    <Fragment>
      <button
      disabled={!isEnabled}
      onClick={onSubmit}
      type="submit"
      className="block mx-auto bg-black text-teal-600 font-semibold md:basis-1/5 px-12 py-2 rounded-full
      hover:text-white hover:bg-teal-600 disabled:bg-gray-400 disabled:text-gray-300">
      Add Task
      </button>
    </Fragment>
  )
}