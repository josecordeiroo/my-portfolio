import React from "react";

import styled from "styled-components";

import Userfront from "@userfront/react";

Userfront.init("wn9qg5pn");

export const SignupForm = Userfront.build({
  toolId: "rdlknm"
});

export const LoginForm = Userfront.build({
    toolId: "andobd"
  });

  export const PasswordResetForm = Userfront.build({
    toolId: "lronbb"
  });

  export const LogoutButton = Userfront.build({
    toolId: "bkloda"
  });

  export const LoginPage = () => {
    return (
      <DivStyle>
        <LoginForm />
      </DivStyle>
    );
  };
  
  export const SignupPage = () => {
    return (
      <DivStyle>
        <SignupForm />
      </DivStyle>
    );
  };
  
  export const ResetPage = () => {
    return (
      <DivStyle>
        <PasswordResetForm />
      </DivStyle>
    );
  };
  
  const DivStyle = styled.div`
  margin: 50px;
  `;
  