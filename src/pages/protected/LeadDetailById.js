import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import LeadDataById from "../../features/leadsData/LeadDataById";
import { useParams } from "react-router-dom";

function InternalPage() {
  const dispatch = useDispatch();
  const { leadId } = useParams();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Leads" }));
  }, [dispatch]);

  return <LeadDataById id={leadId} />;
}

export default InternalPage;
