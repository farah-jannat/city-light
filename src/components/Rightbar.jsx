import React from 'react'

const Rightbar = ({data, bgColor,color}) => {
  return (
    <div>
      <div className="right_container" style={{backgroundColor:`${bgColor}`, color:`${color}`}}>
        <div className="post_img">
          <img id='_img' src={data.img} alt="" />
          <div className="inside_img">
            <div className="img">
              <img src={data.authorImg} alt="" />
            </div>
            <div className="text">
              <h3>{data.authorName}</h3>
              <p>{data.authorText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightbar
