const Income = () => {
  return (
    <section className=" bg-gray-900 text-gray-100 mt-5 mb-20 rounded-lg h-screen">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:p-8 lg:p-14">
        <h2 className="text-3xl font-semibold text-center">Income Details</h2>
        <div className="w-full md:w-3/4 lg:w-1/2 mx-auto grid grid-cols-3 mt-5 join">
          <div className="w-full my-auto py-3 text-center bg-orange-500 join-item">
            <h3 className="text-2xl font-medium py-2 text-white">Income</h3>
            <p className="text-4xl font-semibold text-white">
              $<span>00</span>
            </p>
          </div>
          <div className="w-full my-auto py-3 text-center bg-rose-500  join-item">
            <h3 className="text-2xl font-medium py-2 text-white">Expense</h3>
            <p className="text-4xl font-semibold text-white">
              $<span>00</span>
            </p>
          </div>
          <div className="w-full my-auto py-3 text-center bg-green-500  join-item">
            <h3 className="text-2xl font-medium py-2 text-white">Balance</h3>
            <p className="text-4xl font-semibold text-white">
              $<span>00</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center join text-gray-900 py-5">
          <form className="flex flex-1 items-center justify-center">
            <input
              type="date"
              className="input input-bordered w-full max-w-xs join-item"
            />
            <input
              type="text"
              placeholder="Income Source"
              className="input input-bordered w-full max-w-xs join-item"
            />
            <input
              type="text"
              placeholder="Income Amount"
              className="input input-bordered w-full max-w-xs join-item"
            />
            <button
              type="submit"
              className="btn btn-error text-white join-item"
            >
              Add
            </button>
          </form>
        </div>
        <div className="overflow-x-auto mt-10">
          <table className="table text-gray-100 ">
            <thead className="bg-green-500 text-gray-100 ">
              <tr>
                <th>No</th>
                <th>Date</th>
                <th>Income Source</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-300 text-gray-900 font-semibold border-b border-opacity-20 border-gray-700">
                <th>1</th>
                <td>12/05/11</td>
                <td>Salary</td>
                <td>45565</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Income;
