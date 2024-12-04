import React, { useState, useEffect } from "react";
import { collection, getFirestore, getDoc } from "firebase/firestore";
import Agent_cards from "./Agent_cards";

export function Agents() {
    const db = getFirestore();
    const [agents, setAgents] = useState([]);
    
    useEffect(() => {
        const agentDocref = collection(db, "Agents");
        const cityRef = getDoc(db, "Cities", "Location");
        if (agentDocref.exists() && cityRef.exists()) {
            if (agentDocref.location === cityRef) {
                setAgents(agentDocref);
            }
        }
    }, [db]);

    return (
        <div>
            <h1>Agents</h1>
            <ul>
                {agents.map((agent) => (
                    <Agent_cards key={agent.id} agent={agent} />
                ))}
            </ul>
        </div>
    );
}
