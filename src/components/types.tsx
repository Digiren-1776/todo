import React from "react";

export type ToDo = {
  task: string,
  deadline: number,
  period: string 
};

export type InputProps = {
  value?: string | number,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  isEnabled?: boolean,
  onSubmit?: () => void,
}

// export type EditProps = {
//   listItem: ToDo,
//   editState: boolean,
//   handleCancel: (editState: boolean) => void 
// }

export type ListBoxProps = {
  value: { name: string },
  onChange: React.Dispatch<React.SetStateAction<{name:
string}>>
  };

export type LiWrapperProps = {
  list: ToDo[],
  deleteTask:(taskToDelete: string) => void
}

export type ListItemProps = {
  listItem: ToDo,
  deleteTask?:(taskToDelete: string) => void
  }

