import { APP_NAME } from "@/lib/constants/index.ts";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="p-5 flex-center">
        {currentYear} {APP_NAME}. All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
