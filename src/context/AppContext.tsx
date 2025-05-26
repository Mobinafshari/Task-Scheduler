import { createContext, ReactNode, useState } from 'react';
type EdgeType = { id: string; source: string; target: string };
type ContextType = {
  edges: EdgeType[];
  addEdge: (edge: EdgeType) => void;
};
const AppContext = createContext<null | ContextType>(null);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [edges, setEdges] = useState<EdgeType[]>([]);
  const addEdge = (edge: EdgeType) => {
    setEdges((prev) => [...prev, edge]);
  };
  return (
    <AppContext.Provider value={{ edges, addEdge }}>
      {children}
    </AppContext.Provider>
  );
};
