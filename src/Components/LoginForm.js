import React from 'react'
import {
    IonInput,
    IonButton,
    IonText,
  } from "@ionic/react";

const LoginForm = () => {

    const inputWidth = {
        maxWidth: "350px",
        marginLeft:"auto",
        marginRight:"auto",
        marginBottom:"1em",
      };
      const headerStyles = {
        marginBottom:"3em",
        fontSize:"20px",
      };
      const LostPasswordStyle = {
        color:"var(--ion-color-dark)",
        textDecoration:'none'
      };

  return (
    <div className='login-form-wrapper'>
        <form>    
            <IonText color="dark"><h5 style={headerStyles}>Login to your account</h5></IonText>
            <IonInput type="text" placeholder="Username" className="ion-margin-bottom ion-text-left" style={inputWidth}></IonInput>
            <IonInput type="password" placeholder="Password" className="ion-margin-bottom ion-text-left" style={inputWidth}></IonInput>
            <IonButton color="secondary" shape="round">Login</IonButton>
            <IonText><h6><a href='/lost-password/' style={LostPasswordStyle}>Lost your password?</a></h6></IonText>
        </form>
    </div>
    
  )
}

export default LoginForm