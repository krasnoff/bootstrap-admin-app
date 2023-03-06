import React, { useEffect, useState } from "react";
import { Data, Datum } from "./data";
import UserPostsList from "./UserPostList";

interface Props {
    signedIn: boolean
}

const UserPostsIndex = (props: Props) => {
  const [userPosts, setUserPosts] = useState<Array<Datum>>();

  const fetchUserPosts = async () => {
    const data = await fetch('https://reqres.in/api/users?page=2', {});
    const parsedData = await data.json();
    setUserPosts(parsedData.data);
    //return parsedData as unknown as Data;
  }

  const deletePost = (e: any) => {
    const { postId } = e.currentTarget.dataset;
    const remainingPosts = userPosts?.filter(post => post.id !== parseInt(postId));
    setUserPosts(remainingPosts);
  };

  useEffect(() => {
    fetchUserPosts();
  }, []);


  return (
    <div className="my-1 p-2 box">
      <div className="m-1 py-1">
        <h2 className="heading-md">Your Posts</h2>
        <p className="m-1 p-1">{props.signedIn ? `Signed in`: `Signed out `}</p>
        {
          userPosts &&
          (
            <div className="px-1">
              {
                <UserPostsList userPosts={userPosts}
                  deletePost={deletePost}
                />
              }
            </div>
          )
        }
      </div>
    </div>
  );
};

export default UserPostsIndex;