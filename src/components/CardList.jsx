const CardList = ({ title, data, fields }) => {
  return (
    <div className="flex flex-col h-screen w-full bg-gray-200 ">
      {/* Gradient Header */}
      <div
        className="h-24 w-full"
        style={{
          background:
            "linear-gradient(to bottom, rgba(108, 197, 29, 1), rgba(108, 197, 29, 0))",
        }}
      ></div>

      {/* Title */}
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>

        {/* Loop over data */}
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 mb-4 w-80"
          >
            {/* Loop over fields inside each item */}
            {fields.map((field, i) => (
              <p
                key={i}
                className={`${
                  field === "name"
                    ? "text-black font-semibold"
                    : "text-gray-700"
                }`}
              >
                {item[field]}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
