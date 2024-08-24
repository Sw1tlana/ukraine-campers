import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { addBookings } from "../../redux/booking/operation";
import { bookingSchema } from "../../schemas/bookingSchema";
import css from "./FormBook.module.css";
import toast from "react-hot-toast";

const FormBook = () => {
  const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(bookingSchema)
    });

const onSubmit = async (data) => {
    try {
        data.name = data.name.trim();
        data.email = data.email.trim();
        data.comment = data.comment.trim();
        
        data.bookingDate = new Date(data.bookingDate).toISOString();
        
        const resultAction = await dispatch(addBookings(data)).unwrap();

        if (resultAction) {
            toast.success(resultAction.message || 'Booking successfully added! 🎉');
            reset();
        }

    } catch (error) {
        toast.error('Something went wrong! 😞');
    }
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
                    {...register('name')} 
                    aria-required="true"/>
                {errors.name && <p className={css.errorMsg}>{errors.name.message}</p>}
            </div>
            <div>
                    <input id="email"
                    className={css.formInput}
                    placeholder="Email"
                    {...register('email')} />
                {errors.email && <p className={css.errorMsg}>{errors.email.message}</p>}
            </div>
            <div>
                    <input type="date"
                    id="bookingDate"
                    className={css.formInput}
                    placeholder="booking Date"
                    {...register('bookingDate')} />
                {errors.bookingDate && <p className={css.errorMsg}>{errors.bookingDate.message}</p>}
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


