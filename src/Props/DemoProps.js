import React, { Component } from 'react'
import ClassProps from './ClassProps'
import FunctionProps from './FunctionProps'

export default class DemoProps extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        const classCar = {
            image: './img/red-car.jpg',
            name: 'Vinfat 1',
            gia: 10000000
        }
        const funcCar = {...classCar};
        funcCar.image = './img/black-car.jpg';
        funcCar.name = 'Vinfat 2';
        funcCar.gia = 20000000;

        return (
            <div>
                {/* <ClassProps image="./img/red-car.jpg" name="xe hơi" gia="5000"/> */}
                <ClassProps xehoi={classCar}/>
                <FunctionProps xehoi={funcCar}/>
            </div>
        )
    }
}
