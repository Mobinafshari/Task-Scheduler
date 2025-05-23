import CustomMuiTextField from '@components/CustomMuiTextField/CustomMuiTextField';
import { Box, Button, Modal } from '@mui/material';
import styles from './styles/Home.module.scss';
import { useReactFlow } from 'reactflow';
import { useState } from 'react';
type Props = {
  open: boolean;
  onClose: () => void;
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 200,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 3,
  px: 4,
  pb: 3,
  borderRadius: '8px',
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
};
function AddTaskModal({ open, onClose }: Props) {
  const { addNodes } = useReactFlow();
  const [task, setTask] = useState('');
  const handleAddNode = () => {
    addNodes({
      id: new Date().toISOString(),
      data: { label: task },
      type: 'CustomNode',
      position: { x: 500, y: 100 },
    });
    onClose();
  };
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <CustomMuiTextField
          label="Add Task"
          onChange={(e) => setTask(e.target.value)}
        />
        <div className={styles['buttonContainer']}>
          <Button variant="contained" onClick={handleAddNode}>
            Submit
          </Button>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </Box>
    </Modal>
  );
}

export default AddTaskModal;
