import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";

import { getLogin } from '../../store/auth/action'


export default function Login() {
    let dispatch = useDispatch()
    const [userId, setUserId] = React.useState("")
    const [pwd, setPwd] = React.useState("")
    return (
        <div>
            <TextField
                value={userId}
                label="user id"
                id="standard-required"
                onChange={e => setUserId(e.target.value)}
            />
            <TextField
                value={pwd}
                label="password"
                id="standard-required"
                onChange={e => setPwd(e.target.value)}
            />
            <div>
                <Button
                    variant="contained"
                    onClick={() => { dispatch(getLogin(userId, pwd)) }}
                >Login</Button>
            </div>

        </div>
    )
}