import { Header } from "@/components/header";
interface LayoutWrapperProps {
  children: React.ReactNode;
}

export const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
