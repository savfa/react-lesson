import React from 'react';
import styles from './Profile.module.css';
import PostContainer from "./Post/PostContainer";



const Profile = (props) => {
    /*let postData = [
        {id: 1, title: 'Новый пост', body: 'Тело поста'},
        {id: 2, title: 'Новый пост2', body: 'Тело поста2'},
        {id: 3, title: 'Новый пост3', body: 'Тело поста3'}
    ];*/

    // let newPostElement = React.createRef();


        // let textArea = newPostElement.current.value;
        // props.updateNewPostText(text);


    /*let addPost = () => {
        let newPost = {id: 4, title: 'Новый пост из textarea', body: ''}

        newPost.body = text;
        postData.push(newPost);
    }*/

    return (
        <section className={`${styles.profile} d-flex`}>
            <div className={`${styles.avatar}`}>
                <img src="https://pp.userapi.com/c849520/v849520603/1c0ac2/kklw7-ucsTY.jpg?ava=1" alt=""/>
            </div>
            <div className={`${styles.avatar_info}`}>
                <h1 className={`${styles.posts}`}>Мои посты</h1>
                <PostContainer />
               {/* <textarea ref={newPostElement} placeholder='Что у вас новенького?'></textarea>
                <button className="addPost" >Опубликовать</button>*/}
            </div>
        </section>
    );
}

export default Profile;