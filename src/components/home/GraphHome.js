import React, {useEffect, useState} from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';
import Card from '../card/Card';


export default function GraphHome() {
  let [ chars, setChars ] = useState([]);

  let query = gql`
    {
      characters{
        results{
          name
          image
        }
      }
    }
  `;

  let { data, loading, error } = useQuery(query);

  useEffect(() => {
    if(data && !loading && !error) {
      setChars([...data.characters.results])
    }
  }, [data]);

  function nextCharacter() {
    chars.shift()
    setChars([...chars])
  }

  if(loading) return <h2>Cargando...</h2>
  return (<Card 
      // rightClick={addToFavorites} 
      leftClick={nextCharacter} 
      {...chars[0]} 
    />)
}