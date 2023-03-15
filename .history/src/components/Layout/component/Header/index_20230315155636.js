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
                <div className={cx('main_menu')}>
                    <div className={cx('div_btn_main_menu')}>
                        <button className={cx('btn_main_menu')}>Home</button >
                        <button className={cx('btn_main_menu')}>Feature</button >
                        <button className={cx('btn_main_menu')}>Pricing</button >
                        <button className={cx('btn_main_menu')}>Blog</button >
                        <button className={cx('btn_main_menu')}>FAQ</button >
                        <button className={cx('btn_main_menu')}>About US</button >
                    </div>
                </div>
                <div className={cx('btn_register_menu')}>
                    <a className={cx('btnprimary')}>Get for free</a>
                </div>
            </div>
        </header >
    )
}
export default Header;