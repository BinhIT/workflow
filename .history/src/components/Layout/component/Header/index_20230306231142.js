import styles from './css/Header.module.scss';
import classNames from 'classnames/bind';
import { ReactComponent as Logo } from './image/logo.svg';
const cx = classNames.bind(styles)
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('caTbTe')}>
                <div className={cx('logo')}>
                    <a >
                        <Logo className={cx('svg')} />
                    </a>
                </div>
            </div>
        </header>
    )
}
export default Header;