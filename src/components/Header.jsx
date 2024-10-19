import printerIcon from '../assets/icons/printer-icon.svg'
import gitIcon from '../assets/icons/openmoji_github.svg'

const Header = () => {
  const printDiv = () => {
    const content = document.querySelector('.view-section').innerHTML
    const originalContent = document.body.innerHTML

    document.body.innerHTML = content
    window.print()
    document.body.innerHTML = originalContent
    window.location.reload()
  }

  return (
    <header className='h-[8.6875rem] flex justify-between items-center min-w-[280px]'>
      <h1 className='text-white text-[3.75rem] font-Nordique self-start'>
        resume
      </h1>
      <img
        onClick={printDiv}
        className='w-[50px] cursor-pointer'
        src={printerIcon}
        alt=''
      />
      <a
        href='https://github.com/GopiWebDev/react_cv_application'
        target='_blank'
      >
        <img
          src={gitIcon}
          alt=''
          className='h-[4rem] w-[4rem] cursor-pointer'
        />
      </a>
    </header>
  )
}

export default Header
