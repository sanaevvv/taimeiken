import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa6';
import { AiOutlineYoutube } from 'react-icons/ai';
const Footer = () => {
  return (
    <footer className="text-white text-center py-4 border-t border-white/20 bg-black w-full">
      <div className="flex justify-center gap-4 mb-2">
        <Link href="#">
          <FaInstagram color="white" size={24} />
        </Link>
        <Link href="#">
          <AiOutlineYoutube color="white" size={24} />
        </Link>
      </div>
      <small className="opacity-50 hover:opacity-100 transition-opacity">
        Copyright(c){new Date().getFullYear()},TAIMEIKEN Co.,ltd. All Rights
        Reserved.
      </small>
    </footer>
  );
};

export default Footer;
