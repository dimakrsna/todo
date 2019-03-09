import React from 'react';

export default (props) => {
    let {projectsList, filtered} = props;

    function mapProjectsList(list){
        return list.length && list.map((item, index) => {
            return <option value={item} key={`${index-56489461}`}>{item}</option>
        })
    }

    return (
        <select className="select" onChange={(e)=> {filtered(e.target.value)}}>
            { mapProjectsList(projectsList) }
        </select>
    )
}