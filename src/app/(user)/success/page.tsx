interface SuccessContainerProps {
  sessionId: string
}

export default function SuccessContainer({ sessionId }: SuccessContainerProps) {
  return (
    <div>
      <h1>Success!</h1>
      <p>Your session ID is: {sessionId}</p>
      {/* Add more content as needed */}
    </div>
  )
}




