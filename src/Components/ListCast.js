import React, { useEffect, useState } from 'react'

function ListCast(onChoice) {
    const [cast, setCast] = useState([]);

    async function fetchCast() {
        const response = await fetch('cast.json');
        setCast(await response.json()); 
    }

    useEffect(() => {
        fetchCast();
    });


  return (
    <>
        <div style ={{
            display: "grid", 
            gridTemplateColumns: `repeat(auto-fit, minmax(140px, 1fr))`,
            gap: `1rem`,
            marginBottom: '1rem', 
        }}>
            {cast.map(member => {
                return(
                    <a onClick={onChoice(member)} key={member.id} tooltip={member.name}>
                        <img src={require(`../images/${member.slug}_tn.svg`)} alt={member.name}/>
                    </a>
                    
                );
                
            })
             }
        </div>
    </>
  )
}

export default ListCast