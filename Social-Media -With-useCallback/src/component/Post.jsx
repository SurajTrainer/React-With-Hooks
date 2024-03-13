import { useContext } from "react";
import { MdDeleteSweep } from "react-icons/md";
import {PostLists} from "../store/post-list-store";


const Post = ({post}) => {

  const {deletePost} = useContext(PostLists)

    return (
        <div className="card post-card" style={{ width: "50%" }}>
  {/* <img src="..." className="card-img-top" alt="..."/>  */}
  
  <div className="card-body ">
    
    <h5 className="card-title">{post.title}
    <span className="position-absolute btn top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)}><MdDeleteSweep />
</span>
 
    </h5>
    <p className="card-text">{post.body}
    </p>
    {post.tags.map(tag => <span key={tag} className="badge text-bg-success post-tags">{tag}</span>)}

    <div className="alert alert-info reactions" role="alert">
  This Post is reacted by {post.reaction} peoples
</div>
    
  </div>
</div>
    )
}

export default Post