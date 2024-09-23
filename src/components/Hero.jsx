const Hero = () => {
  return (
    <div className='h-full w-full flex justify-around mt-16 my-10'>
      <div className='w-1/2 flex flex-col justify-center n gap-10 items-center'>
        <div className='personal'>Personal Info</div>
        <div className='personal'>Education</div>
        <div className='personal'>Experience</div>
        <div className='personal'>Projects</div>
      </div>
      <div className='print w-1/2'>
        <div className='w-[37rem] min-h-[35rem] bg-white'>
          <div>Jake Ryan</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
