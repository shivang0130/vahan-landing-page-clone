import type { LucideIcon } from "lucide-react";

interface Props {
    title: string;
    description: string;
    icon: LucideIcon;
}

const ServiceCard = ({
    title,
    description,
    icon: Icon,
}: Props) => {
    return (
        <div
            className="
  group
  bg-white
  rounded-3xl
  p-6
  border border-slate-100
  shadow-sm
  hover:shadow-2xl
  hover:-translate-y-1
  transition-all
  duration-300
  cursor-pointer
"
        >
            <div
                className="
          w-14 h-14
          rounded-2xl
          bg-blue-50
          flex items-center justify-center
          mb-5
          group-hover:scale-110
          transition-transform
        "
            >
                <Icon
                    size={28}
                    className="text-blue-700"
                />
            </div>

            <h3 className="text-xl font-semibold text-slate-900">
                {title}
            </h3>

            <p className="mt-3 text-slate-600 leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default ServiceCard;