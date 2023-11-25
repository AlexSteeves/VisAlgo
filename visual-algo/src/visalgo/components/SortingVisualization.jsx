import { randomBytes } from "crypto";
import React from "react";
import { mergeSortAnimation } from "../utils/mergeSortAnimation";


const ANIMATION_SPEED_MS = 1;
const NUMBER_OF_ARRAY_BARS = 310;

const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';


export default class SortingVizualizations extends React.Component {
    constructor(props) {
        super(props);
        this.state = { array: []};
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 200; i++) {
            array.push(randomIntFromInterval(5, 700));
        }
        this.setState({ array });
    }

    mergeSort() {
        const animations = mergeSortAnimation(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
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

    

    testingAlgorithms() {
        for (let i = 0; i < 100; i++) {
            const array = [];
            const length = randomIntFromInterval(1, 1000);
            for (let i = 0; i < length; i++) {
                array.push(randomIntFromInterval(-1000, 1000));
            }
            const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
            const mergeSortedArray = mergeSortAnimation(array.slice());
            console.log(
                arraysAreEqual(javaScriptSortedArray, mergeSortedArray)
            );
        }
    }

    render() {
        const { array } = this.state;

        return (
            <div>
                {array.map((value, idx) => (
                    <div
                    className="w-2 inline-block m-1"
                    key={idx}
                    style={{
                      backgroundColor: PRIMARY_COLOR,
                      height: `${value}px`,
                    }}></div>
                ))}
                <button onClick={() => this.resetArray()}>
                    generate New Array
                </button>
                <button onClick={() => this.mergeSort()}>MergeSort</button>
                <button onClick={() => this.testingAlgorithms()}>
                    test algorithms
                </button>
            </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) {
            return false;
        }
    }
}
