import { useReactFlow } from 'reactflow';
import { addDependency, topologicalSort, graph } from './DAG';
const useTopologicalSort = () => {
  const { getEdges } = useReactFlow();
  getEdges().map((edge) => addDependency(edge.source, edge.target));
  const sorted = topologicalSort(graph);
  return { sorted };
};
export default useTopologicalSort;
