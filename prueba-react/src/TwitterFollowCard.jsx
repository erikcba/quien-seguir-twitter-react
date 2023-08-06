import { useState } from "react" 

export function TwitterFollowCard ({children, userName, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing? 'Siguiendo' : 'Seguir'
    const buttonClassname = isFollowing
        ? "tw-followCard-button is-following"
        : "tw-followCard-button"

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    src={`https://unavatar.io/${userName}`} 
                    alt="Imagen de perfil"
                    className="tw-followCard-avatar"/>

                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassname} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-unfollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}