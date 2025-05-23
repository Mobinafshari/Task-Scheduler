import { Button } from '@mui/material';
import styles from './styles/Home.module.scss';
import { useState } from 'react';
import AddTaskModal from './AddTaskModal';
function CustomPanel() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.customPanel}>
        <Button
          variant="contained"
          onClick={() => setOpen(true)}
          color="primary"
        >
          Add Task
        </Button>
      </div>
      <AddTaskModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default CustomPanel;
