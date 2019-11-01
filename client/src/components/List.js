import React from 'react'

export default function List(props) {
    // if (props.githubData) console.log(props.githubData);

    return (
        <>
            {
                props.githubData.map(charObj => {
                    return (
                        <div id={charObj.id}>
                            <span>Name: {charObj.name}    </span>
                            <span>Country: {charObj.country}    </span>
                            <span>Searches: {charObj.searches}</span>
                        </div>
                    )
                })
            }
        </>
    )
}
