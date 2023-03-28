import React, {useState} from 'react'


export default function Pdf({data}) {

  const [todos, settodos] = useState({});

  const fetchTodos = async () => {
    const response = await fetch("/api/hello",{
      method: "POST",
      body: JSON.stringify({firstName:'Samantha',lastName:'anil',roles:'Admin',time:'parttime',firstName1:'Anriya',lastName1:'Duo',roles1:'Marketing',time1:'fulltime'}),
      headers: {
      "Content-Type": "application/json",
      },
    });
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