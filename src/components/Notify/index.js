import classNames from 'classnames/bind';
import styles from './Notify.module.scss';

const cx = classNames.bind(styles);

function Notify({ quantity }) {
    return <div className={cx('notify')}>{quantity}</div>;
}

export default Notify;
