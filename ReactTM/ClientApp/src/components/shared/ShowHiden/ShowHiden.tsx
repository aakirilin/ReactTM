import * as React from 'react';
import { Fragment, useState } from 'react';
import { ShowHidenProps } from './ShowHidenProps'

export const ShowHiden: React.FC<ShowHidenProps> = (props) => {
    const [state, setState] = useState(props.defaultState);

    return (
        <Fragment>
            <div className={props.contentClassName}>
                <button
                    type='button'
                    onClick={() => { setState(!state); }}
                    className={props.buttonClassName}>
                    {props.buttonText}
                </button>
                {state ? props.children : undefined}
            </div>
        </Fragment>
    );
}