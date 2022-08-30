import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8ff22e2195c5c62c12274719e7afddc4~c5_300x300.webp?x-expires=1661932800&x-signature=tjMnYG2A%2B1MU8SeBb2tUay25e%2BM%3D"
                alt="Hooa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>nguyenvana</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>Nguyễn Văn A</span>
            </div>
        </div>
    );
}

export default AccountItem;
