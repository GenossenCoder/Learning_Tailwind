import React from 'react'
import {AiFillHeart} from 'react-icons/ai';

const Post = () => {
  return (
    <div className=" rounded-lg p-2 bg-slate-50/5 text-white overflow-hidden max-h-96">
      <h1 className="text-center font-bold text-white">Sample Title</h1>
      <h2 className="text-right font-bold text-white">Sample Date</h2>
      <h3 className="text-right font-bold text-white">Sample Author</h3>
      <div className="bg-gray-700/40 m-1 rounded-md text-white  break-words max-h-60 overflow-hidden p-2">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   
      Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,
      </div>
      <div className="flex justify-around">
      <a className="underline ">433 Comments</a>
      <div className="flex">
        <p className="m-1">1</p>
        <button><AiFillHeart color="red"/></button>
      </div>
      </div>
    </div>
  )
}

export default Post