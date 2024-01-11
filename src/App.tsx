import {Post, PostType} from "./components/Post.tsx";
import {Header} from "./components/Header.tsx";
import { Sidebar } from "./components/Sidebar.tsx";

import './global.css'
import styles from './App.module.css'

const posts: PostType[] = [
    {
        id: 1,
        author: {
            name: 'Author',
            avatarUrl: 'https://placekitten.com/64/64',
            role: 'Developer',
        },
        content: [
            { type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' },
            { type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
            { type: 'link', text: '#developer' },
        ],
        publishedAt: new Date('2023-10-30 08:19:02'),
    },
    {
        id: 2,
        author: {
            name: 'Another Author',
            avatarUrl: 'https://placekitten.com/64/64',
            role: 'Designer',
        },
        content: [
            { type: 'paragraph', text: 'Consectetur adipisicing elit. Quisquam, voluptatum.' },
            { type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
            { type: 'link', text: '#dev' },
            { type: 'link', text: '#designer' },
        ],
        publishedAt: new Date('2023-10-30 18:19:02'),
    },
    {
        id: 3,
        author: {
            name: 'Another Author',
            avatarUrl: 'https://placekitten.com/64/64',
            role: 'Designer',
        },
        content: [
            { type: 'paragraph', text: 'Quisquam, voluptatum.' },
            { type: 'paragraph', text: 'Lorem ipsum dolor.' },
            { type: 'link', text: '#example' },
        ],
        publishedAt: new Date('2023-10-31 12:19:02'),
    }
]
export function App() {
  return (
    <>
        <Header/>
        <div className={styles.wrapper}>
            <Sidebar/>
            <main>
                { posts.map(post => {
                        return (
                            <Post
                                key={post.id}
                                post={post}
                            />
                        )
                    })
                }
            </main>
        </div>
    </>
  )
}
