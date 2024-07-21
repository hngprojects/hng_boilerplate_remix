import { Mail, Plus } from "lucide-react";
import { useState } from "react";

import Button from "~/components/customButton/customButton";

export default function Index() {
  const [isLoading, setIsLoading] = useState(false);

  const enterLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="flex h-screen items-center" style={{ fontFamily: "inter" }}>
      <div className="mx-auto flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-[#9747FF] p-5">
        <div className="grid grid-cols-2 gap-2 lg:flex">
          <Button href="https://example.com" variant="primary" size="lg">
            Button CTA
          </Button>

          <Button href="" variant="destructive" size="lg">
            Button CTA
          </Button>

          <Button
            isLoading={isLoading}
            onClick={enterLoading}
            variant="subtle"
            size="lg"
          >
            Button CTA
          </Button>

          <Button href="" variant="ghost" size="lg">
            Button CTA
          </Button>

          <Button
            href=""
            variant="primary"
            size="lg"
            leftIcon={<Mail width={16} />}
          >
            Button CTA
          </Button>

          <Button isLoading={true} variant="default" size="lg">
            Button CTA
          </Button>

          <Button href="" variant="outline" size="lg">
            Button CTA
          </Button>

          <Button href="" variant="ghost" size="lg">
            Button CTA
          </Button>

          <Button
            href=""
            variant="outline"
            size="icon"
            icon={<Plus width={16} height={16} />}
          />

          <Button
            href=""
            variant="outline"
            size="circle"
            icon={<Plus width={16} height={16} />}
          />
        </div>

        <div className="flex w-full justify-end gap-2 md:w-[83%]">
          <Button
            href=""
            variant="link"
            size="sm"
            leftIcon={
              <Mail className="text-[#F97316]" width={16} height={16} />
            }
          >
            Button CTA
          </Button>
          <Button
            href=""
            variant="link"
            size="sm"
            rightIcon={
              <Mail className="text-[#F97316]" width={16} height={16} />
            }
          >
            Button CTA
          </Button>
        </div>
      </div>
    </div>
  );
}
