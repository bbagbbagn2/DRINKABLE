import React from "react";

import Main from "../../../components/ui/Main";
import Button from "../../../components/ui/Button";
import CampaingnCard from "../../../components/ui/CampaignCard";

export default function CampaingnSection() {
  return (
    <Main>
      <CampaingnCard
        title="Possibility"
        description="저는 빠르게 변화하는 프론트엔드 기술 환경에 흥미가 있습니다. 개인 프로젝트 및 팀 프로젝트를 통해 적용 가능한 기술과 노력을 통해 기여할 가능성을 높이고 있는 것에 최선을 다 하고 있습니다.
                "
        className="content-on-left"
      >
        <Button href="/projects" buttonText="프로젝트 보기" />
      </CampaingnCard>
      <CampaingnCard
        title="Refactoring"
        description="코드의 가독성과 유지보수를 높이기 위한 리팩토링을 꾸준히 하고 있습니다. 조금씩이라도 코드를 효율적으로 수정하고, 리팩토링을 꾸준히 함으로써 실력이 발전하는 것을 느낍니다.
                "
        className="content-on-right"
      >
        <Button href="/" buttonText="이력서 보기" />
      </CampaingnCard>
    </Main>
  );
}