import * as React from 'react';
import { Fragment, useState } from 'react';
import OauthState from '../../store/oauth';
import { useSelector, useDispatch } from 'react-redux'
import NewTaskComponent from '../../components/pages/NewTask';
import { Note } from '../../models';
import { getNewTask } from '../../store/NewTask/selectors';
import { DropExecutorsCreator, SetDescriptionCreator, SetDethlineCreator, SetTitleCreator } from '../../store/NewTask/types';

const NewTask: React.FC = () => {
    const task = useSelector(getNewTask);
    const dispatch = useDispatch();

    const setTitle = (value: String) => { dispatch(SetTitleCreator(value))};
    const setDeathline = (value: Date) => { dispatch(SetDethlineCreator(value))};
    const setDescription = (value: String) => { dispatch(SetDescriptionCreator(value))};
    const dropExecutor = (value: String) => { dispatch(DropExecutorsCreator(value))};

    return (
        <Fragment>
            <NewTaskComponent
                task={task}
                setTitle={setTitle}
                setDeathline={setDeathline}
                setDescription={setDescription}
                dropExecutor={dropExecutor} />
        </Fragment>
    );
} 

export default NewTask;