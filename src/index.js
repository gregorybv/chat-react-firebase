import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { AuthContextProvider } from "./context/AuthContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  // оборачиваем весь проект в AuthContextProvider. 
  // Этот компонент условно отображает страницу профиля в 
  // зависимости от статуса аутентификации пользователя
  <AuthContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthContextProvider>
)
