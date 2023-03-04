import React from "react";
import { Datum } from "./data";

interface Props {
    post: Datum
}

const UserPost = (props: Props) => {
    // console.log('Rendering UserPost component')

    return (
        <div className="my-1 flex-row-left">
            <a href={`#${props.post.id}`} className="">
                <h4 id={props.post.id.toString()} className="px-2 font-sm font-bold">
                    {props.post.first_name} {props.post.last_name}
                </h4>
            </a>
        </div>
    );
};

export default UserPost;