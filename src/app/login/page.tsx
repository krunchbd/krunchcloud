import React from "react";

const Page: React.FC = () => {
  // return (
  //   <section className="bg-gray-50 dark:bg-gray-900">
  //     <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
  //       <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
  //         <div className="space-y-4 p-6 sm:p-8 md:space-y-6"></div>
  //       </div>
  //     </div>
  //   </section>
  // );

  return (
    <div className="h-screen bg-gradient-to-l from-orange-500 to-yellow-500">
      <div className="mx-auto flex h-screen  items-center justify-center bg-gradient-to-t px-6 py-8  lg:py-0">
        <div className="flex h-1/3 w-1/3 flex-col items-center justify-center rounded-xl  bg-gradient-to-tr from-purple-300 to-green-300 px-8 py-10 shadow-lg">
          <img className="drop-shadow-lg" src="KrunchLogoText.png"></img>
          <p>Sing Up with</p>
          <div className="flex w-full flex-row justify-between">
            <button className="btn-primary btn w-1/5"></button>
            <button className="btn-primary btn w-1/5"></button>
            <button className="btn-primary btn w-1/5"></button>
          </div>
          <p>------------- OR -------------</p>
          <input type="text"></input>
          <button className="btn bg-primary"></button>
        </div>
      </div>
      500
    </div>
  );
};

export default Page;
