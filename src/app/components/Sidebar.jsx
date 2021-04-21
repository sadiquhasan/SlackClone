import React from 'react'
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import createIcon from '@material-ui/icons/Create';
import SidebarOptionContainer from './SidebarOption';
import InsertIcon from '@material-ui/icons/InsertChart';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FilterCopyIcon from '@material-ui/icons/FileCopy';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import AddIcon from '@material-ui/icons/Add';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SidebarOption from './SidebarOption';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase';

const Sidebar = () => {
    
    const [channels, loading, error] = useCollection(db.collection("rooms"));

    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Sadiqu hasan</h2>
                    <h3>
                        <FiberManualRecordIcon/>
                        Web Developer
                    </h3>
                </SidebarInfo>
                <createIcon />
            </SidebarHeader>

            <SidebarOptionContainer Icon={InsertIcon} title="Threads" />
            <SidebarOptionContainer Icon={InboxIcon} title="Mentions & Reactions" />
            <SidebarOptionContainer Icon={DraftIcon} title="Saved items" />
            <SidebarOptionContainer Icon={BookmarkBorderIcon} title="Channel browser" />
            <SidebarOptionContainer Icon={PeopleAltIcon} title="People & user groups" />
            <SidebarOptionContainer Icon={AppsIcon} title="Apps" />
            <SidebarOptionContainer Icon={FilterCopyIcon} title="File browser" />
            <SidebarOptionContainer Icon={ExpandLessIcon} title="Show less" />
            <hr />
            <SidebarOptionContainer Icon={ExpandMoreIcon} title="Channels" />
            <hr/>
            <SidebarOptionContainer addChannelOption Icon={ExpandMoreIcon} title="Add Channel" />
            
            {channels?.docs.map(doc => (
                <SidebarOption 
                    key={doc.id} 
                    id={doc.id}
                    Icon={AddIcon} 
                    title={doc.data().name} 
                />
            ))}
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
   background-color: var(--slack-color);
   color:white;
   flex:0.3;
   border-top:1px solid #49274b;
   max-width:260px;
   margin-top:60px;

   >hr{
       margin-top:10px;
       margin-bottom:10px;
       border:1px solid #49274b;
   }
`;

const SidebarHeader = styled.div`
   display:flex;
   border-bottom:1xp solid #49274b;
   padding:13px;

   > .MuiSvgIcon-root {
       padding:8px;
       color:#49274b;
       font-size:18px;
       background-color: #fff;
       border-radius:999px;
   }
`;

const SidebarInfo = styled.div`
   flex:1;

   >h2{
       font-size:15px;
       font-weight:900;
       margin-bottom:5px;
   }

   >h3{
       display:flex;
       font-size:13px;
       font-weight:400;
       align-items:center;
   }

   >h3 >.MuiSvgIcon-root{
      font-size:14px;
      margin-top:1px;
      margin-right: 2px;
      color:green;
   }
`;
