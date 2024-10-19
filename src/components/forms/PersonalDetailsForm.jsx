const PersonalDetailsForm = ({ setData, data }) => {
  const handleInputChange = (e) => {
    e.preventDefault()
    let { name, value } = e.target

    setData((prev) => {
      let updatedPersonal = { ...prev.personal }

      const newValue = value.trim() === '' ? getDefaultValue(name) : value

      switch (name) {
        case 'name':
          updatedPersonal.name = newValue
          break
        case 'phone':
          updatedPersonal.phone = newValue
          break
        case 'email':
          updatedPersonal.email = newValue
          break
        case 'linkedin':
          updatedPersonal.linkedin = newValue
          break
        case 'github':
          updatedPersonal.github = newValue
          break
        default:
          break
      }

      return {
        ...prev,
        personal: updatedPersonal,
      }
    })
  }

  const getDefaultValue = (fieldName) => {
    const defaults = {
      name: 'Jake Ryan',
      phone: '123-456-789',
      email: 'jake@su.edu.in',
      linkedin: 'jake',
      github: 'jake',
    }

    return defaults[fieldName] || ''
  }

  return (
    <>
      <form action='' className='form'>
        <label htmlFor='name'>Full name*</label>
        <input
          type='text'
          name='name'
          id='name'
          onChange={handleInputChange}
          placeholder='enter your name'
        />

        <label htmlFor='phone'>Phone*</label>
        <input
          type='tel'
          name='phone'
          id='phone'
          onChange={handleInputChange}
          placeholder='enter your phone number'
        />

        <label htmlFor='email'>Email*</label>
        <input
          type='email'
          name='email'
          id='email'
          onChange={handleInputChange}
          placeholder='enter your email'
        />

        <label htmlFor='linkedin'>Linkedin*</label>
        <input
          type='text'
          name='linkedin'
          id='linkedin'
          onChange={handleInputChange}
          placeholder='enter your @username'
        />

        <label htmlFor='github'>Github*</label>
        <input
          type='text'
          name='github'
          id='github'
          onChange={handleInputChange}
          placeholder='enter your @username'
        />
      </form>
    </>
  )
}

export default PersonalDetailsForm
