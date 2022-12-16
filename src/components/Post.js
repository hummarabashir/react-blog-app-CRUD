import React from "react";

const Post = ({ id, title, content, editPost, deletePost, showPost }) => {
    const text = content;
    const truncate = (str, len) => str.substring(0, (str + ' ').lastIndexOf(' ', len));
  return (
    <>
      <div className="card card-width bg-dark">
        <section key={id}>
        <div className="post-header">
         <div className="postdiv divflex">
          <h3>{title}</h3>
          </div>
          <div className="postdiv divflex2">
          <span title="edit post" onClick={() => editPost(id)}>
            <i className="edit-button far fa-edit fa-2x button-css" />
          </span>
          <span title="delete post" onClick={() => deletePost(id)}>
            <i className="delete-button fas fa-trash fa-2x ml-2 button-css" />
          </span>
          <span title="show post" onClick={() => showPost(id)}>
            <i className="show-button fas fa-eye fa-2x ml-2 button-css" />
          </span>
          </div>
          </div>
          <hr className="new1"></hr>
          {/* <p>{content}</p> */}
          <p>{truncate(text, 1000)} ... </p>
        </section>
      </div>
    </>
  );
};

export default Post;