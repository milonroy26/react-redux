import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../features/posts/postsSlice";

export default function Post() {
    const { posts, isLoading, isError, error } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch]);

    // decide what to render
    let content;

    if (isLoading) {
        content = <p>Loading posts...</p>
    }

    if (!isError && isLoading) {
        content = <p>{error}</p>
    }

    if (!isLoading && !isError && posts.length === 0) {
        content = <p>No posts found</p>
    }

    if (!isLoading && !isError && posts.length > 0) {
        content = posts.map((post) => (
            <ul key={post.id}>
                <li>{post.title}</li>
            </ul>
        ))
    }

    return (
        <div>
            {content}
        </div>
    )
}
