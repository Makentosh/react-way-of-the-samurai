import React from 'react';
import './ProfileStatus.scss';

class ProfileStatus extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      status: this.props.status
    }
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  };

  deActivateEditMode = () => {
    this.setState({
      editMode: false
    });

    this.props.updateStatus(this.state.status)
  };


  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }


  render() {
    return (
        <div>
          {
            !this.state.editMode
                ? <div>
                    <div>Статус</div>
                    <div onDoubleClick={this.activateEditMode}>{this.props.status || " установите статус"}</div>
                  </div>
                : <div>
                    <input autoFocus={true}
                           onBlur={this.deActivateEditMode}
                           type="text"
                           onChange={this.onStatusChange}
                           value={this.state.status}/>
                  </div>
          }

        </div>
    )
  }
}

export default ProfileStatus;
