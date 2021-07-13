import { Avatar } from '@material-ui/core';
import React from 'react';
import InputOption from './InputOption';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'

const Post = ({ name, description, message, photoUrl }) => {
    return (
        <div  className="post">
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <p>{message}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__button">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="grey" className={"MyCustomButton"} />
                <InputOption Icon={ChatOutlinedIcon} title="Chat" color="grey" className="post__Icon" />
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="grey" className="post__Icon" />
                <InputOption Icon={SendOutlinedIcon} title="Send" color="grey" className="post__Icon" />
            </div>

        </div>
    );
}

export default Post;
