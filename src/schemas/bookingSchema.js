import * as yup from 'yup';

export const bookingSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email address").required("Email is required"),
  bookingDate: yup.date().required("Booking date is required"),
  comment: yup.string(),
});