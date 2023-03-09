import { useEffect, useState } from 'react';
import PostService from '../API/PostService';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import MyButton from '../components/UI/button/MyButton';
import Loader from '../components/UI/Loader/Loader';
import MyModal from '../components/UI/MyModal/MyModal';
import Pagination from '../components/UI/Pagination/Pagination';
import { getPageCount } from '../components/utils/pages/pages';
import { useFetching } from '../hooks/useFetching';
import { usePosts } from '../hooks/usePosts';

function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data)
        const totalCount = response.headers[`x-total-count`]
        setTotalPages(getPageCount(totalCount, limit))
    })

    useEffect(() => {
        fetchPosts()
    }, [page])

    const createPost = (newPost) => {
        setPosts([...posts, { ...newPost }])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className="App">
            <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm createPost={createPost} />
            </MyModal>
            <hr />
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }
            <PostList removePost={removePost} posts={sortedAndSearchedPosts} title="Список постов" />
            {isPostLoading &&
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><Loader /></div>
            }

            <Pagination page={page} changePage={changePage} totalPages={totalPages} />
        </div>
    )
}

export default Posts
