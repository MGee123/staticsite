import React from 'react'

export default class Champ extends React.Component {
  render() {
    return (
	
     
      
      <div>
	 <img src={this.props.file} /> 
        <p>Name: { this.props.champ.name } </p>
        <p>Role: { this.props.champ.role } </p>
        <p>Difficulty: { this.props.champ.diff } </p>
        <p>Price: { this.props.champ.price } </p>
      </div>
	
    )
  }
}
