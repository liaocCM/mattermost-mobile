// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import {getUser} from 'mattermost-redux/selectors/entities/users';

import Watermark from './watermark';

function mapStateToProps(state, ownProps) {
    let text = ownProps.text;
    if (!text) {
        const user = getUser(state, state.entities.users.currentUserId);
        if (user) {
            text = user.username;
        }
    }

    return {
        text,
    };
}

export default connect(mapStateToProps)(Watermark);
