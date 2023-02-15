import React from 'react'
import Comments from './Comments'

const CommentsList = ({comments})=>{
    return comments.map((comment,index)=><div key={index}>
        <Comments data={comment} />
        <div className='pl-5 border border-l-black ml-5'>
            <CommentsList comments={comment.replies}/>
       </div>
    </div>
    )
}

export default CommentsList