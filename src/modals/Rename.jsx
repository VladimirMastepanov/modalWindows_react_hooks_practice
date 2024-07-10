import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';

const generateOnSubmit = ({ modalInfo, setItems, onHide }) => (values) => {
  setItems((items) => {
    const item = items.find((i) => i.id === modalInfo.item.id);
    item.body = values.body;
  });
  onHide();
};

const Rename = (props) => {
  const { onHide, modalInfo } = props;
  const { item } = modalInfo;
  const f = useFormik({ onSubmit: generateOnSubmit(props), initialValues: item });
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.select();
  }, []);

  return (
    <Modal show>
      <Modal.Header closeButton onHide={onHide}>
        <Modal.Title>Rename</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={f.handleSubmit}>
          <FormGroup>
            <FormControl
              required
              ref={inputRef}
              onChange={f.handleChange}
              onBlur={f.handleBlur}
              value={f.values.body}
              data-testid="input-body"
              name="body"
            />
          </FormGroup>
          <input type="submit" className="btn btn-primary mt-2" value="submit" />
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Rename;

// BEGIN (write your solution here)

// const Rename = ({
//   show,
//   handleClose,
//   handleChangeTask,
//   task,
// }) => {
//   const inputEl = useRef(null);
//   const formik = useFormik({
//     initialValues: {
//       text: task ? task.text : '',
//       id: task ? task.id : '',
//     },
//     enableReinitialize: true,
//     onSubmit: () => {
//       const { id, text } = formik.values;
//       handleChangeTask({ id, text });
//       handleClose();
//     },
//   });
//   useEffect(() => {
//     if (inputEl.current) {
//       inputEl.current.focus();
//       inputEl.current.select();
//     }
//   }, [show, task]);

//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Rename</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <form onSubmit={formik.handleSubmit}>
//           <FormGroup>
//             <FormControl
//               onChange={formik.handleChange}
//               className="form-control"
//               data-testid="input-body"
//               ref={inputEl}
//               name="text"
//               required=""
//               value={formik.values.text}
//             />
//           </FormGroup>
//           <input className="btn btn-primary" type="submit" value="submit" />
//         </form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default Rename;
