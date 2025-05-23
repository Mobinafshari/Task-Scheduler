import { NodeProps, Handle, Position } from 'reactflow';
import styles from './styles/Home.module.scss';
const CustomNode = ({ data }: NodeProps) => {
  return (
    <div className={styles.node}>
      <div className={styles.label}>{data.label}</div>

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};
export default CustomNode;
