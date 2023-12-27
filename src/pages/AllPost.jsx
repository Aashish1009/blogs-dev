import React, {useState, useEffect} from 'react'
import Container from "../components/Container"
import PostCard from "../components/Postcard"
import appwriteService from "../appwrite/databaseconfig";

function AllPosts() {
    const [posts, setPosts] = useState([])
    // useEffect(() => {}, [])
    // appwriteService.getallpost([]).then((posts) => {
        useEffect(() => { appwriteService.getallpost([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    // })
})}, [])
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts