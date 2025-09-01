function LinkButton(props) {
  const { children, className, href } = props;
  const baseClasses =
    "flex-1 text-white text-center font-semibold py-3 px-6 rounded-lg bg-[#6CC51D]";
  return (
    <a href={href} className={`${baseClasses} ${className} `}>
      {children}
    </a>
  );
}

export default LinkButton;
