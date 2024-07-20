import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import css from "./FormBook.module.css";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email address").required("Email is required"),
  bookingDate: yup.date().required("Booking date is required"),
  comment: yup.string()
});

const FormBook = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
      data.name = data.name.trim();
      data.email = data.email.trim();
      data.comment = data.comment.trim();
        
    };

    return (
    <div className={css.formContainer}>
    <h2 className={css.titleForm}>Book your campervan now</h2>
      <p className={css.textForm}>
        Stay connected! We are always ready to help you.
      </p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                    <input id="name"
                    className={css.formInput}
                    placeholder="Name"
                    {...register('name')} />
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                    <input id="email"
                    className={css.formInput}
                    placeholder="Booking data"
                    {...register('email')} />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                    <input type="date"
                    className={css.formInput}
                    id="bookingDate"
                    placeholder="Email"
                    {...register('bookingDate')} />
                {errors.bookingDate && <p>{errors.bookingDate.message}</p>}
            </div>
            <div>
                    <textarea id="comment"
                    className={`${css.commentInput} ${css.formInput}`}
                    placeholder="Comment"
                    {...register('comment')} />
            </div>
            <button className={css.submitBtn} type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FormBook;


