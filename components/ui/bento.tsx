import { cn } from "@/lib/utils";
import { Button } from "./button";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-auto grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  link,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  link: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-primary  border border-gray-200 justify-between flex flex-col space-y-0",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-white text-lg dark:text-white mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans mb-2 font-normal text-white  dark:text-neutral-300">
          {description}
        </div>
        <Link href={`/services/${link}`}>
          <Button variant={"secondary"}>Learn More</Button>
        </Link>
      </div>
    </div>
  );
};
