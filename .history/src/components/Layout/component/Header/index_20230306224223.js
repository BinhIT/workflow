import styles from './css/Header.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('caTbTe')}>
                <div className={cx('logo')}>
                    <a></a>
                </div>
            </div>
        </header>
    )
}
export default Header;