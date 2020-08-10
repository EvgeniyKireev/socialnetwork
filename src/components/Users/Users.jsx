import React from 'react';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
              id: 1,
              fullName: "Лиза Лисенкова",
              followed: true,
              status: "Я дурочка",
              location: { city: "Рузаевка", country: "Россия" },
              profilePhoto:
                "https://sun9-21.userapi.com/c851536/v851536403/c6a2b/yRArLQZ6MLo.jpg",
            },
            {
              id: 2,
              fullName: "Евгений Киреев",
              followed: false,
              status: "Я лучший",
              location: { city: "Москва", country: "Россия" },
              profilePhoto:
                "https://sun9-21.userapi.com/c851536/v851536403/c6a2b/yRArLQZ6MLo.jpg",
            },
            {
              id: 3,
              fullName: "Давид Аджамян",
              followed: true,
              status: "я давид",
              location: { city: "Москва", country: "Россия" },
              profilePhoto:
                "https://sun9-21.userapi.com/c851536/v851536403/c6a2b/yRArLQZ6MLo.jpg",
            },
          ])
    }

    return(<div>
        {props.users.map(u => <div key={u.id}>
            <div>
                <img src={u.profilePhoto} alt="profilePhoto"/>
            </div>
            <div>
                <h3>{u.fullName}</h3>
            </div>
            <div>{u.location.city}{u.location.country}</div>
            <div>
                {u.followed ? <button onClick={() => props.unfollow(u.id)}>unfollow</button> : <button onClick={() => props.follow(u.id)}>follow</button>}
            </div>
        </div>

        )}
    </div>);
} 

export default Users;