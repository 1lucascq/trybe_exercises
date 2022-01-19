import React, { Component } from 'react';
import './App.css';
import Buttons from './components/buttons';
import FormDataDisplay from './components/FormDataDisplay';
import JobData from './components/jobData';
import UserData from './components/personalData';

class App extends Component {
  constructor() {
    super();

    this.state = {
      submit: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.clearAll = this.clearAll.bind(this)
    this.save = this.save.bind(this)

  }

  handleChange({ target }) {
    const { name, value } = target    

    this.setState({
      [name]: value,
    });
  }
  
  clearAll() {
    this.setState({
      address: '',
      position: '',
      city: '',
      cpf: '',
      uf: '',
      description: '',
      email: '',
      name: '',
      resume: '',
      residence: ''
    })
  }

  save() {
    this.setState({ submit: true }) 

    // this.setState((prevState) => ({
    //   allData: [Object.entries(this.state)]
    // }))


    // // const entries = Object.entries(this.props.stateData);
    // console.log('cliquei')
    // return (
    //   <div>
    //     {[1, 2, 3, 4].map(e => <p>{e}</p>)}
    //     {/* {entries.map((e, i) => (
    //       <p key={i}>{`${e[0]}:${e[1]}`}</p>
    //     ))} */}
    //   </div>
    // )
  }

  render() {

    return (
      <main className="App">
        <section className="App-header">
        
          <fieldset className='form'>
            <UserData stateData={ this.state } handleChange={ this.handleChange } />
          </fieldset>
        
          <fieldset className='form'>
            <JobData stateData={ this.state } handleChange={ this.handleChange } />
          </fieldset>
        </section>

        <section className='buttons'>
            <Buttons clearAll={ this.clearAll } save={ this.save } stateData={ this.state } />
        </section>
        { this.state.submit && <FormDataDisplay stateData={ this.state } /> }
      </main>
    );
  }
}

export default App;
