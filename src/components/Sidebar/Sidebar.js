import React from 'react';
import './Sidebar.css';
import {
  Add,
  Apps,
  Bookmark,
  BookmarkBorder,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from '@material-ui/icons';
import SidebarOption from './SidebarOption/SidebarOption';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <div className='sidebar__headerInfo'>
          <h2>CP Academy</h2>
          <h3>
            <FiberManualRecord />
            Aseer KT
          </h3>
        </div>
        <Create />
      </div>
      <SidebarOption Icon={InsertComment} title='Threads' />
      <SidebarOption Icon={Inbox} title='Mentions & Reactions' />
      <SidebarOption Icon={Drafts} title='Saved Items' />
      <SidebarOption Icon={BookmarkBorder} title='Channel Browser' />
      <SidebarOption Icon={PeopleAlt} title='Peoples & User Groups' />
      <SidebarOption Icon={Apps} title='Apps' />
      <SidebarOption Icon={FileCopy} title='File Browser' />
      <SidebarOption Icon={ExpandLess} title='Show Less' />
      <hr />
      <SidebarOption Icon={ExpandMore} title='Channels' />
      <hr />
      <SidebarOption Icon={Add} title='Add Channel' />

      {/* Connect to DB and list all Channel */}
    </div>
  );
}

export default Sidebar;
