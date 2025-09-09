const AddNewProduct = () => {
  return (
    <div className="flex h-screen flex-col bg-gray-300">
      <div
        className="h-24 w-full"
        style={{
          background:
            "linear-gradient(to bottom, rgba(108, 197, 29, 1), rgba(108, 197, 29, 0))",
        }}
      ></div>
      <div className="max-w-md mx-auto w-full p-2 mt-2">
        <h2 className="flex justify-center items-center font-semibold">
          Add New Product
        </h2>

        <div className="text-gray-800 text-sm mb-4 text-start">
        <p >Description</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
       </div>
        <div className="mb-4 mt-2">
          <h3 className="font-medium mb-2">Upload Product Photo</h3>
          <div className="flex items-center justify-between p-3 bg-gray-100 rounded-xl">
            <span className="text-gray-700">Upload photo</span>
            <label>
              <input type="file" className="hidden" />
              <span className="cursor-pointer  bg-gray-200 text-xs  text-black  py-2 px-3 rounded-md shadow hover:bg-green-600 transition">
                Choose File
              </span>
            </label>
          </div>
        </div>
        <div className="max-w-md mx-auto mt-4">
          <button className="w-full bg-[#6CC51D] text-white font-semibold py-3 rounded-full">
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewProduct;
