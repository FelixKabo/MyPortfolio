import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/felix-kabonero-tanlimhuijaya/"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/FelixKabo"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="https://www.instagram.com/flx_kabo"
        Icon={FaInstagram}
      />
    </div>
  );
};

export default ContactSocial;
