import React from 'react'

export default class Champ extends React.Component {
  render() {
const champion = function(champ) {
        return (<div>
        <img src={champ.file} /> 
        <p>Name: {champ.name } </p>
        <p>Role: { champ.role } </p>
        <p>Difficulty: { champ.diff } </p>
        <p>Price: { champ.price } </p> 
         </div>);
}
return (
    
     
      
      <div>
         Champions: { _.map(this.props.Champions, champion) }
     
      </div>
    
    )
  }
}
