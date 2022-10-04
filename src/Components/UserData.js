import React from 'react'

function UserData() {
    const Users =[
       {
            id:1,
             name:"Leanne Graham",
             email:"Leanne@gmail.com",
             contact:459373475438,
             website:"hildegard.org"
       },
       {
        id:2,
         name:"Leanne Graham",
         email:"Leanne@gmail.com",
         contact:459373475438,
         website:"hildegard.org"
   },
   {
    id:3,
     name:"Leanne Graham",
     email:"Leanne@gmail.com",
     contact:459373475438,
     website:"hildegard.org"
},
{
    id:4,
     name:"Leanne Graham",
     email:"Leanne@gmail.com",
     contact:459373475438,
     website:"hildegard.org"
},
{
    id:5,
     name:"Leanne Graham",
     email:"Leanne@gmail.com",
     contact:459373475438,
     website:"hildegard.org"
},
{
    id:6,
     name:"Leanne Graham",
     email:"Leanne@gmail.com",
     contact:459373475438,
     website:"hildegard.org"
}
    ]
    
  return (
    <div>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>Id</th>
                <th>name</th>
                <th>email</th>
                <th>contact</th>
                <th>website</th>
            </tr>
            </thead>
            <tbody>
                { Users.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.contact}</td>
                        <td>{user.website}</td>
                    </tr>
                )) }
            </tbody>
        </table>
    </div>
  )
}

export default UserData