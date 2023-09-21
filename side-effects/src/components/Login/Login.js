import React, { useEffect, useState, useReducer} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => { 
  if (action.type === "USER_INPUT") { 
    return ({value: action.val, isValid: action.val.includes('@')})
  }
  if (action.type === "INPUT_BLUR") { 
    return ({value: state.value, isValid: state.value.includes('@')})
  }
  return ({ value: '', isValid: undefined })
}

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return ({ value: action.val, isValid: action.val.trim().length > 6 })
  }
  if (action.type === "INPUT_BLUR") {
    return ({ value: state.value, isValid: state.value.trim().length > 6 })
  }
  return ({ value: '', isValid: undefined })
}

const Login = (props) => {

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: undefined },)
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: undefined },)
  
  const { isValid: passwordIsValid } = passwordState
  const { isValid: emailIsValid } = emailState

  useEffect(() => {
    const myTimeout = setTimeout(() => {
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
      console.log("Validating...")
    }, 500)

    return (() => {
      clearTimeout(myTimeout)
      console.log('Cleanup.')
    })

  }, [emailIsValid, passwordIsValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({type:'USER_INPUT', val: event.target.value})
    // setFormIsValid(emailState.isValid && passwordState.isValid)
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type: "USER_INPUT", val: event.target.value})
    // setFormIsValid(emailState.isValid && passwordState.isValid)
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({type: "INPUT_BLUR"})

  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(passwordState.value.trim().length > 6);
    dispatchPassword({type: 'INPUT_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
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
          className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''
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
