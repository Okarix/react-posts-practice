import { TransitionGroup, CSSTransition } from "react-transition-group"
import PostItem from "./PostItem"

const PostList = ({ posts, title, removePost }) => {
    if (!posts.length) {
        return (
            <h1>Посты не найдены</h1>
        )
    }

    return (
        <div className="postList">
            <h1>{title}</h1>
            <TransitionGroup>
                {posts.map((post, i) =>
                    <CSSTransition key={post.id} timeout={500} classNames="post">
                        <PostItem removePost={removePost} number={i + 1} post={post} />
                    </CSSTransition>

                )}
            </TransitionGroup>
        </div>
    )
}

export default PostList
