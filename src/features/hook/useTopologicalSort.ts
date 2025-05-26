import { useAppContext } from '@context/AppContext';
import { addDependency, topologicalSort, graph } from './DAG';
const useTopologicalSort = () => {
  const { edges } = useAppContext();
  edges.map((edge) => addDependency(edge.source, edge.target));
  const sorted = topologicalSort(graph);
  return { sorted };
};
export default useTopologicalSort;
