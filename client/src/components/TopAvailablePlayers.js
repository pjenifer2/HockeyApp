import React, { Fragment, useEffect, useState } from 'react';

    

    const TopAvailablePlayers = () => {

        const [AvailablePlayers, SetAvailablePlayers] = useState([]);
        
        const getTopAvailablePlayers = async () => {
            try {
                const response = await fetch(`http://localhost:5000/available`);
                const jsonData = await response.json();
                SetAvailablePlayers(jsonData)
            } catch (err) {
                console.error(err.message)
            }
        }

        useEffect( () => {
            getTopAvailablePlayers()
        }, []);



    return (
        <Fragment>
            <div className="container">
                <h1>Available Players</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Player Name</th>
                            <th>Position</th>
                            <th>Team</th>
                            <th>Comp</th>
                            <th>Age</th>
                            <th>Games</th>
                            <th>Goals</th>
                            <th>Assists</th>
                            <th>Points</th>
                            <th>+/-</th>
                            <th>PIM</th>
                            <th>Shots</th>
                            <th>Power Play</th>
                        </tr>
                    </thead>
                    <tbody>
                        {AvailablePlayers.map(player => (
                            <tr key={player.playername}>
                                <td> {player.playername} </td>
                                <td> {player.pos} </td>
                                <td> {player.team} </td>
                                <td> {player.yearcomposite} </td>
                                <td> {player.age} </td>
                                <td> {player.games} </td>
                                <td> {player.goals} </td>
                                <td> {player.assists} </td>
                                <td> {player.points} </td>
                                <td> {player.plsmns} </td>
                                <td> {player.pim} </td>
                                <td> {player.shots} </td>
                                <td> {player.powerplay}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>    
            </div>    
        </Fragment>
        )
};

export default TopAvailablePlayers;







