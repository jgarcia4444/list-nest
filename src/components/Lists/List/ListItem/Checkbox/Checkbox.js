import React, {useState} from 'react';

const Checkbox = ({}) => {
    const [complete, setComplete] = useState(false);

    return (
        <div onClick={() => setComplete(!complete)} className="w-6 h-6 flex items-center justify-center bg-white rounded-full transition-all duration-100 active:bg-opacity-40 hover:cursor-pointer hover:bg-opacity-100 bg-opacity-80">
            <div className={`w-4 h-4 bg-black transition-all duration-300 ${complete === true ? "scale-100" : "scale-0"} rounded-full`}></div>
        </div>
    )
}

export default Checkbox;