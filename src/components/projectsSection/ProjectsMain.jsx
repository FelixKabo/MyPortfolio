import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "CashWise",
    desc: "Apps to help manage personal finances, and track expenses and income.",
    align: "right",
    image: "../../public/images/CashwiseApp.png",
    link: "https://github.com/RibkaSuwardy/utskel1",
  },
  {
    name: "Lixkab",
    desc: "A travel website that contains popular destinations and places.",
    align: "left",
    image: "../../public/images/LixkabWeb.png",
    link: "https://github.com/FelixKabo/TravelWebsite",
  },
  {
    name: "Fashioner E-Commerce App",
    desc: "A modern e-commerce app for stylish fashion shopping.",
    align: "right",
    image: "../../public/images/FashionerApp.png",
    link: "https://github.com/FelixKabo/E_Commerce",
  },
  {
    name: "Travel Website & Admin Dashboard",
    desc: "A travel website with an integrated admin dashboard to manage destinations and content.",
    align: "left",
    image: "../../public/images/TravelAdmin.png",
    link: "https://github.com/FelixKabo/Travel-Management-System",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              desc={project.desc}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
