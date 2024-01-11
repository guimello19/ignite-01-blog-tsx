import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import {Avatar} from "./Avatar.tsx";
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src="https://images.unsplash.com/photo-1636819488524-1f019c4e1c44?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 className={styles.cover}
                 alt="User background"/>

            <div className={styles.profile}>
                <Avatar src="https://github.com/guimello19.png" />
                <strong>GM</strong>
                <span>Dev</span>
            </div>

            <footer>
                <a href={'#'}>
                    <PencilLine size={20}/>
                    Editar profile
                </a>
            </footer>
        </aside>
    )
}