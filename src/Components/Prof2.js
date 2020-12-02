import React from "react";

const Prof2 = ({nom}) => {
    const [edit, setEdit] = React.useState(false)
    const [name, setName] = React.useState(nom)

   return (
   <div>
       <h3>{name} - {nom}</h3>
       { !edit ? (
        <p>{name} - <button onClick={() => { setEdit(true)}}>modifier</button></p>
       ) : (
        <div>
            <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
            <button onClick={() => { }}>OK</button>
        </div>
       )
       }
    </div>
   ) 
}   

export default Prof2