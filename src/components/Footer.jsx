import WhiteLogo from "../assets/white_logo.svg";

const Footer = () => {
  const footerSections = [
    {
      title: "Doormat Navigation",
      links: ["Home", "About", "Menu", "Reservations", "Order Online", "Login"],
    },
    {
      title: "Address",
      links: ["Phone Number", "Email"],
    },
    {
      title: "Address",
      links: ["Phone Number", "Email"],
    },
  ];

  return (
    <footer>
      <div className="footer_content">
        <img src={WhiteLogo} alt="Logo" className="footer_logo" />

        {footerSections.map(({ title, links }, sectionIndex) => (
          <ul key={`${title}-${sectionIndex}`}>
            <li className="footer_header_link">{title}</li>
            {links.map((link) => (
              <li key={link}><a href="#">{link}</a></li>
            ))}
          </ul>
        ))}

      </div>
    </footer>
  );
};

export default Footer;
