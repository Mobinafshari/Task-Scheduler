type NodeType = {
  name: string;
  next: NodeType[];
};
class Node implements NodeType {
  name: string;
  next: NodeType[];
  constructor(name: string) {
    this.name = name;
    this.next = [];
  }
}
type DAGType = {
  nodes: Map<string, NodeType>;
  getAllNodes: () => NodeType[];
};
class DAG implements DAGType {
  nodes: Map<string, NodeType>;
  constructor() {
    this.nodes = new Map();
  }
  addNode(name: string) {
    if (this.nodes.has(name)) return;
    this.nodes.set(name, new Node(name));
  }
  addEdge(from: string, to: string) {
    if (!this.getNode(from)) {
      this.addNode(from);
    }
    if (!this.getNode(to)) {
      this.addNode(to);
    }
    this.getNode(from)?.next.push(this.getNode(to)!);
  }
  getNode(name: string) {
    return this.nodes.get(name);
  }
  getAllNodes() {
    return [...this.nodes.values()];
  }
  getStartedNode() {
    const nodeNames = Array.from(this.nodes.keys());
    const hasInputNodes = new Set();
    this.nodes.forEach((node) =>
      node.next.forEach((next) => {
        hasInputNodes.add(next.name);
      })
    );
    return nodeNames.find((node) => !Array.from(hasInputNodes).includes(node));
  }
}
export function topologicalSort(graph: DAGType) {
  const visited = new Set();
  const result: string[] = [];
  const visiting = new Set();

  function dfs(node: NodeType) {
    if (visiting.has(node.name)) {
      throw new Error(`Cycle detected at node ${node.name}`);
    }

    if (visited.has(node.name)) return;

    visiting.add(node.name);
    for (const neighbor of node.next) {
      dfs(neighbor);
    }
    visiting.delete(node.name);
    visited.add(node.name);
    result.push(node.name);
  }

  for (const node of graph.getAllNodes()) {
    dfs(node);
  }

  return result.reverse();
}

const dag = new DAG();

export const addDependency = (from: string, to: string) => {
  dag.addEdge(from, to);
};
