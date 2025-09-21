import { Link } from "react-router-dom";

function LinkButton({ children, className, to }) {
  const baseClasses =
    "flex-1 text-white text-center font-semibold py-3 px-6 rounded-lg bg-[#6CC51D]";
  return (
    <Link to={to} className={`${baseClasses} ${className}`}>
      {children}
    </Link>
  );
}

export default LinkButton;
