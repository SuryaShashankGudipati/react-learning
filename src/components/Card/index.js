
export default function ({ data, someComponent, handleClick }) {

    const { id, body, userId, title } = data
    return (
        <div
            onClick={() => handleClick(data)}
            style={{
                border: "2px solid red"
            }}>
            <div>{id}</div>
            <div>{body}</div>
            <div>{userId}</div>
            <div>{title}</div>
            {someComponent}
        </div>
    )
}