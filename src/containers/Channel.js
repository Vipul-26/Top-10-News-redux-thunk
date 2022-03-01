import React from 'react';
import { connect } from 'react-redux';
import { selectChannel } from '../actions';

let Channel = ({ channelString, channelName, onClick, active }) => (
    <div  className=" col-lg-2 col-md-4 col-sm-6 " data-test="component-channel">
        <div className="channel-button" onClick={onClick}
            style={{ backgroundColor: active === channelName ? 'orange' : '' }}>
            <p>{channelString}</p>
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    active: state.channelName
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(selectChannel(ownProps.channelName));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Channel);
