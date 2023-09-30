import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import SmsCampaign from '../../features/smscampaign/index'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Campaign"}))
      }, [])


    return(
        <SmsCampaign />
    )
}

export default InternalPage