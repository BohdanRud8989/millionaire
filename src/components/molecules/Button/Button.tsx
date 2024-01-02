import styles from './button.module.css'

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

const Button = ({children, ...props}: ButtonProps) => {

  return (
    <button className={styles.main} {...props}>
        {children}
    </button>
  );
};

export { Button };
