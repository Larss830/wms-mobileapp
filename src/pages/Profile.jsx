import React from "react";
import {
  IonPage,
  IonContent,
  IonImg,
  IonAvatar,
  IonItem,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import { call, mail, link } from "ionicons/icons";
import userAvatar from "../assets/male-avatar-placeholder.png";

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
  const profileNameStyles = {
    marginBottom: "0",
    fontSize: "20px",
  };

  const profilePositionStyles = {
    fontWeight: 600,
    margin: 0,
    fontSize: "14px",
  };

  const profileHeadImgSize = {
    width: "80px",
    height: "80px",
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
    <IonPage className="profile-page app-padding">
      <IonContent>
        <IonItem>
          <IonAvatar slot="start" style={profileHeadImgSize}>
            <IonImg
              alt="Silhouette of a person's head"
              src={userAvatar}
              style={profileHeadImgSize}
            />
          </IonAvatar>
          <IonLabel class="ion-text-nowrap">
            <h6 style={profileNameStyles}>{profileData.profileName}</h6>
            <p style={profilePositionStyles}>{profileData.profilePosition}</p>
          </IonLabel>
        </IonItem>

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
                  href={`tel:${profileData.profileLinks.profileEmail}`}
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
                  href={`tel:${profileData.profileLinks.profileWebLink}`}
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
