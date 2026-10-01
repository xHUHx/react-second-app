//component ที่แนะนำจะเรียกว่าเป้น function component
// แบบที่ 1 : ใช้ snippet : rfc

//import React from 'react'

//export default function App() {
//  return (
//    <div>App แบบที่ 1</div>
//  )
//}

// แบบที่ 2 : ใช้ snippet : rfce

// import React from 'react'

// function App() {
//   return (
//     <div>App แบบที่ 2</div>
//   )
// }

// export default App

// แบบที่ 3 : ใช้ snippet : rafce

import Hello from './Hello.jsx'
import Hi from './Hi.jsx'

const App = () => {
  return (
    <div>App แบบที่ 3
      <Hello />
      <Hi />
      <Hi />
      <Hi />
    </div>
  )
}

export default App