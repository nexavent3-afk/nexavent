import { ReactNode } from "react";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-[#131b24] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]">

      <div className="mb-6 flex justify-center text-cyan-400">
        {icon}
      </div>

      <h3 className="mb-4 text-center text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="text-center leading-8 text-gray-400">
        {description}
      </p>

    </div>
  );
}