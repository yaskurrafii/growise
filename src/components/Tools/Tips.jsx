export const Tips = ({ className, children }) => {
  const cn = `scraper-tools__tips position-relative d-flex justify-center flex-column ${className}`;
  return (
    <div className={cn}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        className="position-absolute"
        style={{top:"8px", right:"8px"}}
      >
        <path
          d="M4.5 18L3 16.5L9 10.5L3 4.5L4.5 3L10.5 9L16.5 3L18 4.5L12 10.5L18 16.5L16.5 18L10.5 12L4.5 18Z"
          fill="#616161"
        />
      </svg>
      {children}
    </div>
  );
};
