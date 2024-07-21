import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { useNavigate } from '@remix-run/react'


interface SubscripptionCancelModalProperties {
    children: React.ReactNode
    onReactivateSubscription?: () => void
}


export default function SubscripptionCancelModal({
    children,
    onReactivateSubscription
}: SubscripptionCancelModalProperties) {
    const navigate= useNavigate();
  
 const  onGoToDashboard = () => {
        navigate('/dashboard');
}
    return (
    <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">{children}</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Subscription canceled</DialogTitle>
        <DialogDescription>
         Your subscription has been successfully canceled. If you change your mind, you can reactivate your subscription anytime
        </DialogDescription>
      </DialogHeader>
   
      <DialogFooter>
        <Button variant="outline" onClick={onReactivateSubscription}>Reactivate Subscription</Button>
        <Button type="submit" onClick={onGoToDashboard}>Go to Dashboard</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  )
}
