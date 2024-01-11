import styles from './Comment.module.css';
import {ThumbsUp, Trash} from "phosphor-react";
import {Avatar} from "./Avatar.tsx";
import {useState} from "react";

interface CommentProps {
    content: string;
    deleteCommentFn: (comment: string) => void;
}

export function Comment(props: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);
    function handleDeleteComment() {
        props.deleteCommentFn(props.content);
    }

    function handleLikeComment() {
        setLikeCount((currentLikes) => {
            return currentLikes + 1;
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar src="https://placekitten.com/64/64" hasBorder={false}/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Author</strong>
                            <time title="30 de Outubro de 2023" dateTime="2023-10-30 08:19:02">
                                Cerca de 1 hora atrás
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} title="deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{props.content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20}/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}