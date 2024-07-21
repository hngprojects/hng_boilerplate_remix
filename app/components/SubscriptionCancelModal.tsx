import { useNavigate } from "@remix-run/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";

interface SubscriptionCancelModalProperties {
  children: React.ReactNode;
  onReactivateSubscription?: () => void;
}

export default function SubscriptionCancelModal({
  children,
  onReactivateSubscription,
}: SubscriptionCancelModalProperties) {
  const navigate = useNavigate();

  const onGoToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{children}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Subscription canceled</DialogTitle>
          <DialogDescription>
            Your subscription has been successfully canceled. If you change your
            mind, you can reactivate your subscription anytime
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button variant="outline" onClick={onReactivateSubscription}>
            Reactivate Subscription
          </Button>
          <Button type="submit" onClick={onGoToDashboard}>
            Go to Dashboard
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
