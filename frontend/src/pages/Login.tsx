import { useState } from "react"

const Login = () => {

  const [isLoginState, setIsLoginState] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)


  const handleSubmit = async (e: React.SubmitEvent) => {
      e.preventDefault()
      setLoading(true);
      setTimeout(() => window.location.href = "/", 1000)
  }


  return (
    <div>
      Login
    </div>
  )
}

export default Login
