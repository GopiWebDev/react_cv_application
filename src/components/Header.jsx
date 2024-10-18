const Header = () => {
  return (
    <header className='h-[8.6875rem] flex justify-between items-center min-w-[280px]'>
      <h1 className='text-white text-[3.75rem] font-Nordique self-start'>
        resume
      </h1>
      <a
        href='https://github.com/GopiWebDev/react_cv_application'
        target='_blank'
      >
        <img
          src='../src/assets/icons/openmoji_github.svg'
          alt=''
          className='h-[4rem] w-[4rem] cursor-pointer'
        />
      </a>
    </header>
  )
}

export default Header
