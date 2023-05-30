import React, { useEffect, useState } from 'react'

const List = ({ getItems }) => {

    const [myItems, setMyItems] = useState([])

    useEffect(() => {
        console.log('buscando items no db.')
        setMyItems(getItems)
    },[getItems])

  return (
    <div>
        { myItems && myItems.map((item) => (
            <li key={item}>{item}</li>
        ))}
    </div>
  )
}

export default List