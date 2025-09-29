const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="transition-all duration-500 hover:-translate-y-10">
      <div className="relative flex flex-col items-center gap-2">
        <div className="bg-white text-cyan h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange">
          {imgSvg}
        </div>
        <p className="font-bold text-black text-md">{text}</p>
      </div>
      <div className="w-[100px] h-[200px] bg-orange absolute top-[50px] -z-10"></div>
    </div>
  );
};

export default SingleSkill;
