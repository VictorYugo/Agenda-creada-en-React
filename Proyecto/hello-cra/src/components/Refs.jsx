import React, { Component, createRef } from 'react'

class Refs extends Component {


    inputText = createRef();
 
    componentDidMount(){
        this.handleFocus()
    }

    handleFocus = () => {
        console.log(this.inputText);
        this.inputText.current.focus();
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputText} name="focus" id="input"/>
                <button onClick={this.handleFocus}>Focus</button>
            </div>
        );
    }
}

export default Refs;