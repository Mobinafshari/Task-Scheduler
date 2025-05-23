import React, { ComponentProps } from 'react';
import ReactFlow, { ConnectionMode, PanOnScrollMode } from 'reactflow';

type CustomFlowProps = ComponentProps<typeof ReactFlow>;

const CustomFlow: React.FC<CustomFlowProps> = ({ children, ...props }) => {
  return (
    <ReactFlow
      minZoom={1}
      maxZoom={2}
      panOnDrag
      // draggable="true"
      nodesDraggable
      fitView
      fitViewOptions={{
        maxZoom: 1,
        minZoom: 1,
      }}
      connectionMode={ConnectionMode.Loose}
      preventScrolling
      panOnScroll
      panOnScrollMode={PanOnScrollMode.Vertical}
      {...props}
    >
      {children}
    </ReactFlow>
  );
};

export default CustomFlow;
