import { twMerge } from "tailwind-merge";
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={twMerge("container mx-auto px-5", className)}>
      {children}
    </div>
  );
};
