import React from 'react';
import { Modal, FormGroup } from 'react-bootstrap';

const generateOnSubmit = ({ modalInfo, setItems, onHide }) => (e) => {
  e.preventDefault();
  setItems((items) => items.filter((i) => i.id !== modalInfo.item.id));
  onHide();
};

const Remove = (props) => {
  const { onHide } = props;
  const onSubmit = generateOnSubmit(props);

  return (
    <Modal show>
      <Modal.Header closeButton onHide={onHide}>
        <Modal.Title>Remove</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={onSubmit}>
          <FormGroup>
            <input type="submit" className="btn btn-danger mt-2" value="remove" />
          </FormGroup>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Remove;

// const Remove = ({
//   show,
//   handleClose,
//   handleRemoveTask,
//   removeId,
// }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleRemoveTask(removeId);
//   };
//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Remove</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <form onSubmit={handleSubmit}>
//           <FormGroup>
//             <input className="btn btn-danger" type="submit" value="remove" />
//           </FormGroup>
//         </form>
//       </Modal.Body>
//     </Modal>
//   );
// };
// export default Remove;
