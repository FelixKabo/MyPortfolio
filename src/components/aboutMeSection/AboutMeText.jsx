import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="mb-10 text-6xl text-cyan">About Me</h2>
      <p className="pr-10 text-lg leading-relaxed text-justify">
        I’m Felix Kabonero Tanlimhuijaya, an Information Systems graduate from
        Tarumanagara University with a strong interest in Web Development.
        During my academic journey, I developed a solid foundation in
        programming languages and frameworks, including JavaScript, HTML, CSS,
        PHP, Flutter and React, along with hands-on experience in designing user
        interfaces, creating mobile application and dynamic & responsive web applications. I also have
        experience as a Fullstack Developer Intern. 
      </p>
      <button className="flex items-center gap-2 px-4 py-2 mt-10 text-lg transition-all duration-500 border rounded-full cursor-pointer border-orange hover:bg-orange md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="text-white transition-all duration-500 cursor-pointer hover:text-cyan"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
