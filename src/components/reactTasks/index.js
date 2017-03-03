import React from 'react'
import Champ from './champs'


export default () => {
  return (
    <div>
      <Champ file={'/AatroxSquare.png'} champ={{ name: 'Aatrox', role: 'Fighter', diff: '6/10', price: '6300ip' }} />
      <Champ champ={{ name: 'Ahri', role: 'Assassin', diff: '8/10', price: '6300ip' }} />

    </div>
  )
}

