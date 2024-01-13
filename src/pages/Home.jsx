import React, {useState, useEffect} from 'react'
import {Button, Container, PostCard} from '../compnents'
import appwriteService from '../appwrite/configure'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export function Home() {
    const [posts, setPosts] = useState([])
    const userData = useSelector(state => state.auth.userData)
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])


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
