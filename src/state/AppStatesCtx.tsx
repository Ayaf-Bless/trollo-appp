import React, { createContext, useContext } from "react";

interface Task {
  id: string;
  text: string;
}

interface List {
  id: string;
  text: string;
  tasks: Task[];
}

export interface AppState {
  lists: List[];
}

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
};

interface AppStateContextProps {
  lists: List[];
  getTasksByListId(listId: string): Task[];
}

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

interface AppProviderProps {
  children: React.ReactNode[] | React.ReactNode;
}

export const AppStateProvider = ({ children }: AppProviderProps) => {
  const { lists } = appData;

  const getTasksByListId = (listId: string) => {
    return lists.find((list) => list.id === listId)?.tasks || [];
  };

  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
