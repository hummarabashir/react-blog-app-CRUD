import React from "react";

const Post = ({ id, title, content }) => {
  return (
    <>
      <div className="card card-width">
        <section key={id}>
          <h3>{title}</h3>
          <hr className="new1"></hr>
          <p>{content}</p>
        </section>
      </div>
    </>
  );
};

export default Post;
