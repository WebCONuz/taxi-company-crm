import { Form, Formik } from "formik";
import { calculationSchema } from "../../schemas";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";

const onSubmit = async (values, actions) => {
  console.log(values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const CalcForm = () => {
  return (
    <Formik
      initialValues={{ summ: "", description: "", payment: false }}
      validationSchema={calculationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <CustomInput
            label="Pul miqdori:"
            name="summ"
            type="text"
            placeholder="Summani kiriting"
          />
          <CustomInput
            label="Sabab:"
            name="description"
            type="text"
            placeholder="Izoh qoldiring"
          />
          <CustomSelect
            label="To'lov turi:"
            name="payment"
            placeholder="To'lov turini tanlang"
          >
            <option value="">To'lov turini tanlang</option>
            <option value="naqd">Naqd pul</option>
            <option value="plastic">Plastic</option>
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
