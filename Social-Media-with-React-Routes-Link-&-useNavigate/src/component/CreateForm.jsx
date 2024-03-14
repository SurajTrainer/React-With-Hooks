import { useContext } from "react"
import { useRef } from "react"
import { PostLists } from "../store/post-list-store"
import { useNavigate } from "react-router-dom"

const CreateForm = () => {

  const {addPost} = useContext(PostLists)

  const navigate = useNavigate()

  const userIdElement = useRef()
  const postTitleElement = useRef()
  const postBodyElement = useRef()
  const reactionsElement = useRef()
  const priceElement = useRef()
  const tagsElement = useRef()

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const category = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const rating = reactionsElement.current.value;
    const price = priceElement.current.value;
    const brand = tagsElement.current.value.split(' ');

    // userIdElement.current.value = ''
    // postTitleElement.current.value = ''
    // postBodyElement.current.value = ''
    // reactionsElement.current.value = ''
    // tagsElement.current.value = ''

    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: postTitle,
        price : price,
        description : postBody,
        rating : rating,
        brand : brand,
        category : category,  
      })
    })
    .then(res => res.json())
    .then((product => addPost(product)));
    navigate('/')
  }

    return (
        <form className="create-form" onSubmit={handleSubmit}>

<div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter your catogory here</label>
    <input type="text" ref={userIdElement} className="form-control" id="userId" placeholder="enter category"/>
  </div>

  <div className="mb-3">
    <label htmlFor="title"  className="form-label">Form title</label>
    <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder="enter title"/>
  </div>


  <div className="mb-3">
    <label htmlFor="body" className="form-label">Form Control</label>
    <textarea rows={3}  ref={postBodyElement} type="text" className="form-control" id="body" placeholder="enter content"/>
  </div>


  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">rating here</label>
    <input type="text" ref={reactionsElement}  className="form-control" id="reactions" placeholder="how many people reacted this"/>
  </div>


  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">price here</label>
    <input type="text" ref={priceElement}  className="form-control" id="price" placeholder="how much price this"/>
  </div>
 

  <div className="mb-3">
    <label htmlFor="tag"  className="form-label">brand name</label>
    <input type="text" ref={tagsElement} className="form-control" id="tag" placeholder="enter your hastags here"/>
  </div>


  <button type="submit" className="btn btn-primary">Post</button>
</form>
    )
}

export default CreateForm