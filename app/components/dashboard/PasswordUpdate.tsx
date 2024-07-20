import { FunctionComponent, useEffect, useState, useRef } from "react";
import { Form } from "@remix-run/react";
import { Check, EyeOff, Eye, CircleCheck } from 'lucide-react';
import { Button } from "../ui/button";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";

interface PasswordValues {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

const PasswordUpdate = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null)
    const [validation, setValidation] = useState({
        hasUppercase: false,
        hasNumber: false,
        hasMinLength: false,
    });
    const [displayValue, setDisplayValue] = useState<PasswordValues>({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [actualValue, setActualValue] = useState<PasswordValues>({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handlePasswordValidation = (value: string) => {
        const hasUppercase = /[A-Z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        const hasMinLength = value.length >= 8;
        setValidation({
            hasUppercase,
            hasNumber,
            hasMinLength
        });
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const { name, value } = event.target;
        let val: keyof PasswordValues = name as keyof PasswordValues

        setActualValue((prevActualValue) => ({
            ...prevActualValue,
            [name]: (actualValue[val] + value.charAt(value.length - 1)).length > value.length ? actualValue[val].slice(0, -1) : actualValue[val] + value.charAt(value.length - 1)
        }));

        setDisplayValue((prevDisplayValue) => ({
            ...prevDisplayValue,
            [name]: '*'.repeat(value.length)
        }));
        if (name === 'newPassword') {
            handlePasswordValidation(actualValue[val]);
        }
       
    };
    useEffect(() => {
        const inputs = document.querySelectorAll<HTMLInputElement>('.psw-input');
        inputs.forEach((element) => {
            element.addEventListener(
            'select',
            function () {
                this.select = () => {};
                this.selectionStart = this.selectionEnd;
            },
            false
            );
        });
    }, []);
  return (
    <div className="w-full bg-white pl-10">
        <h1 className="text-[rgba(20,20,20,1)] font-bold text-2xl mb-1 mt-10">Password Settings</h1>
        <p className="text-[rgba(67,67,67,1)] mb-5 text-base">Update password for enhanced account security</p>
        <Form className="w-2/3 max-md:w-5/6 flex flex-col gap-4">
            <label className="flex flex-col gap-2 ">
                <p className="text-base text-[rgba(67,67,67,1)]">Current Password</p>
                <div className={`border-[1px] ${actualValue.currentPassword.length < 5 && actualValue.currentPassword.length != 0 ? 'border-[rgba(220,38,38,1)]' : 'border-[rgba(147,147,147,1)]'} rounded-lg select-none flex justify-between items-center p-1 pr-5`}>
                    <input 
                        type="text" 
                        name="currentPassword" 
                        value={showPassword ? actualValue.currentPassword : displayValue.currentPassword} 
                        onChange={handleChange} 
                        placeholder="Enter current password"
                        className="psw-input text-[rgba(147,147,147,1)] bg-transparent hi rounded-lg w-11/12 bg-slate-600 h-12 !select-none border-none outline-none px-5"
                    />
                    
                    { !showPassword ? 
                        <EyeOff size={24} color="rgba(147,147,147,1)" onClick={() => setShowPassword(!showPassword)}/> 
                        : 
                        <Eye size={24} color="rgba(147,147,147,1)" onClick={() => setShowPassword(!showPassword)} /> 
                    }
                    
                </div>
                {
                    actualValue.currentPassword.length < 5 && actualValue.currentPassword.length != 0 ? 
                     <p className="text-sm font-[500] text-[rgba(220,38,38,1)]">Invalid password</p> 
                    : 
                    null
                } 
                
            </label>

            <label className="flex flex-col gap-2 ">
                <p className="text-base text-[rgba(67,67,67,1)]">New Password</p>
                <div className="border-[1px] border-[rgba(147,147,147,1)] rounded-lg select-none flex justify-between items-center p-1 pr-5">
                    <input 
                        type="text" 
                        name="newPassword" 
                        value={showNewPassword ? actualValue.newPassword : displayValue.newPassword} 
                        onChange={handleChange} 
                        placeholder="Enter new password"
                        onFocus={ () => {
                            // setIsFocused(true);
                          }}
                        className="psw-input text-[rgba(147,147,147,1)] bg-transparent hi rounded-lg w-11/12 bg-slate-600 h-12 !select-none border-none outline-none px-5"
                    />
                    
                    { !showNewPassword ? 
                        <EyeOff size={24} color="rgba(147,147,147,1)" onClick={() => setShowNewPassword(!showNewPassword)}/> 
                        : 
                        <Eye size={24} color="rgba(147,147,147,1)" onClick={() => setShowNewPassword(!showNewPassword)} /> 
                    }
                    
                </div>
                {displayValue.newPassword.length > 0 && (
                    <div>
                        <div className="flex gap-3">
                            <span className={`w-24 rounded h-1 ${actualValue.newPassword.length > 0 ? (validation.hasUppercase ? 'bg-[rgba(109,195,71,1)]' : 'bg-[rgba(220,38,38,1)]') : 'bg-[rgba(182,182,182,1)]' } flex`}></span>
                            <span className={`w-24 rounded h-1 ${actualValue.newPassword.length > 0 ? (validation.hasNumber ? 'bg-[rgba(109,195,71,1)]' : 'bg-[rgba(220,38,38,1)]') : 'bg-[rgba(182,182,182,1)]' } flex`}></span>
                            <span className={`w-24 rounded h-1 ${actualValue.newPassword.length > 0 ? (validation.hasMinLength ? 'bg-[rgba(109,195,71,1)]' : 'bg-[rgba(220,38,38,1)]') : 'bg-[rgba(182,182,182,1)]' } flex`}></span>
                        </div>
                        <div className="mt-3 grid gap-2">
                            <p className="text-sm mb-1">Weak password. Must contain;</p>
                            <div className="flex gap-2">
                                {validation.hasUppercase ? <CircleCheck color="rgba(109,195,71,1)" /> : <CircleCheck color="rgba(220,38,38,1)" />}
                                <p className="text-sm">At least 1 uppercase</p>
                            </div>
                            <div className="flex gap-2">
                                {validation.hasNumber ? <CircleCheck color="rgba(109,195,71,1)" /> : <CircleCheck color="rgba(220,38,38,1)" />}
                                <p className="text-sm">At least 1 number</p>
                            </div>
                            <div className="flex gap-2">
                                {validation.hasMinLength ? <CircleCheck color="rgba(109,195,71,1)" /> : <CircleCheck color="rgba(220,38,38,1)" />}
                                <p className="text-sm">At least 8 characters</p>
                            </div>
                        </div>
                    </div>
                )}
                
            </label>

            <label className="flex flex-col gap-2 ">
                <p className="text-base text-[rgba(67,67,67,1)]">Confirm Password</p>
                <div className={`border-[1px] ${actualValue.confirmPassword.length > 0 ? (actualValue.newPassword != actualValue.confirmPassword ? 'border-[rgba(220,38,38,1)]' : 'border-[rgba(147,147,147,1)]') : 'border-[rgba(147,147,147,1)]'} rounded-lg select-none flex justify-between items-center p-1 pr-5`}>
                    <input 
                        type="text" 
                        name="confirmPassword" 
                        value={showConfirmPassword ? actualValue.confirmPassword : displayValue.confirmPassword} 
                        onChange={handleChange}
                        placeholder="Enter confirm password"
                        className="psw-input text-[rgba(147,147,147,1)] bg-transparent hi rounded-lg w-11/12 bg-slate-600 h-12 !select-none border-none outline-none px-5"
                    />
                    
                    { !showConfirmPassword ? 
                        <EyeOff size={24} color="rgba(147,147,147,1)" onClick={() => setShowConfirmPassword(!showConfirmPassword)}/> 
                        : 
                        <Eye size={24} color="rgba(147,147,147,1)" onClick={() => setShowConfirmPassword(!showConfirmPassword)} /> 
                    }
                    
                </div>
                {
                    actualValue.confirmPassword.length > 0 ? 
                    (actualValue.newPassword != actualValue.confirmPassword && <p className="text-sm font-[500] text-[rgba(220,38,38,1)]">Password does not match</p>) 
                    : 
                    null
                } 
            
            </label>


            <AlertDialog>
                
                <div className="flex gap-5 mt-6 ">
                    <Button type="submit" variant="outline" size="default" className="w-24 h-12 text-base bg-transparent font-bold text-black rounded-lg">Cancel</Button>
                    <AlertDialogTrigger asChild>
                        <Button 
                            type="submit" 
                            onClick={() => { 
                                setActualValue({currentPassword: '', newPassword: '', confirmPassword: ''}) 
                                setDisplayValue({currentPassword: '', newPassword: '', confirmPassword: ''})
                            }} 
                            variant="default" 
                            size="default" 
                            className="w-44 h-12 text-base bg-[rgba(249,115,22,1)] font-bold text-white rounded-lg"
                        >
                            Update Password
                        </Button>
                    </AlertDialogTrigger>
                    
                </div>
                <AlertDialogContent className="sm:max-w-md">
                    <AlertDialogHeader>
                    <AlertDialogTitle>Password Successfully Updated!</AlertDialogTitle>
                    <AlertDialogDescription>
                        Your password has been successfully updated! You can now log in with your new password.
                    </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter className="sm:justify-end">
                    <AlertDialogCancel asChild className='flex flex-row-reverse'>
                        <Button type="button" variant="default" className="px-6 font-semibold bg-[rgba(249,115,22,1)]">
                            Continue
                        </Button>
                    </AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            
        </Form>
    </div>
  );
};

export default PasswordUpdate;
