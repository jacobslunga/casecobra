import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone: FC<PhoneProps> = ({
  className,
  imgSrc,
  dark = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        className="pointer-events-none z-50 select-none"
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        alt="phone image"
      />

      <div className="absolute -z-10 inset-0">
        <img src={imgSrc} className="object-cover" alt="overlaying image" />
      </div>
    </div>
  );
};

export default Phone;
