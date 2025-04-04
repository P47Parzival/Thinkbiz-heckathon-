import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './homepage'
import { ClerkProvider } from '@clerk/clerk-react'

const clerk_key = import.meta.env.VITE_CLERK_KEY

if(!clerk_key){
  throw new Error("key was not found")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerk_key}>
      <Homepage></Homepage>
    </ClerkProvider>
  </StrictMode>,
)
