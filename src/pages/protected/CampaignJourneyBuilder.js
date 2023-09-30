import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import CampaignJourneyBuilder from '../../features/CampaignJourneyBuilder/index'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Campaign"}))
      }, [])


    return(
        <CampaignJourneyBuilder/>
    )
}

export default InternalPage