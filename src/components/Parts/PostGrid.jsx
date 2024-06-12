/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import PostCard from "./Post";

const PostGrid = ({ posts }) => {
  return (
    <section className="post-grid grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
      {posts.map((post) => {
        return (
          <Link key={post._id} to={`/edit/${post._id}`}>
            <PostCard
              key={post._id}
              title={post.title}
              description={post.description}
              posted={post.posted}
            />
          </Link>
        );
      })}
    </section>
  );
};

export default PostGrid;
