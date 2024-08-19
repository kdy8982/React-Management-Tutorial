import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import Customer, { CustomerProfile } from './components/Customer'

function App() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      image: 'https://picsum.photos/id/1/64/64',
      name: '홍길동',
      birthday: '961222',
      gender: '남자',
      job: '대학생',
    },
    {
      id: 2,
      image: 'https://picsum.photos/id/2/64/64',
      name: '유관순',
      birthday: '961223',
      gender: '여자',
      job: '대학생',
    },
    {
      id: 3,
      image: 'https://picsum.photos/id/3/64/64',
      name: '이순신',
      birthday: '961224',
      gender: '남자',
      job: '대학생',
    },
  ])

  return (
    <div>
      {customers.map(item => {
        return (
          <>
            <Customer
              id={item.id}
              image={item.image}
              name={item.name}
              birthday={item.birthday}
              gender={item.gender}
              job={item.job}
            />
          </>
        )
      })}
    </div>
  )
}

export default App
