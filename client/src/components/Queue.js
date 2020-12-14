import React, { Component } from 'react'

class Queue extends Component {

    constructor(props){
        super(props)
        this.state = {currentQueue: 0, queue: 0}
    }

    bookQueue(currentQueue){
        this.setState({queue: Math.floor(Math.random()*10) + currentQueue + 1})
    }

    nextQueue(currentQueue, queue){
        if(currentQueue < queue){
            this.setState({currentQueue: currentQueue + 1})
        }
        if(queue == currentQueue + 1){
            alert("ถึงคิวของคุณแล้วครับ")
        }
    }

    render(){

        return(
            <div className="container-fluid">
                <hr />
                    <p className="text-center">Queue : {this.state.currentQueue}</p>
                    <hr />
                    {this.state.queue - this.state.currentQueue == 0 &&
                    (
                        <p className="text-center">ถึงคิวของคุณแล้วครับ</p>
                    )}
                    {this.state.queue - this.state.currentQueue != 0 &&
                    (
                        <p className="text-center">อีก {this.state.queue - this.state.currentQueue} คิว ก่อนถึงคิวของคุณครับ</p>
                    )}
                    <hr />
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-3">
                            <button className="btn btn-success float-right" onClick={() => this.bookQueue(this.state.currentQueue)}>จองคิว</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-danger" onClick={() => this.nextQueue(this.state.currentQueue, this.state.queue)}>คิวต่อไป</button>
                        </div>
                        <div className="col-3"></div>
                    </div> 
            </div>
        )
    }
}

export default Queue