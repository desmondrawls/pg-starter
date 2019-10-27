import React, { useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { SCREEN } from './screen';
import Signin from './Signin';
import { Musicians } from './Musicians';

const SwitcherWithDesiredScreen = ({ screen, history, location: { search } }) => {
  return <Switcher {...{ search, history, computedScreen: screen }} />
}

const Switcher = ({ search, history, computedScreen }) => {
  useEffect(() => {
    if (computedScreen) {
      history.push(`${computedScreen}${search}`)
    }
  }, [computedScreen])

  return (
    <Switch location={{ pathname: computedScreen, search, hash: '' }}>
      <Route path={SCREEN.SIGN_IN} component={Signin} />
      <Route path={SCREEN.MUSICIANS} component={Musicians} />
    </Switch>
  )
}

const authenticated = screen => Child => {
  return ({}) => (
    <div className='backdrop'>
      <Child />
    </div>
  )
}

export default withRouter(SwitcherWithDesiredScreen)
