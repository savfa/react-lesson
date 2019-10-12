import Post from "./Post";
import {connect} from "react-redux";
import {
    addPostActionCreator,
    textAreaActionCreator
} from "../../../../../redux/profilePost-reducer";

let mapStateToProps = (state) => {
    return {
        postData : state.profilePage.postData,
        textArea: state.profilePage.textArea
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateText: (text) => {
            dispatch(textAreaActionCreator(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);