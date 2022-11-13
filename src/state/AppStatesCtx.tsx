import React, { createContext, useContext, Dispatch } from "react";
import { AppState, List, Task, appStateReducer } from "./appStateReducer";
import { Action } from "./actions";
import { useImmerReducer } from "use-immer";

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
  dispatch: Dispatch<Action>;
}

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

interface AppProviderProps {
  children: React.ReactNode[] | React.ReactNode;
}

export const AppStateProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  const { lists } = state;

  const getTasksByListId = (listId: string) => {
    return lists.find((list) => list.id === listId)?.tasks || [];
  };

  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
