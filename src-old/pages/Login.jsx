import React from 'react'
import wmsLogo from '../assets/WMS Logo - Horizontal.png'
import circle1 from '../assets/floating-circle-top.png'
import circle2 from '../assets/floating-circle-bottom.webp'
import { IonPage, IonGrid, IonRow, IonCol, IonContent, IonImg} from '@ionic/react';
import Form from '../components/Form'

const Login = () => {

    const loginFields = [
        {key:'form-1', type : 'text', label: 'Username', placeholder: 'Username/Email', customClasses: 'login-username'},
        {key:'form-2', type : 'password', label: 'Password', placeholder: 'Password', customClasses: 'login-password'},
    ]

  return (
    <IonPage className='login-page'>
        <IonContent>
            <IonGrid>
                <IonRow className='ion-justify-content-center ion-text-center'>
                    <IonImg src={circle1} className='login-circle-top' style={{zIndex:-1}}/>
                    <IonCol size='10' sizeMd='8' sizeLg='8' className='ion-justify-content-start ion-align-items-center' style={{marginTop: '25%'}}>
                        <IonImg src={wmsLogo} style={{maxWidth: '300px', margin: 'auto'}}/>
                        <form action="">
                            <Form formHeading='Login to your account' buttonText='Login' inputFields={loginFields} />
                        </form>
                        <p>Lost your password?</p>
                    </IonCol>
                    <IonImg src={circle2} className='login-circle-bottom' style={{zIndex:-1}}></IonImg>
                </IonRow>
            </IonGrid>
        </IonContent>
    </IonPage>
  )
}

export default Login