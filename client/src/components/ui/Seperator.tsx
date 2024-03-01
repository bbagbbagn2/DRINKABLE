import React from "react";
import styled from "styled-components";

import '../../styles/Separator.css';

export default function SeperatorProps() {
  return (
    <div className="separator">
        <div className="cmp-separator">
          <hr className="cmp-separator__horizontal-rule" />
        </div>
    </div>
  );
}

const Seperator = styled.div`
  margin-top: 56px;
  padding-inline: 8px;
  min-width: 100%;
  flex: 0 0 100%;

  .cmp-seperator {
    margin-top: 0;
  }

  hr {
    margin: 0;
    border: 0;
    border-top: 1px solid #9b9b9b;
  }

  @media only screen and (min-width: 600px) {
    margin-top: 56px;
    padding-inline: 12px;
    min-width: 100%;
    flex: 0 0 100%;
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 48px;
    padding-inline: 16px;
    min-width: 100%;
    flex: 0 0 100%;
  }
`;

const CmpSeperator = styled.div`
  margin-top: 56px;

  .cmp-seperator_horizontal-rule {
    border: 0;
    border-top: 1px solid #9b9b9b;
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 64px;
  }
`;
