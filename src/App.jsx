import React, { useState } from 'react';
import { useImmer } from 'use-immer';
import getModal from './modals/index.js';

const renderItem = ({ item, showModal }) => (
  <div key={item.id}>
    <span className="mr-3">{item.body}</span>
    <button type="button" className="border-0 btn btn-link mr-3 text-decoration-none" data-testid="item-rename" onClick={() => showModal('renaming', item)}>rename</button>
    <button type="button" className="border-0 btn btn-link text-decoration-none" data-testid="item-remove" onClick={() => showModal('removing', item)}>remove</button>
  </div>
);

const renderModal = ({ modalInfo, hideModal, setItems }) => {
  if (!modalInfo.type) {
    return null;
  }

  const Component = getModal(modalInfo.type);
  return <Component modalInfo={modalInfo} setItems={setItems} onHide={hideModal} />;
};

const App = () => {
  const [items, setItems] = useImmer([]);
  const [modalInfo, setModalInfo] = useState({ type: null, item: null });
  const hideModal = () => setModalInfo({ type: null, item: null });
  const showModal = (type, item = null) => setModalInfo({ type, item });

  return (
    <>
      <div className="mb-3">
        <button type="button" onClick={() => showModal('adding')} data-testid="item-add" className="btn btn-secondary">add</button>
      </div>
      {items.map((item) => renderItem({ item, showModal }))}
      {renderModal({ modalInfo, hideModal, setItems })}
    </>
  );
};

export default App;

// const App = () => {
//   const initialState = {
//     tasks: {},
//     ids: [],
//   };

//   const [showAdd, setShowAdd] = useState(false);
//   const [showRemove, setShowRemove] = useState(false);
//   const [showRename, setShowRename] = useState(false);
//   const [removeId, setRemoveId] = useState(null);
//   const [renameTask, setRenameTask] = useState(null);

//   const Add = getModal('adding');
//   const Rename = getModal('renaming');
//   const Remove = getModal('removing');

//   const [tasks, setTasks] = useImmer(initialState);

//   const handleCloseAdd = () => setShowAdd(false);
//   const handleCloseRemove = () => setShowRemove(false);
//   const handleCloseRename = () => setShowRename(false);

//   const handleSubmitForm = ({ id, text }) => {
//     setTasks((draft) => {
//       const newTask = {
//         [id]: {
//           text,
//           id,
//         },
//       };
//       draft.tasks = { ...draft.tasks, ...newTask };
//       draft.ids.push(id);
//       setShowAdd(false);
//     });
//   };

//   const handleChangeTask = ({ id, text }) => {
//     setTasks((draft) => {
//       draft.tasks[id].text = text;
//     });
//   };

//   const handleRemoveTask = (id) => {
//     setTasks((draft) => {
//       delete draft.tasks[id];
//       const index = draft.ids.findIndex((el) => el === id);
//       if (index !== -1) {
//         draft.ids.splice(index, 1);
//       }
//     });
//     setShowRemove(false);
//   };

//   const onPressRename = (task) => {
//     setRenameTask(task);
//     setShowRename(true);
//   };
//   const onPressRemove = (id) => {
//     setRemoveId(id);
//     setShowRemove(true);
//   };

//   return (
//     <>
//       <div className="mb-3">
//         <button type="button" data-testid="item-add" className="btn btn-secondary" onClick={() => setShowAdd(true)}>
//           add
//         </button>
//       </div>
//       {tasks.ids.length > 0 && tasks.ids.map((id) => (
//         <div key={id}>
//           <span className="mr-3">{tasks.tasks[id].text}</span>
//           <button type="button" className="border-0 btn btn-link mr-3 text-decoration-none" data-testid="item-rename" onClick={() => onPressRename(tasks.tasks[id])}>rename</button>
//           <button type="button" className="border-0 btn btn-link text-decoration-none" data-testid="item-remove" onClick={() => onPressRemove(id)}>remove</button>
//         </div>
//       ))}
//       <Add show={showAdd} handleClose={handleCloseAdd} handleSubmitForm={handleSubmitForm} />
//       {renameTask !== null && (
//         <Rename show={showRename} handleClose={handleCloseRename} handleChangeTask={handleChangeTask} task={renameTask} />
//       )}
//       {removeId !== null && (
//         <Remove show={showRemove} handleClose={handleCloseRemove} handleRemoveTask={handleRemoveTask} removeId={removeId} />
//       )}
//     </>
//   );
// };

// export default App;
