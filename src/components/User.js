import React from 'react'

const User = ({userData}) => {
  return (
    <div>
        {userData &&
          userData.length > 0 &&
          userData.map((user, index) => (
            <div key={index}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.website}</p>
            </div>
          ))}
    </div>
  )
}

export default User