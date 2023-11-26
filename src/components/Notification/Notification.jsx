import css from './Notification.module.css';

export const Notification = ({ message }) => {
  return <span className={css.title}>{message}</span>;
};
