import * as React from 'react';
import { Fragment, useState } from 'react';
import { UserDescription as UserDescriptionModel } from '../../../models';
import { UserDescription as GetUserDescription } from '../../../api/apiFunction';
import { UserDescriptionProps } from './UserDescriptionProps';

export const UserDescription: React.FC<UserDescriptionProps> = (props) => {
    const [description, setDescription] = useState({} as UserDescriptionModel);
    const [wasLoad, setWasLoad] = useState(false);

    if (!wasLoad) {
        GetUserDescription(props.userId)
            .then(d => setDescription(d));
    }

    return (
        <Fragment>
            <div>{description.name}</div>
        </Fragment>
    );
} 