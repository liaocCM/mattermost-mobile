// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import Svg, {G, Text} from 'react-native-svg';

function Watermark({text}) {
    if (!text || text.length === 0) {
        return null;
    }

    if (text.length < 10) {
        text = text + ' ' + text; // eslint-disable-line no-param-reassign
    }

    const texts = [];
    for (let i = 0; i < 8; i++) {
        const step = i * 20;
        texts.push(
            <Text
                x={i * 5}
                y={step}
                key={i}
            >
                {text}
            </Text>
        );
    }

    return (
        <View style={{width: '100%', height: '100%', position: 'absolute', left: 0, top: 0, opacity: 0.1, zIndex: -1}}>
            <Svg
                height='100%'
                width='100%'
                viewBox='0 0 90 160'
            >
                <G
                    rotation={10}
                    origin='1, 1'
                >
                    {texts}
                </G>
            </Svg>
        </View>
    );
}

Watermark.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Watermark;
