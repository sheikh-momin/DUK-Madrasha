import React from 'react';

const Loader = () => {
  return (
    <div className="text-center  flex justify-center items-center">
      <div class="container space-y-10 relative flex justify-center items-center">


        <div class="flex flex-col">


          <div class="flex flex-row space-x-16">



            <div class="flex">
              <div class="relative">

                <div class="w-12 h-12 rounded-full absolute
                            border-8 border-dashed border-gray-200"></div>

                <div class="w-12 h-12 rounded-full animate-spin absolute
                            border-8 border-dashed border-purple-500 border-t-transparent"></div>
              </div>
            </div>
          </div>

        </div>




      </div>
    </div>
  );
};

export default Loader;