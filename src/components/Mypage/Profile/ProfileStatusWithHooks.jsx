import React, {useEffect, useState} from "react";
import preloader from "../../Users/assets/images/preloader.svg";

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
  if (!props.profile) {
    return <div>loading...</div>;
  }
  return (
      <div>
        {props.id === props.profile.userId ? (<div>{!editMode && (
            <div onDoubleClick={activateEditMode}>
              <span>{props.status || "--------- "}</span>
            </div>
        )}
          {editMode && (
              <div>
                <input autoFocus={true} onChange={onChangeStatus} onBlur={deactivateEditMode} value={status}
                />
              </div>
          )}</div>) : <span>{props.status || "--------- "}</span>}
      </div>
    );
}
export default ProfileStatusWithHooks;
