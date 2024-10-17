interface RSLayoutProps {
  children: React.ReactNode;
}

const Template = ({ children }: RSLayoutProps) => {
  return (
    <div className="animate-appear">
        {children}
    </div>
  );
};
export default Template;
