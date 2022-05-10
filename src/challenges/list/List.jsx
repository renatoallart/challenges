import React, { useState } from 'react'

export default function List() {

    const [list, setList] = useState([' thing: 1', ' thing: 2',' thing: 3',' thing: 4'])

    const addItemInList = () => setList(
        [...list, ` thing: ${list.length + 1}`]
        


    )
    function rem(){
        return list.slice(1,-2)
    }

    const use = [{
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        cpf:'222',
        isFavorite: false
    },{
        firstName: "Ana",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        cpf:'333',
        isFavorite: false
    }]

    const [user, setUser] = useState(use)

    // const listItems = list.forEach(el => { el })
    const listItems2 = list.map(el => el)


    const cpf = cpfNumber => user.filter(user => user.cpf === cpfNumber).map(user => <p> {user.firstName} </p>)
    const users = user.map(user => <p key={user.cpf}>{user.firstName} {user.lastName}</p>)
    const changeLastName = (firstName, valor) => setUser(
        user.map(user =>  user.firstName === firstName ? {...user, lastName: valor}: user)
    )


    return (
        <div>
            <div>
                <p>cpf: { () => cpf('222')}</p>

            </div>
            <div>
                <p>{listItems2}</p>
                <button onClick={addItemInList}>Click to Add Item</button>
                <button onClick={rem}>remove</button>
                {list}
                
            </div>

            {/* <div>
                <p>{user.firstName}</p>
                <p>{user.phone}</p>

                <button onClick={() => changeUserInfo('3333333')}> change</button>

            </div> */}

            <div >
                {users}
                <button onClick={()=> changeLastName('Ana','Santana')}>Click to Add Item</button>
            </div>

        </div>

    )
}
