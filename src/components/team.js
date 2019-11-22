import React from 'react';
import styled from 'styled-components'

const Div = styled.div`
    text-align: center;
    font-size: 2rem;
`
const Flex = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-evenly;
`


function Team() {
  return (
    <Div>
      <h2>Project Lead</h2>
      <img src='https://i.imgur.com/xG2MjS8.png' width='200px'/>
      <p>Remi Becheru</p>
      <h2 className='team-h2'>Front-End</h2>
      <Flex>
          <div>
              <img src='https://i.imgur.com/pXgTxse.png' width='200px' />
              <p>David Ekanem</p>
          </div>
          <div>
              <img src='https://i.imgur.com/mVZaiIb.png' width='200px' />
              <p>Niklas Becker</p>
          </div>
      </Flex>
      <h2 className='team-h2'>Back-End</h2> 
      <Flex>
          <div>
              <img src='https://i.imgur.com/wSDK7Sn.png' width='200px' />
              <p>Pere Sola Claver</p>
          </div>
          <div>
              <img src='https://i.imgur.com/A8qhrq6.png' width='200px' />
              <p>Amira Adediran</p>
          </div>
          <div>
              <img src='https://i.imgur.com/4HaAjZv.png' width='200px' />
              <p>Alexander Oguejiofor</p>
          </div>
      </Flex>
    </Div>
  );
}

export default Team;

