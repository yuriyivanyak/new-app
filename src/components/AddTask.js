import React from "react";

function AddTask({onAdd}) {
    const [text, setText] = React.useState('')
    const [day, setDay] = React.useState('')
    const [reminder, setReminder] = React.useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please Enter text!')
            return
        }
        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor="">Task</label>
                <input
                    type="text"
                    placeholder='task'
                    value={text}
                    onChange={(event) => setText(event.target.value) }
                />
            </div>
            <div className='form-control'>
                <label htmlFor="">Day & Time</label>
                <input
                    type="text"
                    placeholder='data'
                    value={day}
                    onChange={event => setDay(event.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label htmlFor="">Reminder</label>
                <input
                    type="checkbox"
                    checked={reminder}
                    value={reminder}
                    onChange={event => setReminder(event.currentTarget.checked)}
                />
            </div>

            <input className='btn btn-block'
                   type="submit"
                   value="Save task"/>
        </form>
    )
}

export default AddTask