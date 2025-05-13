import classNames from 'classnames/bind';
import styles from './Accountltem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/9f41bd2f32f1e51eea4392ace1c57a37~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=6ec0a28c&x-expires=1747321200&x-signature=D6WWCI5%2F%2BPEEpegwF4YBiYE%2BE6Q%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                alt=" hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>nguyen van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}> nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
