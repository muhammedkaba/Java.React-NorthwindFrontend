import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top" size="large">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary/>

            <Menu.Item>
              <Button basic color="blue"><b>Sign Up</b></Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
