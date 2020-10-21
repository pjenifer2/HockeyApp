import React, { Fragment, useEffect, useState } from 'react';

const ListTeam = (props) => {
    
    const [playerList, setPlayerList] = useState([]);

    const getListTeam = async (manager) => {
        try {
            const response = await fetch(`http://localhost:5000/team/${manager}`);
            const jsonData = await response.json();

            setPlayerList(jsonData);
            
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect( () => {
        getListTeam(props.manager);
    }, []);


    return ( 
        <Fragment>
            { " "}
            <div className="container">
                <h1>{props.manager}'s Team</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Fantasy Team Manager</th>
                        <th>Player Name</th>
                        <th>Player NHL Team</th>
                        <th>Position</th>
                        <th>Games</th>
                        <th>Goals</th>
                        <th>Assists</th>
                        <th>Points</th>
                        <th>+/-</th>
                        <th>PIM</th>
                        <th>Shots</th>
                        <th>PowerPlay</th>
                    </tr>
                    </thead>
                    <tbody>
                        {playerList.map(player => (
                            <tr key={player.playername}>
                                <td>{ player.fantasy } </td>
                                <td>{ player.playername }</td>
                                <td>{ player.team }</td>
                                <td>{ player.pos }</td>
                                <td>{ player.games }</td>
                                <td>{ player.goals }</td>
                                <td>{ player.assists }</td>
                                <td>{ player.points }</td>
                                <td>{ player.plsmns }</td>
                                <td>{ player.PIM }</td>
                                <td>{ player.shots }</td>
                                <td>{ player.powerplay }</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </Fragment>
    )
};

export default ListTeam;