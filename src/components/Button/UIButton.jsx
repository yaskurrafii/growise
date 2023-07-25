export const UIButton = ({ onClick, children, size="sm", variant="base", color="dy", icon }) => {
  const cn = `btn-${size}__${variant}-${color}`;
  return (
    <button className={cn} onClick={onClick}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};
