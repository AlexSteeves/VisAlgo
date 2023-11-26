import React from "react";

const NavBar = ({ resetArray, mergeSort }) => {
    return (
        <div className="h-[20vh] bg-slate-900 flex flex-row justify-center items-center">
            <div className = "w-[30vw]">
                <button className="text-slate-200 hover:text-cyan-500 duration-300 " onClick={resetArray}>
                    Generate New Array
                </button>
            </div>

            <div className="flex-col w-[30vw] flex justify-center">
                <button className="text-slate-200" onClick={mergeSort}>
                    MergeSort
                </button>
                <button className="text-slate-200">Bubble Sort</button>
                <button className="text-slate-200">Quick Sort</button>
            </div>
        </div>
    );
};

export default NavBar;
