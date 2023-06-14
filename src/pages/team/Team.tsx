import './team.css';
import { TeamData } from './TeamData';

function Team() {
  return (
    <div className='team-container padding-in margin-top'>
      {TeamData.map((member) =>
       <div className='each-team-container' key={member.key}>
         <img className='member-image' src={member.image} alt='employee'/>
         <div className='team-container-text'>
            <h1 className='member-name'>{member.name}</h1>
            <p className='text'>{member.position}</p>
            </div>
       </div>
      )}
    </div>
  )
}

export default Team