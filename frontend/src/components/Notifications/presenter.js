import React from "react";
import Loading from "components/Loading";
import styles from "./styles.scss";
import Moment from "react-moment";

const Notifications = props => {
  if (!props.notifications) {
    return <Loading />;
  } else {
    return props.notifications.map(notification => {
      return (
        <div className={styles.horizontal}>
          <div className={styles.column}>
            <img
              src={
                notification.creator.profile_image ||
                require("images/noPhoto.jpg")
              }
              alt={notification.creator.username}
              className={styles.avatar}
            />
            <div className={styles.user}>
              <span className={styles.username}>
                {notification.creator.username}
              </span>
            </div>
          </div>
          <div className={styles.column}>
            <span>
              {notification.notification_type}
              {notification.notification_type === "like" ? "d" : "ed"}{" "}
              {notification.comment ? notification.comment : null}{" "}
              <Moment fromNow>{notification.updated_at}</Moment>
            </span>
          </div>
          <span className={styles.column}>
            <img
              className={styles.avatar}
              src={notification.image.file}
              alt={notification.creator.name}
            />
          </span>
        </div>
      );
    });
    // return <RenderNotification notification={props.notifications} />;
  }
};

// const RenderNotification = props => {

// };

export default Notifications;
