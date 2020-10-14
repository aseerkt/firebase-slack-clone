import { IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React from 'react';
import { useHistory } from 'react-router-dom';
import db from '../../../firebase';
import './SidebarOption.css';

function SidebarOption({ Icon, title, id, addChannelOption }) {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    }
  };

  const addChannel = () => {
    const channelName = prompt('New Channel Name:');
    if (channelName) {
      db.collection('rooms').add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className='sidebarOption'
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      <div className='sidebarOption__left'>
        {Icon && <Icon className='sidebarOption__icon' />}
        {Icon ? (
          <h3>{title}</h3>
        ) : (
          <h3 className='sidebarOption__channel'>
            <span className='sidebarOption__hash'>#</span> {title}
          </h3>
        )}
      </div>
      {!addChannelOption && id && (
        <div className='sidebarOption__channelAction'>
          <IconButton size='small'>
            <Delete fontSize='small' />{' '}
          </IconButton>
        </div>
      )}
    </div>
  );
}

export default SidebarOption;
