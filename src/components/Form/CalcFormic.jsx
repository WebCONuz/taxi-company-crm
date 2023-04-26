import { Form, Formik } from "formik";
import { calculationSchema } from "../../schemas";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { postData } from "../../redux/PostData";

const CalcForm = ({ initData, dataChanged, showFunction }) => {
  const [newData, setNewData] = useState(null);
  // const { postdata } = useSelector((store) => store);
  // const dispatch = useDispatch();

  const onSubmit = async (values, actions) => {
    setNewData({
      ...initData,
      ...values,
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  useEffect(() => {
    if (newData) {
      // const postNewData = async () => {
      //   await dispatch(postData({ url: "calculation.json", data: newData }));
      // };
      // postNewData();
      const data = JSON.parse(localStorage.getItem("calcData"));
      data.push(newData);
      console.log(newData);
      dataChanged(data);
      localStorage.setItem("calcData", JSON.stringify(data));
      showFunction(false);
    } else {
      console.log("ishlamadi");
    }
  }, [newData]);
  return (
    <Formik
      initialValues={{ sum: "", desctiption: "", payment_type: false }}
      validationSchema={calculationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <CustomInput
            label="Pul miqdori:"
            name="sum"
            type="text"
            placeholder="Summani kiriting"
          />
          <CustomInput
            label="Sabab:"
            name="desctiption"
            type="text"
            placeholder="Izoh qoldiring"
          />
          <CustomSelect
            label="To'lov turi:"
            name="payment_type"
            placeholder="To'lov turini tanlang"
          >
            <option value="">To'lov turini tanlang</option>
            <option value="naqd">Naqd pul</option>
            <option value="plastik">Plastik</option>
            <option value="click">Click</option>
            <option value="PayMe">PayMe</option>
          </CustomSelect>
          <button
            disabled={isSubmitting}
            type="submit"
            className="py-2 px-4 rounded-md bg-blue-100 text-blue-700 hover:text-white hover:bg-blue-500 active:bg-blue-700 duration-100"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default CalcForm;
