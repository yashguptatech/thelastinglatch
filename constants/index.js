import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
export const menuLinks = [
  { label: "Home", path: "/" },
  { label: "About Company", path: "/#about-company" },
  { label: "Services", path: "/#services" },
  // { label: "Industries", path: "/#industries" },
  // { label: "Clients", path: "/#clients" },
  // { label: "Engage with us", path: "/#engage-with-us" },
];
export const socials = [
  { label: "Instagram", icon: <FaInstagram /> },
  { label: "Linkedin", icon: <FaLinkedinIn /> },
  { label: "Twitter", icon: <FaXTwitter /> },
];

export const contact = [
  { label: "Email us at", icon: <IoMdMail />, content: "info@mashvision.in" },
  {
    label: "Our Location",
    icon: <FaLocationDot />,
    content: "New Delhi, India",
  },
  { label: "Call us at", icon: <FaPhoneAlt />, content: "+91 9953034390" },
];
