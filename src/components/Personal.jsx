const Personal = ({ data }) => {
  const { name, phone, email, linkedin, github } = data
  return (
    <div className='mx-auto mb-[1rem]'>
      <h1 className='text-center font-CMU_BOLD text-[1.75rem] tracking-tighter '>
        {name}
      </h1>
      <div className='flex justify-center flex-wrap gap-[10px] text-[12px] w-full'>
        <span>{phone}</span>
        <span>|</span>
        <span>
          <a className='underline' href={`mailto:${email}`} target='_blank'>
            {email}
          </a>
        </span>
        <span>|</span>
        <span>
          <a
            className='underline'
            href={`https://www.linkedin.com/in/${linkedin}`}
            target='_blank'
          >
            {`linkedin.com/in/${linkedin}`}
          </a>
        </span>
        <span>|</span>
        <span>
          <a
            className='underline'
            href={`https://www.github.com/${github}`}
            target='_blank'
          >
            {`github.com/${github}`}
          </a>
        </span>
      </div>
    </div>
  )
}

export default Personal
