import React from 'react'
import styled from "styled-components"

const Message = ({message , timestamp , user , userImage}) => {
    return (
        <MessageContainer>
            <img src={userImage} alt=""/>
            <MessagInfo>
                <h4>
                    {user}{' '}
                    <span>
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </span>
                    <p>{message}</p>
                </h4>
            </MessagInfo>
        </MessageContainer>
    )
}

export default Message


const MessageContainer = styled.div`
   display:flex;
   align-items:center;
   padding:20px;

   >img{
       height:50px;
       border-radius:8px;
   }
`;

const MessagInfo = styled.div`
   padding-left:10px;

   >h4 >span{
       color:gray;
       font-weight:300;
       margin-left:4px;
       font-size:10px;
   }
`;