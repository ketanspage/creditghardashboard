import React from "react";
import { showNotification } from "../../../common/headerSlice";
import { useDispatch, useSelector } from "react-redux";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Button from "../../../../components/buttons/Button";
import jsonData from "../../../../data.json";
import {
  createDataSetBucket,
  getDataSetBuckets,
} from "../../../Buckets/slice/bucketSlice";
import { OPERATOR } from "../../../../constants";

const CreateBucket = ({ id, filter }) => {
 
  const { leadCardByIdData } = jsonData;
  const [openInputField, setOpenInputField] = React.useState(false);
  const [noFilterSelectedError, setNoFilterSelectedError] =
    React.useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [bucketName, setBucketName] = React.useState("");

  const handleBucketCreate = async () => {
    if (openInputField) {
      setOpenInputField(false);
      setNoFilterSelectedError(false);
    } else {
      setOpenInputField(true);
    }
  };

  const handleAddBucket = React.useCallback(() => {
    if (Object.keys(filter).length > 0 && bucketName.length > 0) {
      setNoFilterSelectedError(false);
      const updateFilterObject = {
        dataSetId: {
          operator: OPERATOR.eq,
          value: id,
        },
        ...filter,
      };
      const payload = {
        dataSetId: id,
        name: bucketName,
        filterQuery: JSON.stringify(updateFilterObject),
        createdBy: user?.id,
      };
      dispatch(createDataSetBucket(payload))
        .unwrap()
        .then((res) => {
          dispatch(
            showNotification({
              message: `${bucketName} ${leadCardByIdData.createBucket.successMessage}`,
              status: 1,
            })
          );
          dispatch(getDataSetBuckets());
          setBucketName("");
          setNoFilterSelectedError(false);
          setOpenInputField(false);
        })
        .catch((err) => {
          dispatch(
            showNotification({
              message:
                leadCardByIdData.createBucket.errorMessage.apiCreationError,
              status: 0,
            })
          );
        });
    } else {
      setNoFilterSelectedError(true);
    }
  }, [dispatch , filter , bucketName]);

  return (
    <div
      className={`flex  justify-end items-end p-4 transition-opacity duration-300 ${
        openInputField
          ? "max-w-md border rounded-lg ml-auto  bg-gray-100 opacity-100"
          : ""
      } `}
    >
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <p
            className={` transition-opacity duration-300 ${
              openInputField ? "visible mb-4 opacity-100" : "hidden opacity-0"
            }`}
          >
            {leadCardByIdData.createBucket.info}
          </p>
          <Button
            title={<XMarkIcon className="w-3 h-3" />}
            handleClick={handleBucketCreate}
            buttonClassName={`transition-opacity duration-300 ${
              openInputField
                ? "visible mb-4 !btn-sm !btn-ghost !btn-circle opacity-100"
                : "hidden opacity-0"
            }
          `}
          />
        </div>
        <div className={`flex flex-row `}>
          <div className="form-control mr-4">
            <input
              type="text"
              value={bucketName}
              name={leadCardByIdData.createBucket.input.name}
              placeholder={leadCardByIdData.createBucket.input.placeholder}
              className={`input input-bordered w-full max-w-xs mr-10 transition-opacity duration-300 ${
                openInputField
                  ? "visible mr-10 opacity-100"
                  : "hidden opacity-0"
              } `}
              onChange={(e) => setBucketName(e.target.value)}
            />
            {noFilterSelectedError && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {" "}
                  {Object.keys(filter).length > 0
                    ? leadCardByIdData.createBucket.errorMessage.bucketName
                    : leadCardByIdData.createBucket.errorMessage.noFilter}
                </span>
              </label>
            )}
          </div>
          <Button
            title={leadCardByIdData.createBucket.buttonName}
            handleClick={handleAddBucket}
            buttonClassName={`transition-opacity duration-300 ${
              openInputField ? "visible opacity-100" : "hidden opacity-0"
            }`}
          />
        </div>
      </div>
      <Button
        title={leadCardByIdData.createBucket.buttonName}
        handleClick={handleBucketCreate}
        buttonClassName={` transition-opacity duration-300 ${
          openInputField ? "hidden opacity-0" : "visible opacity-100"
        }`}
      />
    </div>
  );
};

export default CreateBucket;
