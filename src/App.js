import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Login from './components/Login'
import Signup from './components/Signup';
import Home from './components/Home';

function App() {
  const [modal, setModal] = useState(false);

  function popUp() {

  }

  return (
   <div className='App'>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </Router>
   </div>
  );
}

// function App() {

// const data = [         
//   {id: 403, title: 'Task 403', priority: 'High', type: 'Improvement', complete: 100},
//   {
//       id: 532,
//       title: 'Task 532',
//       priority: 'Medium',
//       type: 'Improvement',
//       complete: 30
//   },
//   {id: 240, title: 'Task 240', priority: 'High', type: 'Story', complete: 66}]

// const column = Object.keys(data[0]);


// const theading = () => {
//    return column.map((d) => {

//     return <th key={d}> {d}</th>
//    })
  
  
// }

//   const tdata = () => {
//     return data.map((d) => {
//       return <tr>
//         {
//           column.map((d1) => {
//             return <td>{d[d1]}</td>
//           })
//         }
//       </tr>
//     })
//   }

// return (
//   <div>
//     <table className='table'>
//       <thead>
//         <tr> {theading()}</tr >
//       </thead>
//       <tbody>
//         {tdata()}
//       </tbody>
//     </table>

//   </div>
// )

// }

export default App;










































































































// USE OF KEY IN LIST

// function App() {

  
//   const ids = ['Abhinav', 'Aman', 'Ritesh', 'Sudeep', 'Vishesh'];
//   const listElements = ids.map((id, index)=>{
//   return(
//   <li key={index} item = {id}>
//      {id}
//   </li>
//   )
//   })

//   return (
//     <>
//     <h2>Member of Daddu Gang : </h2>
//     <ol>{listElements}</ol>
//     </>
    
//     )
  

// }

// export default App;






// function App() {
// const [registration, setRegistration] = useState({'name': '', 'email':'', 'number':'', 'password': '', 'confirmPassword': ''});
// const[record, setRecord] = useState([]);
// function handleInput(e) {
//  const name = e.target.name;
//  const value = e.target.value;
//  setRegistration({...registration, [name]:value})
// }

// function handleSubmit(e) {

//   if(!registration.name || !registration.email || !registration.number || !registration.password || !registration.confirmPassword) {
//     return ;
//   }
//   setRecord([...record, registration])
//   setRegistration({'name':'', 'email': '', 'number': '', 'password':'', 'confirmPassword': ''})
//   console.log(record);

// }

// return (
//   <>
//   <input placeholder='Enter Name: ' onChange={handleInput} type = 'text' name = 'name' value = {registration.name}></input> <br></br>
//   <input placeholder='Enter Email: ' onChange={handleInput} type = 'email' name = 'email' value = {registration.email}></input><br></br>
//   <input placeholder='Enter Number: ' onChange={handleInput} type = 'text' name = 'number' value = {registration.number}></input><br></br>
//   <input placeholder='Enter Password: ' onChange={handleInput} type = 'password' name = 'password' value = {registration.password}></input><br></br>
//   <input placeholder='Enter Confirm Password: ' onChange={handleInput} type = 'password' name = 'confirmPassword' value = {registration.confirmPassword}></input><br></br>
//   <button onClick={handleSubmit}>submit</button>
  
//   <div>
//     {
//       record.map(r => {
//         return ( 
//           <div>
//             <p><b>Name: </b> {r.name}, <b>Email: </b> {r.email}, <b>Number: </b> {r.number}, <b>Password: </b> {r.password}, <b>Confirm Password: </b>{r.confirmPassword}</p>


//           </div>
//         )
      
//       })
//     }

//   </div>
  
  
//   </>

// )


// }








// function App() {
//   return (
//    <>
//    <h1>Hi from APP</h1>
//    <Component1/>
//    </>
//   )
// }
// const user = createContext();

// function Component1() {
  
//   const val = 'Abhinav Gupta'
//   return (
    
//     <user.Provider value = {'Abhinav Gupta'}>
//        <h1>Hello from Component1</h1>
//       <Component2/>
//     </user.Provider>
    
//   )
// }

// function Component2() {
//   return (
//     <>
//     <h1>Hello from Component2</h1>
//     <Component3/>
//     </>
//   )
// }

// function Component3() {
//   return (
//     <>
//     <h1>Hello from Component3</h1>
//     <Component4/>
//     </>
//   )
// }

// function Component4() {
//   const userName = useContext(user)
//   return (
//     <h1>{`hi ${userName} from last component `}</h1>
//   )
// }

// export default App;











// import "./styles.css";
// import React, {
//   useState,
//   useEffect,
//   useContext,
//   createContext,
//   useReducer,
//   useRef
// } from "react";
// import Signup from './Signup'

// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [submit, setSubmit] = useState(false);

//   function handleEmail(e) {
//     setEmail(e.target.value);
//   }

//   function handlePassword(e) {
//     setPassword(e.target.value);
//   }

//   function handleSubmit() {++


//     setSubmit(true);
//   }

//   function successMessage() {
//     return (
//       submit && (
//         <div>
//           <h1>
//             successfully submitted, user: {name}, email: {email}
//           </h1>
//         </div>
//       )
//     );
//   }
//   return (
//     <>
//       <div>{successMessage()}</div>
//       <label>Enter Email</label>
//       <input onChange={handleEmail} value={email} type="email" />
//       <br></br>
//       <label>Enter Password</label>
//       <input onChange={handlePassword} value={password} type="password" />
//       <br></br>
//       <signup/>
//       <button className = 'App' onClick={handleSubmit} color = 'red'> submit </button>
//     </>
//   );
// }

