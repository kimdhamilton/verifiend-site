import React, { useState, useEffect } from "react";
import {
    List
} from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";

export const AccountList = ({ endpoint, type }) => {
    const [diffs, setDiffs] = useState([]);
    useEffect(() => {
        fetch(endpoint)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw response;
                }
            }).then((data) => {
                if (type === 'added') {
                    setDiffs(data.added);
                } else {
                    setDiffs(data.deleted);
                } 
            }).catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <List>
            {diffs?.map((item) => RenderListItem(item))}
        </List>
    )};



const RenderListItem = (item) => {
    return (
        // concatenate the username to the base url to make a link to the user's profile    
        <List.Item>
            <List.Content as='a' href={`https://twitter.com/${item.username}`}>{item.name}</List.Content>
        </List.Item>
    )
}

