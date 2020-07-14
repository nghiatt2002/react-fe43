import React, { Component } from 'react'

export default class BTChonXe extends Component {
    constructor(props) {
        super(props)

        this.state = {
            src: `./img/red-car.jpg`
        }
    }

    changeColor = (color) => {
        this.setState({
            src: `./img/${color}-car.jpg`
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h4>Please choose your favorite about car's color</h4>
                        <img src={this.state.src} width={500} height={250} alt=""/>
                    </div>
                    <div className="col-6">
                        <h4>Change color</h4>
                        <button className="btn btn-danger mr-2" onClick={() => {this.changeColor('red')}}>Red color</button>
                        <button className="btn btn-secondary mr-2" onClick={() => {this.changeColor('silver')}}>Silver color</button>
                        <button className="btn btn-dark mr-2" onClick={() => {this.changeColor('black')}}>Dark color</button>
                    </div>
                </div>
            </div>
        )
    }
}
