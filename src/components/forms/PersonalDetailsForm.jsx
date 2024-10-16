const PersonalDetailsForm = ({ setData }) => {
  const handleInputChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      personal: { ...prev.personal, [name]: value },
    }))
  }

  return (
    <div className='personal-edit'>
      <h2 className='text-[2rem] mt-[2.5rem] text-white flex justify-between'>
        Personal details <span className='text-[1rem]'>*required</span>
      </h2>
      <form action='' className='form'>
        <label htmlFor='name'>full name*</label>
        <input
          type='text'
          name='name'
          id='name'
          onChange={handleInputChange}
          placeholder='enter your name'
        />

        <label htmlFor='phone'>phone*</label>
        <input
          type='tel'
          name='phone'
          id='phone'
          onChange={handleInputChange}
          placeholder='enter your phone number'
        />

        <label htmlFor='email'>email*</label>
        <input
          type='email'
          name='email'
          id='email'
          onChange={handleInputChange}
          placeholder='enter your email'
        />

        <label htmlFor='linkedin'>linkedin*</label>
        <input
          type='text'
          name='linkedin'
          id='linkedin'
          onChange={handleInputChange}
          placeholder='enter your @username'
        />

        <label htmlFor='github'>github*</label>
        <input
          type='text'
          name='github'
          id='github'
          onChange={handleInputChange}
          placeholder='enter your @username'
        />
      </form>
    </div>
  )
}

export default PersonalDetailsForm
