export const Tips = ({ className = "", children, tipsFor }) => {
  const tips = `scraper-tools__tips-${tipsFor}`;
  const cn = `${tips} d-flex justify-center flex-column ${className}`;
  return (
    <div className={cn}>
      {children}
    </div>
  );
};

