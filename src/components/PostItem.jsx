import MyButton from "./UI/button/MyButton"
import { useNavigate } from "react-router-dom"

const PostItem = (props) => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="postItem">
                <div>
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div>
                    <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>Открыть</MyButton>
                </div>
                <div>
                    <MyButton onClick={() => props.removePost(props.post)}>Удалить</MyButton>
                </div>
            </div>
        </div>
    )
}

export default PostItem
