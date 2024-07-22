import React from 'react'

const SignUpPage = () => {
  return (
    <div>
      {isSignUpVisible && (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={SignupData.name} onChange={handleInputChange} required />
            </label>
            <br />
            <label>
              Email:
              <input type="email" name="email" value={SignupData.email} onChange={handleInputChange} required />
            </label>
            <br />
            <label>
              Phone:
              <input type="tel" name="phone" value={SignupData.phone} onChange={handleInputChange} required />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default SignUpPage
