import React, {useState} from 'react'


export default function Pdf({data}) {

  const [todos, settodos] = useState({name: ''});


  const fetchTodos = async () => {
    const response = await fetch("/api/hello",{name:'abc'});
    const data = await response.json();
    settodos(data)
    };



  return (
    <div>hello {todos.name}
    
    <button onClick={fetchTodos}>Get todos</button>
    </div>
  )
}

// // This gets called on every request
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`/api/hello`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }