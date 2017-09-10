import React, { Component } from 'react';
import { Connect } from 'react-redux';


export default class SearchBar extends Component{
    //Create a controlled field by declaring a component level state
    //This state will update on input & then render to the input field as it's value,
    //This is in-essence the input value - But we can access it & in turn
    //Declare & use it's value in arguments 

    //Creating a component level state
    constructor(props){
      super(props);

      // use this state for declaring & setting he input value
      this.state = {term: ''}
    }
    

    // DOM event handlers return an event
    onInputChange(event) {
        console.log(event.target.value);

        //Update Component state with the event.target.value
        //This will set the state to the input values entered by user
        this.setState({term: event.target.value})
    };



    onFormSubmit(event){

        // Prevent html re-rending on enter & submit
        event.preventDefault();

        // logic - We need to go and fetch weather data on submit
    }

    render() {
        return (
            <div>
                <form className="input-group"
                    onSubmit={
                        // new submit fuction
                        this.onFormSubmit.bind(this)}
                    >
                    <input  
                        className="form-control"
                        onChange={this.onInputChange.bind(this)} 
                        value={this.state.term}  
                        placeholder="Get a five-day forecast in your favorite cities"/>
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Submit</ button> 
                    </span>
                </form>
            </div>
        )
    };


}