// function App() {

//   // States for registration
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   // States for checking the errors
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState(false);
//   const reference = useRef(null);

//   // Handling the name change
//   const handleName = (e) => {
//     setName(e.target.value);
//     setSubmitted(false);
//   };

//   // Handling the email change
//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//     setSubmitted(false);
//   };

//   // Handling the password change
//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//     setSubmitted(false);
//   };

//   // Handling the form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name === '' || email === '' || password === '') {
//       setError(true);
//     } else {
//       setSubmitted(true);
//       setError(false);
//     }
//   };

//   // Showing success message
//   const successMessage = () => {
//     return (
//       <div
//         className="success"
//         style={{
//           display: submitted ? '' : 'none',
//         }}>
//         <h1>User {name} successfully registered!!</h1>
//       </div>
//     );
//   };

//   // Showing error message if error is true
//   const errorMessage = () => {
//     return (
//       <div
//         className="error"
//         style={{
//           display: error ? '' : 'none',
//         }}>
//         <h1>Please enter all the fields</h1>
//       </div>
//     );
//   };

//   return (
//     <div className="form">
//       <div>
//         <h1>User Registration</h1>
//       </div>

//       {/* Calling to the methods */}
//       <div className="messages">
//         {errorMessage()}
//         {successMessage()}
//       </div>

//       <form><h3>
//         {/* Labels and inputs for form data */}
//         <label className="label">Name</label>
//         <input onChange={handleName} className="input"
//           value={name} type="text" />

//         <label className="label">Email</label>
//         <input onChange={handleEmail} className="input"
//           value={email} type="email" />

//         <label className="label">Password</label>
//         <input onChange={handlePassword} className="input"
//           value={password} type="password" />

//         <button onClick={handleSubmit} className="btn" type="submit">
//           Submit
//         </button>
//         </h3>
//       </form>
//     </div>
//   );
// }

// example of useRef hook

// const App = () => {

//   const reference = useRef(null)

//   useEffect(() => {
//     reference.current.focus();

//   }, [])

//   return (
//     <>
//       <input ref = {reference} type='text' />

//       <br></br>
//       <button>submit</button>
//     </>
//   )
// }

// Example of useReducer hook

//   const initialState = 0;

// const reducer = (state, action) => {
//   switch(action) {
//     case 'increment':
//       return state + 1
//     case 'decrement' :
//       return state -1
//    case 'reset' :
//      return initialState
//    default :
//      return state
//   }
// }
// function App() {
//   const [count, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <div> Count - {count} </div>
//       <button onClick = {() => dispatch('increment')}> increment</button>
//       <button onClick = {() => dispatch('decrement')}> decrement </button>
//       <button onClick = {() => dispatch('reset')}> reset </button>
//     </div>
//   )
// }



// useEffect hook example

// function App() {
//   const [count, setCount] = useState(1);
//   const [ calculation, setCalculation] = useState(1);

//   useEffect(() => {
//     setCalculation(() => count*2);
//   });
//  function resetCount() {
//    setCount(1);
//    setCalculation(1);
//  }
//   return (
//     <>
//     <h1>
//       <p1> count is {count}</p1>
//       <br></br>
//        <button onClick = {() => setCount(() => count+1) }> increment </button>
//        <br></br>
//        <button onClick = {() => setCount((count) => count-1) }> decrement </button>
//        <br></br>
//        <button onClick = { () => resetCount()}> reset </button>
//        <br></br>
//        <p1>calculation is {calculation}</p1>
//     </h1>
//     </>
//   )
// }

// -- useContext hook

// const userName = createContext();
// const userAge = createContext();
// function App() {
//   return (
//     <userName.Provider value = 'Abhinav'>
//       <userAge.Provider value = '26'>
//         <h1>This is App component</h1>
//         <Component1
//         name = 'Abhinav Gupta'
//         />
//       </userAge.Provider>
//     </userName.Provider>
//   )
// }

// function Component1(name) {
//   return (
//     <>
//     <h1>Hello from Component1</h1>
//     <Component2
//     />
//     </>
//   )
// }

// function Component2() {
//   const user = useContext(userName);
//   const age = useContext(userAge)
//   return (
//     <>
//      <h1>Hello from Component2,</h1>
//      <h1> I am {user}, <br></br>
//           I am {age} year old
//      </h1>
//     </>
//   )
// }

// import React, { useContext, createContext, useState } from "react"

// const userContext = createContext();
// const userIdContext = createContext();
// const userCityContext = createContext()

// function App() {
//   const [user, setUser] = useState('Abhinav');
//   const [userId, setUserId] = useState('12345');
//   const [userCity, setUserCity] = useState('Bangalore');

//   return (
// <div>
//     <userContext.Provider value = 'Abhinav'>
//       <userIdContext.Provider value = '2133'>
//         <userCityContext.Provider value = {userCity}>
//         <Component1/>
//         </userCityContext.Provider>
//       </userIdContext.Provider>
//     </userContext.Provider>
// </div>

//   );
// }

// function Component1 () {
//   const user = useContext(userContext);
//   const userId = useContext(userIdContext);
//   const city = useContext(userCityContext);
//   return (
//     <>
//     <h1>Hello {user}, <br></br>
//     your id is {userId}, <br></br>
//     your city is {city}
//     </h1>
//     </>
//   )
// }

// export default App;
