import type { MetaFunction } from "@remix-run/node";
import Badge from "../components/ui/badge";
import { FaCheck, FaTimes } from "react-icons/fa";

export const meta: MetaFunction = () => {
  return [
    { title: "Badge Component" },
    { name: "description", content: "Badge component!" },
  ];
};

export default function Index() {
  return (
    <div className="p-10 space-y-4">
      <Badge label="Default Badge" variant="default" />
      <Badge label="Primary Badge" variant="primary" icon={<FaCheck />} />
      <Badge label="Success Badge" variant="success" icon={<FaCheck />} />
      <Badge label="Error Badge" variant="error" icon={<FaTimes />} />
    </div>
  );
}
