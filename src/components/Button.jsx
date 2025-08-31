function Button(props) {
  const { children, onClick, className } = props;
  const baseClasses = "flex-1 text-white font-semibold py-3 px-6 rounded-lg bg-[#6CC51D]";
  return (
    <button onClick={onClick} className={`${baseClasses} ${className} `}>
      {children}
    </button>
  );
}

export default Button;
