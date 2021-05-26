import * as React from 'react';
import { Fragment } from 'react';
import { DateToStr } from '../../../store/utils';
import { UserDescription } from '../../shared/UserDescription/UserDescription';
import { NewTaskProps } from './NewTaskProps';

const NewTask: React.FC<NewTaskProps> = (props) => {

    const executors = props.task.executors.map(e =>
        <li key={e as string}>
            <UserDescription userId={e as string} />
            <button onClick={() => { props.dropExecutor(e);}}>Удалить</button>
        </li>);

    return (
        <Fragment>
            <div>
                <div>
                    <label htmlFor='new-task-name'>Название:</label>
                    <input
                        id='new-task-name'
                        type='text'
                        value={props.task.title as string}
                        onChange={(e) => { props.setTitle(e.target.value); }} />
                </div>
                <div>
                    <label htmlFor='new-task-deathline'>Выполнить до:</label>
                    <input
                        id='new-task-deathline'
                        type='date'
                        value={DateToStr(props.task.deathline)}
                        onChange={(e) => { props.setDeathline(new Date(e.target.value)); }} />
                </div>
                <div>
                    <label htmlFor='new-task-name'>Исполнители:</label>
                    <ul>{executors}</ul>
                </div>
                <div>
                    <label htmlFor='new-task-description'>Описание:</label>
                    <textarea
                        id='new-task-description'
                        value={props.task.description as string}
                        onChange={(e) => { props.setDescription(e.target.value); }}/>
                </div>
            </div>
        </Fragment>
    );
} 

export default NewTask;