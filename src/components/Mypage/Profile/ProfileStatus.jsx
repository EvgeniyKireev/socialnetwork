import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  }
  deactivateEditMode = () => {
    this.setState({editMode: false});
    this.props.updateStatus(this.state.status)
  }

  onChangeStatus = (e) => {
    this.setState({status: e.currentTarget.value});
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div onDoubleClick={this.activateEditMode}>
            <span>{this.props.status || '--------- '}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input onChange={this.onChangeStatus} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
          </div>
        )}
      </div>
    );
  }
}
export default ProfileStatus;
