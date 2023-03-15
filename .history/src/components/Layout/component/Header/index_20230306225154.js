import styles from './css/Header.module.scss';
import classNames from 'classnames/bind';
import { ReactComponent as YourSvg } from './image/logo_workflow.svg';
const cx = classNames.bind(styles)
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('caTbTe')}>
                <div className={cx('logo')}>
                    <a>
                        <YourSvg />
                    </a>
                </div>
            </div>
        </header>
    )
}
export default Header;