import React, { Component } from 'react';
import { Page } from '~/components/Page';
import { Button } from '~/components/Button';

class Home extends Component {
  render() {
    return (
      <Page center verticalCenter>
        <h1 className="display-3 font-weight-bold">Hello, It is WebX</h1>
        <h2>WebX is Web Frontend Starter Kit</h2>
        <div className="mt-3">
          <Button size="lg" color="blue" className="mr-2">
            GitHub
          </Button>
          <Button size="lg" color="red">
            GameXCoin.io
          </Button>
        </div>
      </Page>
    );
  }
}

export default Home;
