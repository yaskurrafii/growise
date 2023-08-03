export const UIButton = ({
  onClick,
  children,
  size = "sm",
  variant = "base",
  color = "dy",
  icon,
  type,
}) => {
  const cn = `btn-${size}__${variant}-${color}`;
  const handleClick = (event) => {
    // event.preventDefault();
   onClick();
  };
  return (
    <button type={type} className={cn} onClick={handleClick}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};
