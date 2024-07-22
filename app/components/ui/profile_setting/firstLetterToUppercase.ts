export function firstLetterToUppercase(value: string | undefined) {
  if (value) {
    const [first, ...remaining] = value.toLowerCase().split(" ");
    const [firstLetter, ...remainingLetter] = first;

    return (
      firstLetter.toUpperCase() +
      remainingLetter.join("") +
      " " +
      remaining.join(" ")
    );
  } else return "";
}
