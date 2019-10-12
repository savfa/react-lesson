import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {

    let postItem = props.postData.map( (post)=> {
        return (
            <div className={`${styles.myPosts} d-flex`} key={post.id}>
                <h1 className="title">{post.title}</h1>
                <div className={`${styles.postBody}`}>{post.body}</div>
            </div>
        )
    } );

    return (
        <React.Fragment>
            {postItem}
            <input type="text" onChange={props.updateTem} value={props.temPost} placeholder='Тема поста'/>
            <textarea onChange={props.updateText} value={props.textArea} placeholder='Что у вас новенького?'/>
            <button className="addPost" onClick={props.addPost}>Опубликовать</button>
        </React.Fragment>
    )
}

export default Post;