import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, editStatus] = useState(props.status);
  const activateEditMode = () => {
    setEditMode(true);
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status);
  }
  const onChangeStatus = (e) => {
  editStatus(e.currentTarget.value)};
  useEffect(() => {
    editStatus(props.status)
  }, [props.status])
  return (
      <div>
        {!editMode && (
          <div onDoubleClick={activateEditMode}>
            <span>{props.status || "--------- "}</span>
          </div>
        )}
        {editMode && (
          <div>
            <input autoFocus={true} onChange={onChangeStatus} onBlur={deactivateEditMode} value={status}
            />
          </div>
        )}
      </div>
    );
}
export default ProfileStatusWithHooks;
