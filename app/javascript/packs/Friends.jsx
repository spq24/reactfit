import React from 'react'

const Friends = ({friends}) =>
    <div className="panel panel-default">
        <div className="panel-heading"><h4>Friends</h4></div>
        <div className="panel-body">
            {friends.map((friend, i) => {
                return(
                    <li key={i} className="list-group-item">
                        <span class="badge" >{friend.average.steps}></span>
                        <img src={friend.user.avatar} style={{height: 50, left: 10, borderRadius: "50%"}} />
                        <h4>{friend.user.displayName}</h4>
                    </li>
                )
            })}
        </div>
    </div>

export default Friends
