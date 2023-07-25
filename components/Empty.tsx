import Image from "next/image";
import React from "react";

interface EmptyProps {
  label: string;
}

const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image
          alt="Empty"
          src="/empty.png"
          fill
          sizes="(min-width: 1024px) 288px"
        />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};

export { Empty };
