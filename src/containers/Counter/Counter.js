import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import './Counter.css';
import * as actionType from '../../store/actions'

class Counter extends Component {
/*     state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    } */

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul className="ul">
                    {this.props.storedResults.map(strResult => (
                         <li className="li" key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>
                         {strResult.value}
                      </li>
                       
                    ))}
                </ul>
            </div>
        );
    }
}


// specify which part of the state should be received into this component by the connect method 
//receive the part of the state from the store, which is relevant for this component and put it into the ctr part of the object
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

// specify which part of the state should be changed to the store by the connect method
// the action types are defined here, the content of the actions are defined in the reducer.js file
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionType.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionType.DECREMENT}),
        onAddCounter: () => dispatch({type: actionType.ADD, val: 10}),
        onSubtractCounter: () => dispatch({type: actionType.SUBTRACT, val: 15}),
        onStoreResult: (result) => dispatch({type: actionType.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type: actionType.DELETE_RESULT, resultElId: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);