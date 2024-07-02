import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DialogCloseButton({
  title,
  fulllist,
}: {
  title: string;
  fulllist: any;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Learn More</Button>
      </DialogTrigger>
      <DialogContent className="w-[90%] rounded-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">{title}</DialogTitle>
          <DialogDescription>{fulllist}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
