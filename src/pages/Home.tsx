import styles from '@features/Home/styles/Home.module.scss';
import React, { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
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
type ParamsType = {
  source: string;
  id: string;
  target: string;
};

const initialNodes = [
  { id: '101', position: { x: 100, y: 200 }, data: { label: 'Hello' } },
  { id: '202', position: { x: 200, y: 500 }, data: { label: 'World!' } },
  { id: '303', position: { x: 500, y: 100 }, data: { label: 'Random!' } },
];
const initialEdges = [{ id: 'e101-202', source: '101', target: '202' }];

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
      <CustomFlow nodes={nodes} edges={edges} onConnect={onConnect}>
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
