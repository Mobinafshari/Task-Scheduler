import { Box, Modal } from '@mui/material';
type Props = {
  open: boolean;
  onClose: () => void;
};
function AddTaskModal({ open, onClose }: Props) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box>Add Task</Box>
    </Modal>
  );
}

export default AddTaskModal;
