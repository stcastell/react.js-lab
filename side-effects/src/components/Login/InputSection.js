import React, { useRef, useImperativeHandle } from 'react';

const InputSection = React.forwardRef((props, ref) => {

    const inputRef = useRef();
    
    const activate = () => { 
        inputRef.current.focus();
    }

    useImperativeHandle(ref, () => { 
        return ({
            focus: activate,
        });
    });

    return (
        <div className={props.className}>
            <label htmlFor={props.type}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.type}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    );
});

export default InputSection;