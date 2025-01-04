import React, {useState} from 'react';

const Checkbox = ({}) => {
    const [complete, setComplete] = useState(false);

    return (
        <div onClick={() => setComplete(!complete)} className="w-6 h-6 flex items-center justify-center bg-white">
            <div className={`w-4 h-4 bg-black transition-all duration-300 ${complete === true ? "scale-100" : "scale-0"}`}></div>
        </div>
    )
}

export default Checkbox;