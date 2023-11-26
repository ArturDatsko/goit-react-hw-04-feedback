import css from './FeedbackOptions.module.css';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ options }) => {
  return (
    <div className={css['container']}>
      {options.map(({ value, label, func }) => {
        return (
          <button
            className={css['button']}
            key={nanoid()}
            type="button"
            onClick={() => func(value + 1)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};
