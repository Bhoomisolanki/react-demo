import { useState, useEffect } from "react";

function AddUser({ onAddUser, user }) {
    const [formData, setFormData] = useState({ name: "", age: "" });

    useEffect(() => {
        if (user) {
            setFormData({ id: user.id, name: user.name, age: user.age });
        }
    }, [user]);



return (
    <>
       <h2>{user ? "Edit User" : "Add User"}</h2>
       <form>
           {user && <input type="hidden" name="id" value={formData.id} />}
           <input
               type="text"
               placeholder="Name"
               name="name"
               value={formData.name}
               onChange={e => setFormData({ ...formData, name: e.target.value })}
           />
           <input
               type="number"
               placeholder="Age"
               name="age"
               value={formData.age}
               onChange={e => setFormData({ ...formData, age: e.target.value })}
           />
           <button
               type="button"
               onClick={() => onAddUser(formData)}
           >
               Save
           </button>
       </form>
    </>
)
}

export default AddUser
