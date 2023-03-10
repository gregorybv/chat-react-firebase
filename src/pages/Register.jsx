import React, { useState } from "react"
import Add from "../img/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth" // с сайта firebase
import { auth, db, storage } from "../firebase" // добавляем для авторизации
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { doc, setDoc } from "firebase/firestore"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [err, setErr] = useState(false) //создаем для обработки catch(err)
  const navigate = useNavigate() //после добавления путей в App.js создаем навигацию

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(e.target[0].value) //таким образом мы выведем в консоль name
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]

    try {
      //=== этот код взят с сайта firebase
      // const auth = getAuth() // вместо этого импортируем auth из firebase
      const res = await createUserWithEmailAndPassword(auth, email, password) //создаем res(удалили код, который был внутри)

      const storageRef = ref(storage, displayName)

      const uploadTask = uploadBytesResumable(storageRef, file)

      // Register three observers:
      uploadTask.on(
        (error) => {
          setErr(true) // обрабытываем ошибку
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // updateProfile импортируем из firebase
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            })
            await setDoc(doc(db, "users", res.user.uid), {
              // uid берем из devtools chrome
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            })

            await setDoc(doc(db, "userChats", res.user.uid), {})
            navigate("/")
          })
        }
      )
    } catch (err) {
      setErr(true)
    }
  }

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>GB Chat</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='display name' />
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <input style={{ display: "none" }} type='file' id='file' />
          <label htmlFor='file'>
            <img src={Add} alt='addAvatar' />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
          {/* Обрабатываем ошибку кодом ниже */}
          {err && <span>Something went wrong</span>}
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  )
}

export default Register
