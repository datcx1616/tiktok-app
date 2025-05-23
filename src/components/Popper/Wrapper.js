import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function wrapper({ children }) {
    return <div className={cx('wapper')}>{children}</div>;
}

export default wrapper;
