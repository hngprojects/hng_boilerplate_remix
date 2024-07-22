import { Button } from "../button";

interface ButtonsInterface {
  reset: () => void;
}

function Buttons({ reset }: ButtonsInterface) {
  return (
    <div className="flex flex-row items-center gap-2.5 self-end">
      <Button variant="outline" type="reset" onClick={reset}>
        Cancel
      </Button>

      <Button type="submit">Save changes</Button>
    </div>
  );
}

export default Buttons;
