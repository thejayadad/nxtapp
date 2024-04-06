import React from 'react'
import { currentUser, useUser } from "@clerk/nextjs";

const layout = async ({children}) => {
  // const { isLoaded, isSignedIn, user } = useUser();
  const user = await currentUser();
  console.log("User " + user.emailAddresses[0].emailAddress)
  const email = user.emailAddresses[0].emailAddress
  return (
    <div>
    {user ? (
      <div>
        <p>Welcome, {user.firstName}!</p>
        <p>Email: {email}</p>
        {children}
      </div>
    ) : (
      <div>
        <p>Loading...</p>
      </div>
    )}
  </div>
  )
}

export default layout