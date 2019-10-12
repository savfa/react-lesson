const ADD_POST = 'ADD-POST';
const TEMA_POST = 'TEMA_POST';
const TEXT_AREA = 'TEXT-AREA';

let initialState = {
    postData: [
        {id: 1, title: 'Новый пост', body: 'Тело поста'},
        {id: 2, title: 'Новый пост2', body: 'Тело поста2'},
        {id: 3, title: 'Новый пост3', body: 'Тело поста3'}
    ],
    temPost: '',
    textArea: ''
};
const profilePostReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postData: [...state.postData, { id: ++state.postData.length, title: state.temPost, body: state.textArea}],
                temPost: '',
                textArea: ''
            };
        case TEMA_POST:
            return {
                ...state,
                temPost: action.tem.target.value
            };
        case TEXT_AREA:
            return {
                ...state,
                textArea: action.text.target.value
            };

        default:
            return state
    }

}

export const addPostActionCreator = () => ( { type: ADD_POST } );
export const temPostActionCreator = (tem) => ( { type:TEMA_POST, tem} );
export const textAreaActionCreator = (text) => ( { type:TEXT_AREA, text} );



export default profilePostReducer;

