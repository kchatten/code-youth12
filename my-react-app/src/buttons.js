import React from 'react'

export default class Buttons extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: 0
        };
    }

    IncrementValue = () => {
        this.setState(prevState => ({
            value: prevState.value + 1
        }))
    };
    
    DecrementValue = () => {
        this.setState(prevState => ({
            value: prevState.value - 1
        }))
    };
    
    
    ResetValue = () => {
        this.setState(prevState => ({
            value: prevState.value = 0
        }))
    };

    render() {
        return (
            <>
            <div className='main-container'>
                <div className='button-container'>
                    <button className='increment' onClick={this.IncrementValue}>increment</button> 
                    <button className='decrement' onClick={this.DecrementValue}>decrement</button>
                    <button className='reset' onClick={this.ResetValue}>reset</button>
                </div>
                <div className='readout-container'>
                    <p className='readout'>{this.state.value}</p> 
                </div>
            </div>
            </>
        )
    }
};