import { Header } from "@/components/Header";

interface RSLayoutProps {
    children: React.ReactNode;
}

const RSLayout = ({ children }: RSLayoutProps) => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <Header />
      <div className="px-4 py-2">{children}</div>
    </div>
  );
};
export default RSLayout;