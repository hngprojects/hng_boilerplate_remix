import { LoaderFunction, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import ResetPasswordEmail from '../components/ResetPasswordEmail';

interface LoaderData {
  recipientName: string;
  resetLink: string;
}

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    recipientName: "John Doe",
    resetLink: "https://yourwebsite.com/reset-password",
  };
  return json(data);
};

export default function ResetPasswordEmailRoute() {
  const data = useLoaderData<LoaderData>();
  return (
    <div className='p-5'>
      <ResetPasswordEmail recipientName={data.recipientName} resetLink={data.resetLink} />
    </div>
  );
}
