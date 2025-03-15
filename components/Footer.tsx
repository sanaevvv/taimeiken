const Footer = () => {
  return (
    <footer className="text-white text-center py-4 border-t border-white/20 bg-black w-full mt-auto">
      <small className="opacity-50 hover:opacity-100 transition-opacity">
        Copyright(c){new Date().getFullYear()},TAIMEIKEN Co.,ltd. All Rights
        Reserved.
      </small>
    </footer>
  );
};

export default Footer;
