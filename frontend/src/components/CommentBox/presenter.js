import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Textarea from "react-textarea-autosize";

const CommentBox = (props, context) => (
  <form className={styles.commentBox}>
    <Textarea
      placeholder={context.t("Add a comment...")}
      className={styles.input}
    />
  </form>
);

CommentBox.contextTypes = {
  t: PropTypes.func.isRequired
};

export default CommentBox;
