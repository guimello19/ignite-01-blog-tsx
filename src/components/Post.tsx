import styles from './Post.module.css';
import {Comment} from "./Comment.tsx";
import {Avatar} from "./Avatar.tsx";
import {format, formatDistanceToNow} from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import {ChangeEvent, FormEvent, InvalidEvent, useState} from "react";

interface Author {
    name: string;
    avatarUrl: string;
    role: string;
}

interface Content {
    type: 'paragraph' | 'link';
    text: string;
}

export interface PostType {
    id: number;
    author: Author;
    content: Content[];
    publishedAt: Date;
}

interface PostProps {
    post: PostType;
}

export function Post({ post }: PostProps) {
    const [comments, setComments ] = useState(['Default first comment'])

    const [mewComment, setNewComment] = useState('');

    const publishedDateFormat = format(post.publishedAt, "dd 'de' MMMM 'de' yyyy 'às' HH:mm 'h'",
        {
        locale: ptBR,
        }
    );
    const publishedDateRelativeToNow = formatDistanceToNow(
        post.publishedAt,
        {
            locale: ptBR,
            addSuffix: true,
        }
    );

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        setComments([...comments, mewComment]);
        setNewComment('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewComment(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('O comentário não pode ser vazio');
    }

    function deleteComment(comment: string) {
        const commentsListWithoutDeletedComment = comments.filter(
            commentsItem => commentsItem !== comment
        );
        setComments(commentsListWithoutDeletedComment);
    }

    const isNewCommentEmpty = mewComment.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormat} dateTime={post.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {post.content.map(content => {
                    if (content.type === 'paragraph') {
                        return <p key={content.text}>{content.text}</p>
                    } else if (content.type === 'link') {
                        return <a key={content.text} href="#" target="_blank" rel="noreferrer">{content.text}</a>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder="Comente algo..."
                    name="comment"
                    onChange={handleNewCommentChange}
                    value={mewComment}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentsList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            deleteCommentFn={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}
