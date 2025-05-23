import { NodeProps, Handle, Position } from 'reactflow';

const CustomNode = ({ data }: NodeProps) => {
  return (
    <div
      style={{
        padding: 10,
        border: '1px solid #555',
        borderRadius: 8,
        background: '#fff',
        minWidth: 100,
        position: 'relative',
      }}
    >
      {/* Default content */}
      <div style={{ fontWeight: 'bold', marginBottom: 4 }}>{data.label}</div>

      {/* Custom extra content */}
      <div style={{ fontSize: 12, color: '#888' }}>
        {data.description || 'Extra content here'}
      </div>

      {/* Optional: Add handles for connection */}
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};
export default CustomNode;
