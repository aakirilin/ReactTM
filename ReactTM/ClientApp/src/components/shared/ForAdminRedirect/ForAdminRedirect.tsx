import * as React from 'react';
import { Fragment, useState } from 'react';

export const ForAdminRedirect: React.FC = (props) => {

    return (
        <Fragment>
            {props.children}
        </Fragment>
    );
}