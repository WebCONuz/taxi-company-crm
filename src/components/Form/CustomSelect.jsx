import { useField } from "formik";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="mb-4">
        <label className="block mb-2">{label}</label>
        <select
          {...field}
          {...props}
          className={`block w-full py-2 px-3 rounded-md border border-gray-300 outline-none ${
            meta.touched && meta.error ? "input-error" : ""
          }`}
        />
        {meta.touched && meta.error && (
          <div className="error text-red-500 text-sm">{meta.error}</div>
        )}
      </div>
    </>
  );
};
export default CustomSelect;
