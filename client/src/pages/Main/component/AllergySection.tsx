import React from 'react';
import styled from 'styled-components';

import Main from '../../../components/ui/Main';
import BrandsItemComponents from '../../../components/ui/BrandsItemComponent';
import Button from '../../../components/ui/Button';
import Title from '../../../components/ui/Title';

export default function AllergySection() {
  return (
    <main className='container responsivegrid'>
      <div>
        <Title titleProps="식품알레르기 보기" marginTop='64px' />
        <LocationContainer>
          <LocationBox>
            <BrandsItemComponents />
          </LocationBox>
        </LocationContainer>
        <ButtonContainer>
          <Button href="/brands" buttonText="모두 보기" />
        </ButtonContainer>
      </div>
    </main>
  );
}

const LocationContainer = styled.div`
  margin-inline: -8px;

  @media only screen and (min-width: 1200px) {
    margin-inline: -16px;
  }
`;

const LocationBox = styled.div`
  margin-inline: auto;
  padding: 0;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  -webkit-box-align: center;
  -webkit-box-pack: center;

  @media only screen and (min-width: 1200px) {
    margin-inline: auto;
    width: 75%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
