import { useReactFlow } from 'reactflow';
import { addDependency, topologicalSort } from './DAG';
const useTopologicalSort = () => {
  const { getEdges, getNodes } = useReactFlow();
  const nodes = getNodes().map((node) => node.id);
  const edges = getEdges().map((edge) => ({
    source: edge.source,
    target: edge.target,
  }));
};

export default useTopologicalSort;
