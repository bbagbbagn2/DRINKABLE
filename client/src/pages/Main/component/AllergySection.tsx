import React from 'react';
import styled from 'styled-components';

import BrandsItemComponents from '../../../components/ui/BrandsItemComponent';
import Button from '../../../components/ui/Button';
import Title from '../../../components/ui/Title';

export default function AllergySection() {
  return (
    <main className='container responsivegrid'>
      <div className='cmp-container'>
        <Title titleProps="식품알레르기 보기" marginTop='64px' />
        <BrandsList className='container responsivegrid brands-list'>
          <div className='cmp-container'>
            <BrandsItemComponents />
          </div>
        </BrandsList>
        <ButtonContainer>
          <Button href="/brands" buttonText="모두 보기" />
        </ButtonContainer>
      </div>
    </main>
  );
}

const BrandsList = styled.div`
  margin-inline: -8px;

  .cmp-container {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    margin-inline: auto;
    padding: 0;
    width: auto;
    
    .cmp-image {
      padding-bottom: 100%;
      position: relative;
      width: 100%;
      height: 0;

      &::before {
        background-color: #fafafa;
        border-radius: 16px;
        box-shadow: 0 14px 24px rgba(0, 0, 0, 0.06);
        content: '';
        display: block;
        inset: 0;
        position: absolute;
        transition: all 0.2s ease-out;
      }

      @media only screen and (min-width: 1200px) {
        &:hover::before {
          inset: -8px;
          box-shadow: 0 14px 24px 0 rgba(0, 0, 0, 0.1);
        }
      }
    }

    .cmp-image__link {
      inset: 0;
      padding: 24px;
      position: absolute;
    }

  }

  @media only screen and (min-width: 1200px) {
    margin-inline: -16px;

    .cmp-container {
      margin-inline: auto;
      width: 75%;

      .cmp-image__link {
        padding: 32px;
      }
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
