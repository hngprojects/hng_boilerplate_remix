import { renderToStaticMarkup } from 'react-dom/server';
import Subscription from '../../components/EmailSubRenewal/EmailRenewal';
import type { SubscriptionProps } from '../../components/EmailSubRenewal/EmailRenewal'; 

export const renderSubscriptionRenewalEmail = (props: SubscriptionProps) => {
    return renderToStaticMarkup(<Subscription { ...props } />);
};
