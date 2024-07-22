import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";

type Variants =
  | "default"
  | "destructive"
  | "outline"
  | "link"
  | "ghost"
  | "secondary";

type DialogProperties = {
  headerText: string;
  description?: string;
  footer: React.ReactNode[];
  triggerText: string;
  variants: Variants | null | undefined;
};

export default function Dialog({
  headerText,
  description,
  footer,
  triggerText,
  variants,
}: DialogProperties) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={variants}>{triggerText}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{headerText}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="gap-2">
          {footer.map((item, index) => (
            <AlertDialogAction key={index} asChild>
              {item}
            </AlertDialogAction>
          ))}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
