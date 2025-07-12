// import React from 'react'
// // import Formsignin from './components/Formsignin'
// import Password from './components/Password'
// const App = () => {
//   return (
//     <div>
//       {/* <Formsignin /> */}
//       <Password />
//     </div>
//   )
// }

// export default App



import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<Home />/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
