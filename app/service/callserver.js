// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
function callServer(url, method = 'GET', headers, body) {
    return fetch(url, {
        method,
        headers,
        body,
    }).then((res) => {
        return res.json();
    });
}

function postJSON(url, body) {
    return callServer(
        url,
        'POST',
        {
            'Content-Type': 'application/json',
        },
        JSON.stringify(body)
    );
}

export function getToken() {
    //getToken = function() {};
    return postJSON(
        'http://139.180.203.15/IFDPortal_TPECH/HTML5/GetToken.ashx',
        {
            content: {
                empId: 'Z0738',
            },
            token: '',
        }
    );
}

export function getCounts(token) {
    return postJSON(
        'http://139.180.203.15/Sidi_TPECH/api/json/getfolder.ashx',
        {
            content: {},
            token,
        }
    );
}
