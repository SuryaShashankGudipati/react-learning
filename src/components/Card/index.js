
export default function ({ id, body, userId, title }) {
    // const { id, body, userId, title } = props
    // const { id, body, userId, title } = props.data
    return (
        <div style={{
            border: "2px solid red"
        }}>
            <div>{id}</div>
            <div>{body}</div>
            <div>{userId}</div>
            <div>{title}</div>
        </div>
    )
}