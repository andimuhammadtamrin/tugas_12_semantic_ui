import React,{Component} from 'react';
import "semantic-ui-css/semantic.min.css";
import{
  Grid,
  Form,
  Button,
  Checkbox,
  Header,
  Image,
  
  Input,
  Segment,
  Container
}from "semantic-ui-react";

class App extends Component {
  render(){
    return (
      <div>
        <br /><br/><br /> <br /><br />
        <Grid container columns={3}>
          <Grid.Column width={6}>
          </Grid.Column>
          <Grid.Column>
            <Form>
              <Header as="h3" color="teal" inline textAlign="center">
                <Image src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png"/>
                Member Login
              </Header>
              <Segment>
              <Form.Field>
                <Input type="text" icon="user" iconPosition="left" placeholder="E-mail address" />
              </Form.Field>
              <Form.Field>
                <Input type="password" icon="lock" iconPosition="left" placeholder="Password" />
              </Form.Field>
              <Form.Field>
                <Grid>
                  <Grid.Column width={2}></Grid.Column>
                  <Grid.Column width={12}>
                    <Checkbox label="I agree to the Term and Conditions" />
                  </Grid.Column>

                </Grid>
              </Form.Field>
              <Button type="submit" color="teal" textAlign="center" fluid>Login</Button>
              </Segment>
              <Segment>
              <Form.Field>
                <Container textAlign="center">
                  Tidak Punya Akun?Silahkan <a href="https://docs.google.com/forms/d/e/1FAIpQLScrRivndZDBjcIKrux_UrHp-dwy1gKJ8XMxYhQbK513uLdjcA/viewform?entry.1589019149=1D-3-GIAT-BELAJAR-Fri+Dec+27+2019+14:27:52+GMT+0800+(Central+Indonesia+Time),Fri+Dec+27+2019+14:38:05+GMT+0800+(Central+Indonesia+Time),Fri+Dec+27+2019+17:17:57+GMT+0800+(Central+Indonesia+Time)-true">Register</a>
                </Container>
              </Form.Field>
              </Segment>
            </Form>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid>

      </div>
    );
  }
}

export default App;
