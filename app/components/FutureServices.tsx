import React from "react";

type Service = {
  name: string;
  description: string;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
};

function ComingSoonCard({ service }: { service: Service }) {
  return (
    <div className="relative rounded-2xl bg-white p-6 w-140 ring-1 ring-gray-200 opacity-90">
      {/* "Coming Soon" Badge */}
      <div className="absolute right-4 top-4 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
        Coming Soon
      </div>

      {/* Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50">
        <service.icon className="h-6 w-6 text-gray-500" />
      </div>

      {/* Name */}
      <h3 className="mt-4 text-lg font-semibold text-gray-900">
        {service.name}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm leading-6 text-gray-600">
        {service.description}
      </p>
    </div>
  );
}

export default ComingSoonCard;
