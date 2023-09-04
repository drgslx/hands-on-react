import React from 'react'

function ListCast({cast, onChoice}) {

    

  return (
    <>
        <div className={cast.name} style ={{
            display: "grid", 
            gridTemplateColumns: `repeat(auto-fit, minmax(140px, 1fr))`,
            gap: `1rem`,
            marginBottom: '1rem', 
        }}>
            {cast.map(cast => {
                return(
                    <a  onClick={() => onChoice(cast)} key={cast.id} tooltip={cast.name}>
                        <img src={require(`../images/${cast.slug}.svg`)} alt={cast.name}/>
                    </a>
                    
                );
                
            })
             }
        </div>
    </>
  )
}

export default ListCast