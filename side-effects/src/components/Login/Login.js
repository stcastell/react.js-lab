import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  //STATES
  const [formIsValid, setFormIsValid] = useState(false);

  //REDUCERS
  const [emailState, dispatchEmail] = useReducer((prevState, action) => { 
    if (action.type === 'USER_INPUT') { 
      return ({ value: action.val, isValid: action.val.includes('@') });
    };
    if (action.type === 'INPUT_BLUR') { 
      return ({value: prevState.value, isValid: prevState.value.includes('@')});
    };
  }, { value: '', isValid: null });
  
  const [passwordState, dispatchPassword] = useReducer((prevState, action) => { 
    if (action.type === 'USER_INPUT') { 
      return ({ value: action.val, isValid: action.val.trim().length > 6 });
    };
    if (action.type === 'INPUT_BLUR') { 
      return ({ value: prevState.value, isValid: prevState.value.trim().length > 6 });
    };
  }, {value: '', isValid: null});

  //EFFECTS
  useEffect(() => { 
    const timeOut = setTimeout(() => { 
      setFormIsValid(
        emailState.isValid && passwordState.isValid
      );
      console.log('Validated');
    }, 500)
    
    return (() => { 
      clearTimeout(timeOut);
      console.log('Validating');
    });
  }, [emailState.isValid, passwordState.isValid]);
  
  //HANDLERS
  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', val:event.target.value});
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
