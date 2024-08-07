import css from "./ErrorMessage.module.css";
const ErrorMessage = ({ message }) => {
    if (!message) return null; 
    
    return (
    <div className={css.textError}>
      {message}
    </div>
    )
};

export default ErrorMessage;
