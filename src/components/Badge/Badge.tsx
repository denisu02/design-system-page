import './Badge.css';

type BadgeProps = {
    variant?: 'primary-badge' | 'success' | 'warning' | 'danger';
    children?: React.ReactNode;
    size?: 'sm' | 'md';
};

const sizeStyles = {
    sm: { fontSize: '12px', padding: '2px 2px' },
    md: { fontSize: '14px', padding: '10px 10px' },
};

function Badge({ children, variant, size }: BadgeProps) {
    return size ? (
        <p className={variant} style={sizeStyles[size]}>
            {children}
        </p>
    ) : (
        <p className={variant} style={sizeStyles['md']}>
            {children}
        </p>
    );
}

export default Badge;
