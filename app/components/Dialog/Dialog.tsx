import { cn } from "../../lib/utils/cn";

type DialogProperties = {
  headerText: string;
  description?: string;
  footer: React.ReactNode[];
};
const Dialog = ({ headerText, description, footer }: DialogProperties) => {
  return (
    <div className="flex flex-col p-6 gap-4 bg-white rounded-[6px] max-w-[512px] w-auto">
      <header className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-primary">{headerText}</h2>
        {description && (
          <p className="font-normal text-sm leading-[1.05rem] text-muted-foreground text-pretty">
            {description}
          </p>
        )}
      </header>
      <footer className=" flex flex-row w-full justify-end gap-2">
        {footer.map((item, index) => (
          <div key={index} className={cn("font-normal text-sm text-[#0F172A]")}>
            {item}
          </div>
        ))}
      </footer>
    </div>
);
};
export default Dialog;