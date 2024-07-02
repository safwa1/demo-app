import React, {useState} from 'react'
import './App.css'

const useArray = (array) => {
    return {
        array: array,
        add: function (item) {
            this.array.push(item)
            return this
        },
        update: function (o, n) {
            const index = this.array.indexOf(o);
            if (index > -1) {
                this.array[index] = n
            }
        },
        delete: function (item) {
            const index = this.array.indexOf(item);
            if (index > -1) {
                this.array.splice(index, 1)
            }
        }
    }
}

function App() {
    const [username, setUsername] = useState("")
    const [users, setUsers] = useState([])
    const [id, setId] = useState(0);

    function onSubmit(e) {
        e.preventDefault()
        const newUsers = useArray([...users]).add({id: id, name: username})
        setUsers(newUsers.array)
        setId(id + 1);
        setUsername("")
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    name='username'
                    type='text'
                    placeholder='username'
                />
                <button type='submit'>add user</button>
            </form>

            <div>
                <h1>users :</h1>
                {users && users.map(u => (<div key={u.id}>{u.name}</div>))}
            </div>


        </>
    )
}

export default App
