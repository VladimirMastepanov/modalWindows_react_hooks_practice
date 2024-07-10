import React, { useEffect, useRef } from 'react';
import _ from 'lodash';
import { useFormik } from 'formik';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';

const generateOnSubmit = ({ setItems, onHide }) => (values) => {
  const item = { id: _.uniqueId(), body: values.body };
  setItems((items) => {
    items.push(item);
  });
  onHide();
};

const Add = (props) => {
  const { onHide } = props;
  const f = useFormik({ onSubmit: generateOnSubmit(props), initialValues: { body: '' } });

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Modal show>
      <Modal.Header closeButton onHide={onHide}>
        <Modal.Title>Add</Modal.Title>
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

export default Add;

// const Add = ({ handleSubmitForm, handleClose, show }) => {
//   const inputEl = useRef(null);
//   const formik = useFormik({
//     initialValues: {
//       task: '',
//     },
//     onSubmit: () => {
//       const id = _.uniqueId();
//       const task = {
//         text: formik.values.task,
//         id,
//       };
//       formik.values.task = '';
//       handleSubmitForm(task);
//     },
//   });
//   useEffect(() => {
//     if (inputEl.current) {
//       inputEl.current.focus();
//     }
//   }, [show]);

//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Add</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <form onSubmit={formik.handleSubmit}>
//           <FormGroup>
//             <FormControl
//               onChange={formik.handleChange}
//               className="form-control"
//               data-testid="input-body"
//               ref={inputEl}
//               name="task"
//               required=""
//               value={formik.values.task}
//             />
//           </FormGroup>
//           <input className="btn btn-primary" type="submit" value="submit" />
//         </form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default Add;
