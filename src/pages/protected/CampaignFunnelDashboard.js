import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import CampaignFunnelDashboard from '../../features/CampaignFunnelDashboard/index'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Campaign"}))
      }, [])


    return(
        <CampaignFunnelDashboard/>
    )
}

export default InternalPage