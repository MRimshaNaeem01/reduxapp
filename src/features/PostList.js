import React from 'react'
import { useSelector } from 'react-redux';
import { selectAllPosts } from './posts/postsSlice';

const PostList = () => {

    const posts = useSelector(selectAllPosts)
    // const posts = useSelector(state => state.posts)
    //const counter = useSelector(state=> state.counter)
    //console.log(posts)

    return (
        <div>
            <section>
                <h1>Posts</h1>
            {
                posts.map((post) => (
                    <article key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content.substring(0,100)}</p>
                    </article>

                ))
            }
            </section>
            
        </div>
    )
}

export default PostList