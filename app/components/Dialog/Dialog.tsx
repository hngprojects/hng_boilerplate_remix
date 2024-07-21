import { cn } from "../../lib/utils/cn";

type DialogProperties = {
  headerText: string;
  description?: string;
  footer: React.ReactNode[];
};
const Dialog = ({ headerText, description, footer }: DialogProperties) => {
  return (
    <div className="flex w-auto max-w-[512px] flex-col gap-4 rounded-[6px] bg-white p-6">
      <header className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-primary">{headerText}</h2>
        {description && (
          <p className="text-pretty text-sm font-normal leading-[1.05rem] text-muted-foreground">
            {description}
          </p>
        )}
      </header>
      <footer className="flex w-full flex-row justify-end gap-2">
        {footer.map((item, index) => (
          <div key={index} className={cn("text-sm font-normal text-[#0F172A]")}>
            {item}
          </div>
        ))}
      </footer>
    </div>
  );
};
export default Dialog;
