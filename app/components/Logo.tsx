export default function Logo({ expanded }: { expanded: boolean }) {
  return (
    <h1
      className={`text-primary-foreground uppercase font-[500] ${
        expanded
          ? "text-[1.25rem] leading-[1.2rem]"
          : "text-[0.75rem] leading-normal"
      }`}
    >
      logo
    </h1>
  );
}
