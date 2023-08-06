import { useState } from "react";
import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
    {
        userName : "Juan.perezOK",
        name: "Juan Perez",
        isFollowing: true,

    },
    {
        userName : "pepe_cba",
        name: "Pepardo",
        isFollowing: false,

    },
    {
        userName : "ramon_1986",
        name: "Ramon Suarez",
        isFollowing: true,

    },

    {
        userName : "ErikTomaselli",
        name: "Mathias",
        isFollowing: false,

    }
    
]

export function App() {  
    return (
        <section className="sugerenciaFollow">
            {
                users.map(user => {
                    const {userName, name, isFollowing} = user
                    return (
                        <TwitterFollowCard 
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }

        </ section>       
    )
}