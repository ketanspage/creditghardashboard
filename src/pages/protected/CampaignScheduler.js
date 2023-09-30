import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import CampaignScheduler from '../../features/CampaignScheduler/index'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Campaign"}))
      }, [])


    return(
        <CampaignScheduler/>
    )
}

export default InternalPage