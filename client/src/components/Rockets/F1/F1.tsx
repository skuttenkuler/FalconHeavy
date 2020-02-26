import React from 'react';

interface Props {
    onClick(): void,
}
export const FalconOneBtn: React.FC<Props> = ({onClick}) => {
    return(
    <button onClick={onclick} type="button">
        Falcon One
    </button>
    )
};