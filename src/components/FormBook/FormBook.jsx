import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addBookings } from "../../redux/booking/operation";
import css from "./FormBook.module.css";
import toast from "react-hot-toast";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email address").required("Email is required"),
  bookingDate: yup.date().required("Booking date is required"),
  comment: yup.string()
});

const FormBook = () => {
  const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

const onSubmit = async (data) => {
    try {
        // Логування даних перед відправкою
        console.log('Data before sending:', data);
        
        // Обрізаємо пробіли у полях
        data.name = data.name.trim();
        data.email = data.email.trim();
        data.comment = data.comment.trim();
        
        // Конвертуємо дату в формат ISO
        data.bookingDate = new Date(data.bookingDate).toISOString();
        
        // Відправляємо дані через dispatch
        await dispatch(addBookings(data)).unwrap();
        
        // Очищення форми та відображення успішного повідомлення
        console.log('Resetting form');
        reset();
        toast.success('Booking successfully added! 🎉');
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
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                    <input id="email"
                    className={css.formInput}
                    placeholder="Email"
                    {...register('email')} />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                    <input type="date"
                    id="bookingDate"
                    className={css.formInput}
                    placeholder="booking Date"
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


