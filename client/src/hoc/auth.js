import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../_actions/user_action';

export default function Auth(SpecificComponent, option, adminRoute = null) {
  // option
  // null => 아무나 출입 가능
  // true => 로그인한 유저만 접근 가능
  // faslse => 로그인한 유저는 접근 불가능
  
  function AuthenticationCheck () {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect (() => {
      dispatch(auth()).then(response => {
        if (!response.payload.isAuth) {
          // 로그인 하지 않은 상태
          if (option) {
            navigate('/login');
          }
        } else {
          // 로그인 한 상태
          if (adminRoute && !response.payload.isAdmin) {
            navigate('/');
          } else {
            if (!option) {
              navigate('/');
            }
          }

        }
      });
    }, [dispatch, navigate]);

    return <SpecificComponent /> 
  }
  return AuthenticationCheck;
}
