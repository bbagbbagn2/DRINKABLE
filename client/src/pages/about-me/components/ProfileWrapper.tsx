import React from "react";
import { GridTwoContainer } from "../../../components/ui/GridContainer";
import ContentCard from "../../../components/ui/ContentCard";
import Title from "../../../components/ui/TitleContainer";
import Text from "../../../components/ui/TextContainer";

export default function ProfileWrapper() {
  return (
    <div>
      <Title>
        <h1>프론트엔드 개발자 박지훈입니다.</h1>
      </Title>
      <Text>
        <p style={{ textAlign: "center" }}>
          <b>
            프론트엔드 개발자 박지훈입니다. 저는 React 뿐만 아니라
            styled-components, Next.js 등 개인 및 팀 프로젝트를 통해 다양한
            기술을 사용한 경험이 있습니다. 또한, 코드의 가독성과 유지보수를
            높이기 위한 리팩토링을 꾸준히 하고 있습니다. 조금씩이라도 코드를
            효율적으로 수정하고, 리팩토링을 꾸준히 함으로써 제가 프로젝트에
            임하는 자세와 저의 성실함을 나타낼 수 있습니다.
          </b>
        </p>
      </Text>
      <GridTwoContainer>
        <ContentCard title="Profile" showImage={false}>
          박지훈
          <hr />
          1999.01.13
          <hr />
          부산광역시 연제구
          <hr />
        </ContentCard>
        <ContentCard title="Contact" showImage={false}>
          pyoungh137@gamil.com
          <hr />
          010-9207-8758
          <hr />
        </ContentCard>
      </GridTwoContainer>
    </div>
  );
}
