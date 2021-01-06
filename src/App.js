import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : "" ,
      
    };
    this.handleChangeN=this.handleChangeN.bind(this)
  }


render() {
  
  const handleSubmit = event => {
    event.preventDefault();
    alert(this.state.name + ' : You have submitted the form.')
  }
  return(
    <div className="wrapper">
      <h1>Hello !</h1>
      <form onSubmit={handleSubmit}>
      <fieldset>
         <label>
           <p>Name</p>
           <input value={this.state.pseudo} onChange={this.handleChangeN}/>
           <p>{this.state.name}</p>
         </label>
       </fieldset>
       <button onClick={() => this.setState({ name: this.state.name})}type="submit">Submit</button>
       {console.log(window.name)}
      </form>
    </div>
    
  );
}
handleChangeN(event){
  this.setState({name: event.target.value});
}
}
export default App;