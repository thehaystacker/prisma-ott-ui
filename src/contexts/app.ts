import { createContext } from "react";

interface IAppContext {
  toggleTheme?: () => void;
}

const AppContext = createContext<IAppContext>({});

export default AppContext;
