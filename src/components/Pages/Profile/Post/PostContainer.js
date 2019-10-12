import Post from "./Post";
import {connect} from "react-redux";
import {
    addPostActionCreator, temPostActionCreator,
    textAreaActionCreator
} from "../../../../redux/profilePost-reducer";

let mapStateToProps = (state) => {
    return {
        postData : state.profilePage.postData,
        temPost: state.profilePage.temPost,
        textArea: state.profilePage.textArea
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (e) => {
            e.persist();
            dispatch(addPostActionCreator())
        },
        updateText: (text) => {
            text.persist();
            dispatch(textAreaActionCreator(text))
        },
        updateTem: (tem) => {
            tem.persist();
            dispatch(temPostActionCreator(tem))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);