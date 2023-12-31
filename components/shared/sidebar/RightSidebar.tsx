import Link from 'next/link';
import Image from 'next/image';


import RenderTag from '@/components/shared/RenderTag';

const RightSidebar = async () => {


  return (
    <section className='background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[350px]'>
      <div>
        <h3 className='h3-bold text-dark200_light900'>Top Questions</h3>
        <div className='mt-7 flex w-full flex-col gap-[30px]'>
         
        </div>
      </div>
      <div className='mt-16'>
        <h3 className='h3-bold text-dark200_light900'>Popular Tags</h3>
        <div className='mt-7 flex flex-col gap-4'>
          
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
