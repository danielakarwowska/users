import React from 'react'

const Table = (props) => {
    return(
        <div className="container">
            <h1>Simple Users Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>companies</th>
                        <th>Users</th>
                    </tr>
                </thead> 
                <tbody>
                        <tr>
                            <td>{props.title}</td>
                            <td>{props.title}</td>
                        </tr>
                </tbody>
                <thead>
                </thead>
            </table>
        </div>
    )
}
export default Table