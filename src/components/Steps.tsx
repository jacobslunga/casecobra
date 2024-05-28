"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React, { FC } from "react";
import { Icons } from "./Icons";

interface StepsProps {}

const STEPS = [
  {
    name: "Step 1: Add image",
    description: "Choose an image for your case",
    url: "/upload",
  },
  {
    name: "Step 2: Customize design",
    description: "Make this case yours",
    url: "/design",
  },
  {
    name: "Step 3: Summary",
    description: "Review your final design",
    url: "/preview",
  },
];

const Steps: FC<StepsProps> = () => {
  const pathName = usePathname();

  return (
    <ol className="rounded-md bg-white lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200">
      {STEPS.map((step, index) => {
        const isCurrent = pathName.endsWith(step.url);
        const isCompleted = STEPS.slice(index + 1).some((step) =>
          pathName.endsWith(step.url)
        );

        const imgPath = `/snake-${index + 1}.png`;

        return (
          <li key={step.name} className="relative overflow-hidden lg:flex-1">
            <div>
              <span
                className={cn(
                  "absolute left-0 top-0 h-full w-1 bg-zinc-400 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full",
                  {
                    "bg-zinc-700": isCurrent,
                    "bg-primary": isCompleted,
                  }
                )}
                aria-hidden="true"
              />

              <span
                className={cn(
                  index !== 0 ? "lg:pl-9" : "",
                  "flex items-center px-6 py-4 text-sm font-medium"
                )}
              >
                <span className="flex shrink-0">
                  <img
                    src={imgPath}
                    className={cn(
                      "flex w-20 h-20 object-contain items-center justify-center",
                      {
                        "border-none": isCompleted,
                        "border-zinc-700": isCurrent,
                      }
                    )}
                  />
                </span>

                <span className="ml-4 h-full mt-0.5 flex min-w-0 flex-col justify-center">
                  <span
                    className={cn("text-sm font-semibold text-zinc-700", {
                      "text-primary": isCompleted,
                      "text-zinc-700": isCurrent,
                    })}
                  >
                    {step.name}
                  </span>
                  <span className="text-sm text-zinc-500">
                    {step.description}
                  </span>
                </span>
              </span>

              {/* separator */}
              {index !== 0 && (
                <div
                  className="absolute inset-0 hidden w-3 lg:block"
                  aria-hidden="true"
                >
                  <Icons.separator />
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default Steps;
