import React from 'react';
import Champ from './champs';


export default () => {
  return (
    <div>
      <Champ file={'./components/reactTasks/AatroxSquare.png'} champ={{ name: 'Aatrox', role: 'Fighter', diff: '6/10', price: '6300ip' }} />
      
	<Champ file={'./components/reactTasks/AhriSquare.png'} champ={{ name: 'Ahri', role: 'Assassin', diff: '8/10', price: '6300ip' }} />

        <Champ file={'./components/reactTasks/BardSquare.png'} champ={{ name: 'Bard', role: 'Support', diff: '9/10', price: '6300ip' }} />   

        <Champ file={'./components/reactTasks/GangplankSquare.png'} champ={{ name: 'Gangplank', role: 'Fighter', diff: '8/10', price: '3150ip' }} />
        
        <Champ file={'./components/reactTasks/GarenSquare.png'} champ={{ name: 'Garen', role: 'Tank', diff: '2/10', price: '450ip' }} />

        <Champ file={'./components/reactTasks/EzrealSquare.png'} champ={{ name: 'Ezreal', role: 'Marksman', diff: '7/10', price: '4800ip' }} />

        <Champ file={'./components/reactTasks/ZileanSquare.png'} champ={{ name: 'Zilean', role: 'Support/Mage', diff: '6/10', price: '1350ip' }} />
</div>
  )
}

