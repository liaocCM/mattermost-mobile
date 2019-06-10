// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import Svg, {G, Text} from 'react-native-svg';

function Watermark({text, longpost}) {
    if (!text || text.length === 0) {
        return null;
    }

    if (text.length < 10) {
        text = text + ' ' + text; // eslint-disable-line no-param-reassign
    }

    const texts = [];
    if (longpost) {
        const counts = 8;
        const interval = 20;
        const bias = 7;
        for (let i = 0; i < counts; i++) {
            const step = (i * interval) - 160;
            texts.push(
                <Text
                    x={(i * bias) - 30}
                    y={step}
                    key={i}
                >
                    {text}
                </Text>
            );
        }
        for (let i = 0; i < counts; i++) {
            const step = i * interval;
            texts.push(
                <Text
                    x={i * bias}
                    y={step}
                    key={i + 8}
                >
                    {text}
                </Text>
            );
        }
        for (let i = 0; i < counts; i++) {
            const step = (i * interval) + 160;
            texts.push(
                <Text
                    x={(i * bias) + 20}
                    y={step}
                    key={i + 16}
                >
                    {text}
                </Text>
            );
        }
    } else {
        for (let i = 0; i < 8; i++) {
            const step = i * 20;
            texts.push(
                <Text
                    x={i * 7}
                    y={step}
                    key={i}
                >
                    {text}
                </Text>
            );
        }
    }

    return (
        <View style={{width: '100%', height: '100%', position: 'absolute', left: 0, top: 0, opacity: 0.018, zIndex: -1}}>
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
    longpost: PropTypes.bool,
};

export default Watermark;
