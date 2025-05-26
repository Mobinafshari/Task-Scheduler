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
  MarkerType,
} from 'reactflow';

import 'reactflow/dist/style.css';
import CustomFlow from '@features/Home/CustomFlow';
import CustomPanel from '@features/Home/CustomPanel';
import CustomNode from '@features/Home/CustomNode';
import { useAppContext } from '@context/AppContext';
type ParamsType = {
  source: string;
  id: string;
  target: string;
};

const nodeTypes = {
  CustomNode: CustomNode,
};
export default function Home() {
  const [nodes, _, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { addEdge: addEdgeToContext } = useAppContext();

  const onConnect = useCallback(
    (params: Connection | ParamsType) => {
      addEdgeToContext({
        source: params.source ?? '',
        target: params.target ?? '',
      });
      setEdges((eds) => {
        return addEdge(
          {
            ...params,
            markerEnd: {
              type: MarkerType.Arrow,
              color: 'blue',
              width: 40,
              height: 40,
            },
          },
          eds
        );
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
