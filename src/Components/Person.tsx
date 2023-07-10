import React from 'react'

interface Props {
  name : string
  age : number
  email : string
  isMarried : boolean
  friends : string[]
  country : Country
} 

export enum Country {
  Nigeria = 'Nigeria',
  Ghana = 'Ghana',
  France = 'France'
}

export const Person = (props: Props) => {

  return (
    <div>
    <h3>Name: {props.name}</h3>
    <h3>Age: {props.age}</h3>
    <h3>Email: {props.email}</h3>
    <h3>Married: {props.isMarried ? 'Yes' : 'No'}</h3>
    <h3>Friends: {props.friends.map((friend : string)=>{
      return <h3>{friend}</h3>
    })}</h3>
    <h3>Country: {props.country}</h3>
    </div>
  )
}
