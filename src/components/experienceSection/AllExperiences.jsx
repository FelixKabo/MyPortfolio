// import SingleExperience from "./SingleExperience";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";

// const experiences = [
//   {
//     job: "Front-End Developer",
//     company: "Alex Apps",
//     date: "2022 - Present",
//     responsibilities: [
//       "Implementing reusable components.",
//       "Participating in large scale application.",
//       "Working on the performance of web applications.",
//       "Generating new ideas for better user experience.",
//     ],
//   },
//   {
//     job: "Course Instructor",
//     company: "Nucamp",
//     date: "2023 - Present",
//     responsibilities: [
//       "Explaining and facilitating web development concepts.",
//       "Help students with their assignments and grade them weekly.",
//       "Provide support for students through their learning journey.",
//     ],
//   },
//   {
//     job: "Course Instructor",
//     company: "Sprints",
//     date: "2024 - Present",
//     responsibilities: [
//       "Teaching JavaScript, React and TailwindCSS.",
//       "Participating in preparing course materials.",
//       "Helping students through their way in learning web development technologies.",
//     ],
//   },
// ];

// const AllExperiences = () => {
//   return (
//     <div className="flex items-center justify-between md:flex-row sm:flex-col">
//       {experiences.map((experience, index) => {
//         return (
//           <>
//             <SingleExperience key={index} experience={experience} />
//             {index < 2 ? (
//               <motion.div
//                 variants={fadeIn("right", 0)}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: false, amount: 0.7 }}
//               >
//                 <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
//               </motion.div>
//             ) : (
//               ""
//             )}
//           </>
//         );
//       })}
//     </div>
//   );
// };

// export default AllExperiences;
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = {
  work: [
    {
      title: "Application Developer Intern",
      company: "PT. Mitra Integrasi Informatika",
      year: "February 2024 - June 2024",
      details: [
        "Responsible to developed HRIS web application as Fullstack Developer.",
        "Contribute to designing the User Interface of the HRIS web application using FIGMA.",
      ],
    },
  ],
  organizational: [
    {
      title: "Member of Administration & Development Commission",
      company: "DPM FTI UNTAR",
      year: "August 2022 - July 2023",
      details: [
        "Responsible to developing internal of DPM FTI UNTAR.",
        "Responsible to keep DPM FTI UNTAR archives.",
        "Organized bonding activities to strengthen relationships among fellow members of DPM FTI UNTAR.",
      ],
    },
    {
      title: "Vice-Coordinator of Public Relation Commission",
      company: "DPM FTI UNTAR",
      year: "August 2023 - July 2024",
      details: [
        "Being a liaison between FTI Untar students and FTI Untar.",
        "Taking care of DPM FTI Untar's social media.",
        "Designing Instagram feeds & stories for work programs and holidays.",
      ],
    },
  ],
};

const ExperienceCard = ({ exp }) => (
  <motion.div
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.3 }}
    className="border-dashed border-2 border-orange p-8 rounded-2xl w-[380px] bg-black/40 backdrop-blur-sm"
  >
    <h3 className="mb-1 text-2xl font-bold text-cyan">{exp.title}</h3>
    <p className="mb-1 text-lg text-orange">{exp.company}</p>
    <p className="mb-4 text-base text-gray-400">{exp.year}</p>
    <ul className="pl-5 space-y-2 text-base leading-relaxed text-justify list-disc list-outside">
      {exp.details.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </motion.div>
);

const AllExperience = () => {
  return (
    <section className="my-12 text-center">
      {/* Work Experience */}
      <div className="mb-20">
        <motion.h3
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="mb-10 text-4xl font-semibold text-orange"
        >
          Work Experience
        </motion.h3>
        <div className="flex flex-wrap justify-center gap-10">
          {experiences.work.map((exp, i) => (
            <ExperienceCard exp={exp} key={i} />
          ))}
        </div>
      </div>

      {/* Organizational Experience */}
      <div>
        <motion.h3
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="mb-10 text-4xl font-semibold text-orange"
        >
          Organizational Experience
        </motion.h3>
        <div className="flex flex-wrap justify-center gap-10">
          {experiences.organizational.map((exp, i) => (
            <ExperienceCard exp={exp} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllExperience;

