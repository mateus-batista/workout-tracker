import { useSession } from 'next-auth/client'
import React from 'react'
import AccessDenied from '../components/AccessDenied'

export default function TrainingArea() {
  const [session, loading] = useSession()
  if (typeof window !== 'undefined' && loading) return null
  if (!session) return <AccessDenied />
  return <div>Welcome to training area</div>
}
