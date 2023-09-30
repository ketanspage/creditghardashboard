import React from 'react';
import TitleCard from '../../../components/Cards/TitleCard';
function Multicard() {
  const iconClass=`rounded-full p-2 bg-blue-500 text-white h-[43px] w-[50px]`
  const teams=[{ title: 'Team_cmd', p: '#3', icons: ['M', 'M', '+1'] ,badge:'Active'},
{ title: 'Team_IBL', p: '#4', icons: ['M', 'M', '+23'] ,badge:'Active'},
{ title: 'Team_Tata', p: '#5', icons: ['M', 'M', '+33'] ,badge:'Active'}
]
  return (
      <TitleCard title={"Choose your team"} topMargin="mt-2">
      <div className='flex flex-col'>
        <br />
        <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
          {teams.map((team,index)=>(
            <div key={index}className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{team.title}</h2>
                <p className='text-semibold text-gray-200'>{team.p}</p>
                <div className="avatar-group flex flex-row items-center justify-between"> 
                  <div className="avatar-group flex flex-row space-x-[-20px]">
                  {team.icons.map((icon,index)=>(
                  <div key={index}  className="avatar placeholder">
                      <div className="w-12 bg-neutral-focus text-neutral-content">
                          <span>{icon}</span>
                        </div>
                        </div>
                    ))}
               
               </div>   
               
                  <div key={index} className="badge badge-accent text-white">{team.badge}</div>
                  
                </div>
               
              </div>
            </div>
          ))}

        </div>
      </div>
    </TitleCard>
    );
}

export default Multicard;
