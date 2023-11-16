import { useState } from 'react';
import Person from './Person';

export default function List({ people }) {
  const peopleMap = people.map((person) => {
    const { id, name, age, image } = person;
    return <Person key={id} name={name} age={age} image={image}></Person>;
  });

  return <div>{peopleMap}</div>;
}
