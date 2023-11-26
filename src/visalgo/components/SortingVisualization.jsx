
import React from "react";
import { mergeSortAnimation } from "../utils/mergeSortAnimation";
import { Component } from 'react';


const ANIMATION_SPEED_MS = 3;
const NUMBER_OF_ARRAY_BARS = 100;

const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';


class SortingVisualizations extends Component {
    constructor(props) {
        super(props);
        this.state = { array: []};
    }

    


    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 200));
        }
        this.setState({ array });
    }

    mergeSort() {
        const animations = mergeSortAnimation(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('rec-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    quickSort() {
        //implement later
    }

    heapSort() {
        //implement later
    }

    bubbleSort() {
        //implement later
    }

    


    render() {
        const { array } = this.state;

        return (
            <div>
              
                {array.map((value, idx) => (
                    <div
                    className="w-1 inline-block mx-0.5 rec-bar" 
                
                    key={idx}
                    style = {{
                      backgroundColor: PRIMARY_COLOR,
                      height: `${value}px`,
                    }}></div>
                ))}
                
                
            </div>

        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


export default SortingVisualizations;
