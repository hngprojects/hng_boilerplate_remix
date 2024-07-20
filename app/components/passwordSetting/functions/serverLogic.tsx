import { ActionFunction } from '@remix-run/node';

type LoginForm = {
    current_password: string
    new_password: string
    confirm_new_password: string
} 

export  const action: ActionFunction = async({ request }) => {
  const body = new URLSearchParams(await request.text());
  const current_password = body.get('current_password');
  const new_password = body.get('new_password');
  const confirm_new_password = body.get('confirm_new_password');


  console.log({current_password, new_password, confirm_new_password});
}