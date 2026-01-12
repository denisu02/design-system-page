import './Button.css';

type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'outline';
    children?: React.ReactNode;
    onHandleClick?: () => void;
    disabled?: boolean;
};

function Button({ variant, children, onHandleClick, disabled = false }: ButtonProps) {
    return disabled ? (
        <button disabled={true} className="disabled">
            {children}
        </button>
    ) : (
        <button disabled={disabled} className={variant ?? 'primary'} onClick={onHandleClick}>
            {children}
        </button>
    );
}

export default Button;
