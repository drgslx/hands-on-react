import {React, useState} from 'react'
import Support from './Support'
import ListCast from './ListCast';

function Welcome() {
    let [memberInfo, setMemberInfo] = useState(null);

  return (
    <>
    <img src={require('../images/group.png')} alt="Star Gazers Group"></img>
    <h1>Meet the StarGazers</h1>
    <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
    <Support />
    <ListCast onChoice={(info) => {setMemberInfo(info)}}/>
    {
        memberInfo && <article>
            <hgroup>
                <div>
                    <img src={require(`../images${memberInfo.slug}.svg`)} alt={memberInfo.name}/>
                    <h1>{memberInfo.name}</h1>
                    <p>{memberInfo.bio}</p>
                </div>
            </hgroup>
        </article>
    }
    </>
  )
}

export default Welcome