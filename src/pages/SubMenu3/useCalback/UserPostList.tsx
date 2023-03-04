import React from 'react';
import { Data, Datum } from './data';
import UserPost from './UserPost';

interface Props {
    userPosts: Array<Datum>,
    deletePost: React.MouseEventHandler<HTMLButtonElement>
}

const UserPostsList = (props: Props) => {

    console.log('Rendering UserPostsList component');

    return (
        (
            <div className="px-1">
                {
                    props.userPosts ?
                        props.userPosts.map(post => (
                            <div key={post.id} className="my-1 box flex-row">
                                <UserPost post={post} />
                                <button className="btn btn-danger" data-post-id={post.id} onClick={(post) => props.deletePost(post)}>Delete</button>
                            </div>
                        )) : null
                }
            </div>
        )
    );
};

export default UserPostsList;