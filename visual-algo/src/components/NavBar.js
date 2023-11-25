


function NavBar() {


    return(
                
        <div className="w-screen h-[15vh] bg-slate-800 flex justify-between items-center px-12">
            <ul className="flex">
                <li className="mr-96">
                    <span>
                        <select>
                            <option value="15">15</option>
                            <option value="30">30</option>
                        </select>
                    </span>
                </li>
                <li className="ml-96">
                    <span>
                        <select>
                            <option value="bubblesort">Bubble Sort</option>
                            <option value="quicksort">Quick Sort</option>
                        </select>
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
            
