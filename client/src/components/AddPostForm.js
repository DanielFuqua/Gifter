import React, { useContext, useRef } from "react";
import { PostContext } from "../providers/PostProvider";
import { Form, FormText, Row, FormGroup, Button, Input } from "reactstrap";

const AddPostForm = () => {
  const { addPost } = useContext(PostContext);

  const title = useRef("title")
  const imageUrl = useRef("image")
  const userId = useRef("userId")
  const caption = useRef("caption")
  const form = useRef("form")

    const constructNewPost = () => {
        const newPost = {
            title: title.current.value,
            imageUrl: imageUrl.current.value,
            caption: caption.current.value,
            DateCreated: new Date(),
            userProfileId: parseInt(userId.current.value),
        }
        addPost(newPost).then(() => form.current.reset);
    }


    return (
        <form className="postForm" ref={form}>
            <h2 className="postForm__title">New Post</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="postTame">Post title: </label>
                    <input
                        type="text"
                        id="postTame"
                        ref={title}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Post title"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="postImage">Image Url: </label>
                    <input
                        type="text"
                        id="postImage"
                        ref={imageUrl}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Image url"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="userProfileId">UserId: </label>
                    <input
                        type="integer"
                        id="userProfileId"
                        ref={userId}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="User id"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="caption">Caption: </label>
                    <input
                        type="text"
                        id="caption"
                        ref={caption}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="User id"
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewPost()
                    }
                }
                className="btn btn-primary">
                Save Post
            </button>
        </form>
    )
};

export default AddPostForm;