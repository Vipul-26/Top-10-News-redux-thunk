import React from 'react';
import Channel from '../containers/Channel';

const ChannelsField = () => (
  <div className="row" data-test="component-channelsfield">
    <Channel channelString="BBC" channelName="bbc-news" />
    <Channel channelString="CNBC" channelName="cnbc" />
    <Channel channelString="CNN" channelName="cnn" />
    <Channel channelString="FT" channelName="financial-times" />
    <Channel channelString="ESPN" channelName="espn" />
    <Channel channelString="TIME" channelName="time" />
  </div>
);
export default ChannelsField;

