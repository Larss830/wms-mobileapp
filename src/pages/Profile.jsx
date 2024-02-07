import React from "react";
import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonIcon,
  IonFab,
  IonFabButton,
} from "@ionic/react";
import { call, mail, link, settings } from "ionicons/icons";
import userAvatar from "../assets/male-avatar-placeholder.png";
import { Link } from 'react-router-dom';
import ProfileHeader from "../components/ProfileHeader";
import MainSideMenu from "../components/MainSideMenu";

const Profile = ({profileName, profilePosition, profilePhone, profileEmail, profileWebsite, profileWebLink}) => {
  const profileData = {
    profileName: profileName,
    profilePosition: profilePosition,
    profileLinks: {
      profilePhone: profilePhone,
      profileEmail: profileEmail,
      profileWebsite: profileWebsite,
      profileWebLink: profileWebLink,
    },
  };
  const profileLinksStyle = {
    color: "var(--ion-text-color)",
    display: "flex",
    gap: "1em",
    alignItems: "center",
    textDecoration: "none",
    fontSize: "15px",
    marginBottom: ".5em",
  };

  return (
    <IonPage className="profile-page" id="main-content">
      <IonContent>
        <IonFab slot="fixed" vertical="top" horizontal="end">
          <Link to="/edit-profile">
            <IonFabButton color="light" size="small">
              <IonIcon icon={settings} color="primary"></IonIcon>
            </IonFabButton>
          </Link>
        </IonFab>
        <ProfileHeader profileName={profileData.profileName} userAvatar={userAvatar} profilePosition={profileData.profilePosition}/>

        <IonItem>
          <IonLabel class="ion-text-nowrap ion-align-items-center">
            {profileData.profileLinks.profilePhone ? (
              <p>
                <a
                  href={`tel:${profileData.profileLinks.profilePhone}`}
                  style={profileLinksStyle}
                >
                  <IonIcon icon={call} color="primary"></IonIcon>
                  {profileData.profileLinks.profilePhone}
                </a>
              </p>
            ) : (
              ""
            )}
            {profileData.profileLinks.profileEmail ? (
              <p>
                <a
                  href={`mailto:${profileData.profileLinks.profileEmail}`}
                  style={profileLinksStyle}
                >
                  <IonIcon icon={mail} color="primary"></IonIcon>
                  {profileData.profileLinks.profileEmail}
                </a>
              </p>
            ) : (
              ""
            )}
            {profileData.profileLinks.profileWebsite ? (
              <p>
                <a
                  href={profileWebLink}
                  style={profileLinksStyle}
                >
                  <IonIcon icon={link} color="primary"></IonIcon>
                  {profileData.profileLinks.profileWebsite}
                </a>
              </p>
            ) : (
              ""
            )}
          </IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
