import SubPageHeader from "@/components/SubPageHeader";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <SubPageHeader src="/day-exterior.jpg" title="Profile" />
      <div className="max-w-7xl mx-auto px-4 flex-1">{children}</div>
    </div>
  );
};

export default ProfileLayout;
