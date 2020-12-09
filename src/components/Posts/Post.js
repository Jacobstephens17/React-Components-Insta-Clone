import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { posts, likePost} = props;

  return (
    <div className='post-border'>
      <PostHeader
        username={posts.username}
        thumbnailUrl={posts.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={posts.imageUrl}
        />
      </div>
      <LikeSection likePost={() => likePost(posts.id)} numberOfLikes={posts.likes} key={posts.id}/>
      <Comments comments={posts.comments} />
    </div>
  );
};

export default Post;
