"use client";

import { Popover, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button";
import { Store as StoreIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const StoreInformation = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-label="Select a Store"
          className={cn("w-fit justify-between text-base items-center")}
        >
          <StoreIcon className="mr-1 h-5 w-5" />
          Raja Emas
        </Button>
      </PopoverTrigger>

    </Popover>
  );
};

export default StoreInformation;
