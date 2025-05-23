import styles from '@features/Home/styles/Home.module.scss';
import { useCallback } from 'react';
import {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
  Connection,
  Panel,
} from 'reactflow';

import 'reactflow/dist/style.css';
import CustomFlow from '@features/Home/CustomFlow';
import CustomPanel from '@features/Home/CustomPanel';
import CustomNode from '@features/Home/CustomNode';
type ParamsType = {
  source: string;
  id: string;
  target: string;
};

const initialNodes = [
  {
    id: '101',
    position: { x: 100, y: 200 },
    data: { label: 'Hello' },
    type: 'CustomNode',
  },
  {
    id: '202',
    position: { x: 200, y: 500 },
    data: { label: 'World!' },
    type: 'CustomNode',
  },
  {
    id: '303',
    position: { x: 500, y: 100 },
    data: { label: 'Random!' },
    type: 'CustomNode',
  },
];
const initialEdges = [{ id: 'e101-202', source: '101', target: '202' }];

const nodeTypes = {
  CustomNode: CustomNode,
};
export default function Home() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection | ParamsType) => {
      console.log('params', params);
      setEdges((eds) => {
        return addEdge(params, eds);
      });
    },
    [setEdges]
  );
  return (
    <div className={styles.container}>
      <CustomFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
      >
        <Panel position="top-center">
          <CustomPanel />
        </Panel>
        <Background
          color="#ccc"
          variant={BackgroundVariant.Dots}
          gap={12}
          size={3}
        />
      </CustomFlow>
    </div>
  );
}
