import { NodeProps, Handle, Position, useReactFlow } from 'reactflow';
import styles from './styles/Home.module.scss';
import { Checkbox, IconButton } from '@mui/material';
import CustomIcon from '@assets/Icon';
import toast from 'react-hot-toast';
const CustomNode = ({ data, id }: NodeProps) => {
  const { setNodes } = useReactFlow();
  return (
    <div className={styles.node}>
      <div className={styles.label}>{data.label}</div>

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
      <div className={styles['node__icons']}>
        <Checkbox sx={{ padding: 0 }} />
        <IconButton
          sx={{ padding: 0 }}
          onClick={() => {
            setNodes((nds) => nds.filter((n) => n.id !== id));
            toast.loading('Task Deleted Successfully', {
              icon: (
                <CustomIcon
                  icon="Info"
                  svgProps={{ width: '40px', height: '40px' }}
                />
              ),
              duration: 1500,
              style: {
                backgroundColor: '#bde0fe',
              },
              position: 'top-left',
            });
          }}
        >
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
