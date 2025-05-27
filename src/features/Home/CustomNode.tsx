import { NodeProps, Handle, Position, useReactFlow } from 'reactflow';
import styles from './styles/Home.module.scss';
import { Checkbox, IconButton } from '@mui/material';
import CustomIcon from '@assets/Icon';
import toast from 'react-hot-toast';
import useTopologicalSort from '@features/hook/useTopologicalSort';
import { ChangeEvent, MouseEvent } from 'react';
const CustomNode = ({ data, id }: NodeProps) => {
  const { setNodes } = useReactFlow();
  const { sorted } = useTopologicalSort();
  const handleDeleteNode = () => {
    setNodes((nds) => nds.filter((n) => n.id !== id));
    toast.loading('Task Deleted Successfully', {
      icon: (
        <CustomIcon icon="Info" svgProps={{ width: '40px', height: '40px' }} />
      ),
      duration: 1500,
      style: {
        backgroundColor: '#bde0fe',
      },
      position: 'top-left',
    });
  };
  const handleCompleteTask = (e: ChangeEvent<HTMLInputElement>) => {
    if (sorted.indexOf(id) !== -1 || sorted.indexOf(id) !== 0) {
      e.preventDefault();
      return;
    }
  };
  return (
    <div className={styles.node}>
      <div className={styles.label}>{data.label}</div>

      <Handle
        type="target"
        position={Position.Top}
        style={{ width: 10, height: 10 }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ width: 10, height: 10 }}
      />
      <div className={styles['node__icons']}>
        <Checkbox sx={{ padding: 0 }} onClick={(e) => handleCompleteTask(e)} />
        <IconButton sx={{ padding: 0 }} onClick={handleDeleteNode}>
          <CustomIcon
            svgProps={{ width: '26px', height: '26px' }}
            icon="Delete"
          />
        </IconButton>
      </div>
    </div>
  );
};
export default CustomNode;
