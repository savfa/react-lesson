import React from 'react';

class Status extends React.Component {

        state = {
            status: "",
            editMode: false
        };

    editStatus = () => {
        this.setState({editMode: true})
    };
    updateStatus = () => {
        this.setState({editMode: false})
    };
    inputChange = (e)=> {
        this.setState({status: e.currentTarget.value})
    };
    render() {

        return (
            <div>
                {!this.state.editMode &&
                    <div onClick={this.editStatus}>{(this.state.status) ? this.state.status : this.props.status}</div>
                }
                {this.state.editMode &&
                    <input type="text" onChange={this.inputChange} onBlur={this.updateStatus} value={this.state.status}/>
                }

            </div>
        )
    }


}

export default Status;