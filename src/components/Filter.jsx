import React, { PureComponent } from 'react';

export class Filter extends PureComponent {

    render(){
        return <aside className="filter">
                <button className="btn btn--filter">Новая задача</button>
                <span className="check">
                    <input type="checkbox" id="cb-priority" className="check__box" />
                    <label htmlFor="cb-priority" className="check__text">По приоритету</label>
                </span>
                <select className="select" name="" id="">
                    <option value="">adasdad</option>
                    <option value="">adasdad</option>
                    <option value="">adasdad</option>
                </select>
            </aside>
    }
}
