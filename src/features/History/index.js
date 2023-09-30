import Select from "../../components/Input/Select";
import Table from "./table";
function campaign() {
  return (
    <>
      <br />
      <div className="flex items-center justify-between">
      <div className="ml-auto">
      <Select optionTitle={'Select Day(s)'} containerStyle={''} />
      </div>
      </div>
      <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
        <Table />
      </div>
    </>
  );
}
export default campaign;
