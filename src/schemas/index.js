import * as yup from "yup";

const calculationSchema = yup.object().shape({
  summ: yup
    .number("Ma'lumot son bo'lishi kerak")
    .positive("Ma'lumot musbat son bo'lishi kerak")
    .required("Ma'lumot kiritish majburiy!"),
  description: yup.string().required("Ma'lumot kiritish majburiy!"),
  payment: yup
    .string()
    .oneOf(["naqd", "plastik", "click", "PayMe"])
    .required("Ma'lumot kiritish majburiy!"),
});

export { calculationSchema };
