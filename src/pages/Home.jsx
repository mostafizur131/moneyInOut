import Banner from "../assets/images/home-banner.png";

const Home = () => {
  return (
    <section className="bg-gray-800 text-gray-100 mt-10 rounded-lg">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row ">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-4xl font-bold ">
            Welcome to <br />
            <span className="text-rose-400">MoneyInOut</span> App
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            If women didn`t exist, all the money in the world would have no
            meaning.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="/"
              className="px-8 py-3 text-lg font-semibold rounded bg-rose-400 text-gray-100"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={Banner}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
