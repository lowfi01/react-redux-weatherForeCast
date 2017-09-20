import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from './../actions/index';


class SearchBar extends Component{
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
        //console.log(event.target.value);

        //Update Component state with the event.target.value
        //This will set the state to the input values entered by user
        this.setState({term: event.target.value})
    };



    onFormSubmit(event){

        // Prevent html re-rending on enter & submit
        event.preventDefault();

        // logic - We need to go and fetch weather data on submit
        // Call Action - Pass city as argument
        // result will return promise - .then(data){ data.payload.data }
        // var result = this.props.fetchWeather('texas');
        // result.then((weather) => {
        //     // Note - you can use de-constructor here (weather) = ({payload}) 
        //     console.log(weather.payload.data.list[0].main.temp)
        // })


        // Note - code above was my own attempt to play with data
        //  - ( bad approach as it does not pass result to redux )
        
        // pass the term state as argument
        // term is the search result
        this.props.fetchWeather(this.state.term);
        // clear search result input field for convience
        this.setState({term: ''});

    }

    render() {
        return (
            <div>
                {/* //using form for additional functionality
                // bootstrap input-group */}
                <form className="input-group"
                    onSubmit={
                        // new submit function
                        this.onFormSubmit.bind(this)}
                    >
                    <input  
                        className="form-control"
                        onChange={this.onInputChange.bind(this)} 
                        value={this.state.term}  
                        placeholder="Get a five-day forecast in your favorite cities"/>
                    {/* // span is for styling 
                    // using bootstrap className - google input-group bootstrap v4 */}
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Submit</ button> 
                    </span>
                </form>
            </div>
        )
    };


}


function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchWeather
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)