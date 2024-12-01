import React from "react";
import { useState, useRef, useEffect } from "react";
import { collection } from "firebase/firestore";
export function Agents(){
    const db = getFirestore();
    const [agents, setAgents] = useState([]);
    const agentDocref = collection(db,"Agents");
    const cityRef = getDoc(db,"Cities","Location");
    useEffect(()=>{
        if(agentDocref.exists() &&  cityRef.exists()){
                if(agentDocref.location === cityRef){
                    setAgents(agentDocref);
                }
        }
    });
    return (
        <div>
            <h1>Agents</h1>
            <ul>
                {agents.map((agent) => (
                    <li key={agent.id}>{agent.name}</li>
                ))}
            </ul>
        </div>
    );

}
