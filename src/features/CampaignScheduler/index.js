import CampaignSchedularForm  from './CampaignSchedularForm';
import CampaignSchedularCards from './CampaignSchedularCard';
function campaign(){
    return(
        <>
 <div className="p-4">
      <h1 className="text-2xl font-bold">Campaign Scheduler</h1>

      <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
              <CampaignSchedularForm/>
              <CampaignSchedularCards/>
            </div>
      </div>
    


            
        </>
    )
}
export default campaign;