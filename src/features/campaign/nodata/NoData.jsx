import TitleCard from '../../../components/Cards/TitleCard';
import Nodata from './nodata.png'
function NoData(){
    return(
        <TitleCard title={"User Digital Engagement By Date & Time"} style={{}}>
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-center">Data Not Available</p>
          <img src={Nodata} alt="Image" className="mt-4" style={{height: '407px'}} />
        </div>
      </TitleCard>
    )
}
export default NoData