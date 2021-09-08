import { useSelector, useDispatch } from 'react-redux'

export default function Home() {
    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    const { dinesh, value } = counter
    return (
        <div>
            <p>You are in home</p>
            <h1>{dinesh}</h1>
            <h1>{value}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
        </div>
    )
}