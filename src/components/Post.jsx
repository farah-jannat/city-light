import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaShare } from "react-icons/fa";



const Post = ({data, bgColor, color }) => {
  return (
    <div>
      <div className="post_container" style={{backgroundColor:`${bgColor}`, color:`${color}`}}>
        <div className="person">
          <div className="author">
            <div className="img">
              <img src={data.pImg} alt="" />
            </div>
            <div className="text">
              <h3>{data.userName}</h3>
              <p>{data.tittle}</p>
            </div>
          </div>
          <div className="dot"><HiDotsVertical /></div>
        </div>
        <p>{data.description}</p>
        <div className="post_img">
          <img src={data.mImg} alt="" />
        </div>
        <div className="like_comments">
          <div className="likes"><FaHeart className="item" />{data.like}
          </div>
          <div className="comment"><FaCommentAlt className="item" />{data.comment}</div>
          <div className="share "><FaShare className="item"/>{data.share}</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
