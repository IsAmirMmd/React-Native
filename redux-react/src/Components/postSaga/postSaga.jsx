import { useState } from "react";

const PostSaga = () => {
  const [postId, setPostId] = useState("");

  return (
    <>
      <h1>redux saga </h1>
      <input
        type="text"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      <button>get post</button>
    </>
  );
};

export default PostSaga;
