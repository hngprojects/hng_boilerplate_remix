import React,{useState} from 'react';
import Button from '~/components/customButton/CustomButton';
import { Mail, Plus } from 'lucide-react';

export default function Index() {
  const [isLoading, setIsLoading] = useState(false);

  const enterLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <div className='flex items-center h-screen'style={{fontFamily:"inter"}}>
      <div className='flex flex-col gap-2 mx-auto border border-[#9747FF] border-dashed justify-center items-center p-5 rounded-lg'>
        <div className="grid grid-cols-2 md:flex gap-2">
          <Button href="https://example.com" className="bg-primary text-white h-[40px] flex justify-center items-center">
            Button CTA
          </Button>

          <Button href="" className="bg-destructive border-none text-white hover:bg-[#EF4444] hover:text-[#FFFF] flex h-[40px]">
            Button CTA
          </Button>

          <Button   isLoading={isLoading}
            onClick={enterLoading} href="" className="bg-[#F1F5F9] flex h-[40px] text-[#0F172A]">
            Button CTA
          </Button>

          <Button href="" className="bg-[#F1F5F9] text-[#0F172A] flex items-center justify-center h-[40px]">
            Button CTA
          </Button>

          <Button href="" className="bg-primary flex h-[40px] text-[#FFFFFF]">
            <div className='flex text-[14px] items-center gap-1 font-medium'>
            <Mail width={16} height={16}/> Button CTA
            </div>
          </Button>

          <Button isLoading={true} href="" className="bg-[#0F172A80] text-[#FFFFFF] text-[14px] flex items-center justify-center h-[40px]">
            Button CTA
          </Button>

          <Button href="" className="bg-[#FFFFFF] text-[#0F172A] text-[14px] flex items-center justify-center h-[40px]">
            Button CTA
          </Button>

          <Button href="" className="bg-[#FFFFFF] text-[#0F172A] text-[14px] flex items-center justify-center h-[40px] border-none">
            Button CTA
          </Button>

          <Button  href="" className="bg-[#FFFFFF] text-[#0F172A] text-[14px] flex items-center justify-center h-[32px] w-[32px]">
            <Plus className='w-[9px]' />
          </Button>

          <Button href="" className="bg-[#FFFFFF] text-[#0F172A] text-[14px] flex items-center justify-center h-[40px] w-[40px] rounded-full">
            <Plus width={16} height={16}/>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:flex gap-2">
          <Button href="" className="bg-[#F97316] text-white h-[40px] flex justify-center items-center">
            Button CTA
          </Button>

          <Button href="" className="bg-destructive text-white hover:bg-black flex h-[40px]">
            Button CTA
          </Button>

          <Button href="" className="bg-[#E2E8F0] flex h-[40px] text-[#0F172A]">
            Button CTA
          </Button>

          <Button href="" className="bg-[#F1F5F9] text-[#0F172A] flex items-center justify-center h-[40px]">
            Button CTA
          </Button>

          <Button href="" className="bg-[#F97316] hover:bg-black flex h-[40px] text-[#FFFFFF]">
            <span className='flex items-center gap-1'><Mail className='text-white' width={16} height={16}/> Button CTA</span>
          </Button>

          <Button isLoading={true} href="" className="bg-[#334155] text-[#FFFFFF] text-[14px] flex items-center justify-center h-[40px w-[109px hover:bg-[#334155] hover:!text-[#FFFFFF] hover:!border-none">
            Button CTA
          </Button>

          <Button href="" className="bg-[#F1F5F9] text-[#0F172A] text-[14px] flex items-center justify-center h-[40px]">
            Button CTA
          </Button>

          <Button href="" className="bg-[#FFFFFF] text-[#0F172A] text-[14px] flex items-center justify-center h-[40px] underline">
            Button CTA
          </Button>

          <Button href="" className="bg-[#F1F5F9] text-[#0F172A] text-[14px] flex items-center justify-center h-[32px] w-[32px]">
            <Plus width={16} height={16}/>
          </Button>

          <Button href="" className="bg-[#F1F5F9] text-[#0F172A] text-[14px] flex items-center justify-center h-[40px] w-[40px] !rounded-full">
            <Plus width={16} height={16}/>
          </Button>
        </div>
        
        <div className='flex justify-end gap-2 w-[83%]'>
          <Button href="" className="bg-[#FFFF] text-[#0F172A] text-[14px] flex items-center justify-center h-[40px w-[109px">
            <span className='flex items-center gap-1'><Mail className='text-[#F97316]' width={16} height={16}/>Button CTA </span>
          </Button>
          <Button href="" className="bg-[#FFFF] text-[#0F172A] text-[14px] flex items-center justify-center h-[40px] w-[109px">
            <span className='flex items-center gap-1'>Button CTA <Mail className='text-[#F97316]' width={16} height={16}/></span>
          </Button>
        </div>
      </div>
    </div>
  );
}
