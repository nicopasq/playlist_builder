import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'

const CLIENT_ID = "88d48ccefc484cc189bcb5c81300d000";
const CLIENT_SECRET = "11d0f0c461c941cf80782a60df38b1a3";


function SpotifyAuth(){
    const dispatch = useDispatch()

    useEffect(() => {
        var authParameters = {
            method:'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            body:'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret='+ CLIENT_SECRET
        }

        fetch('https://accounts.spotify.com/api/token', authParameters)
        .then(result => result.json())
        .then(data => dispatch({type:'accessToken/setAccessToken', payload:data.access_token}))
    }, [])

};

export default SpotifyAuth;