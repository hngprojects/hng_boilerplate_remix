export default function Logo({ expanded }: { expanded: boolean }) {
  return (
    <h1
      className={`font-[500] uppercase text-primary-foreground ${
        expanded
          ? "text-[1.25rem] leading-[1.2rem]"
          : "text-[0.75rem] leading-normal"
      }`}
    >
      logo
    </h1>
  );
}
