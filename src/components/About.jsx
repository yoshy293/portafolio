import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full  h-screen bg-gradient-to-b from-gray-800 to-black text-white py-[5rem] ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias et,
          dicta quia in quidem, similique cumque recusandae qui non debitis
          nostrum molestiae repellat veniam repellendus excepturi, vel quas!
          Ipsam ipsa aspernatur itaque non amet praesentium! Animi minima
          molestiae delectus autem, natus dignissimos reprehenderit rerum qui
          enim, non, culpa temporibus iusto!
        </p>
       
      </div>
    </div>
  );
};

export default About;
