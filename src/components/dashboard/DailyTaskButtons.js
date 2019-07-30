import React from 'react'

const DailyTaskButtons = () => {
    const buttonsInfo = [
        {
            id: 1,
            text: '1w'
        },
        {
            id: 2,
            text: '2w'
        },
        {
            id: 3,
            text: '3w'
        },
        {
            id: 4,
            text: '4w'
        },
        {
            id: 5,
            text: '5w'
        },
        {
            id: 6,
            text: '6w'
        },
        {
            id: 7,
            text: '7w'
        },
    ]

    const buttonList = buttonsInfo.map(button => (
        <button className="btn-task" key={button.id}>
            {button.text}
        </button>
    ));
    
    return (
        <div className="task-btns">
            {buttonList}
        </div>
    )
}

export default DailyTaskButtons
