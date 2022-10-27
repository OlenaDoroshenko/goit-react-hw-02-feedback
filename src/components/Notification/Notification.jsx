import React from 'react';
import css from './Notification.module.css'

const Notification = ({ message }) => <p className={css.message}>{message}</p>;

export default Notification;
