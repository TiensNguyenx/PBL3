import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import { Link } from 'react-router-dom';
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrNotification, GrLogout } from "react-icons/gr";
import { BsChatDots } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai"
import { BsCartCheck } from "react-icons/bs"
import { BiUserCircle } from "react-icons/bi"
import ModalConfirmLogout from '../ModalConfirmLogout/ModalConfirmLogout';
import { useState } from 'react';

const cx = classNames.bind(styles)

function Header() {
    const [isShowModalConfirm, setIsShowModalConfirm] = useState(false);

    const handleLogout = () => {
        setIsShowModalConfirm(true);
    }
    function handleClose() {
        setIsShowModalConfirm(false);
    }
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div >
                    <Link to="/"><img className={cx('logo')} src='https://philong.com.vn/media/banner/logo_philong11.png' alt=''></img></Link>
                </div>
                <div className={cx('input')} >

                    <div className={cx('btn-list')} ><span style={{ fontSize: '1.5rem' }}>Tất cả danh mục  </span>  <div ><AiOutlineDown /></div></div>


                    <div className={cx('search')}> <input style={{ height: '100%', width: '100%' }} placeholder='Nhập tên sản phẩm, mã sản phẩm, từ khóa cần tìm kiếm...' spellCheck={false}></input></div>
                </div>
                <div className={cx('list-item')} >
                    <div className={cx('item')} >
                        <button className={cx('icon')}>  <GrNotification style={{ width: '2rem', height: '2rem' }} /></button>
                        <span className={cx('subtiltle')}>Thông báo</span>
                    </div >

                    <Link to="/cart">
                        <div className={cx('item')} >
                            <button className={cx('icon')}> <AiOutlineShoppingCart style={{ width: '2rem', height: '2rem' }} /></button>
                            <span className={cx('subtiltle')}>Giỏ hàng</span>
                        </div>
                    </Link>

                    <div className={cx('item')}>
                        <button className={cx('icon')}>  <BsChatDots style={{ width: '2rem', height: '2rem' }} /></button>
                        <span className={cx('subtiltle')}>Liên hệ</span>
                    </div>
                    {sessionStorage.getItem('name') ? (
                        <div className={cx('item')} >
                            <Link >


                                <div className={cx('whenlogin')}>

                                    {/* <button className={cx('icon')}> <AiOutlineUser style={{ width: '2rem', height: '2rem' }} /></button> */}
                                    <div className={cx('avatar-user')}>     <img src={sessionStorage.getItem('img')} alt='avatar' />   <span className={cx('username')} > {sessionStorage.getItem('name')} </span></div>
                                    <div>
                                        <ul className={cx('nav')}>
                                            <li className={cx('subnav')}><button> <span className={cx('icon-subnav')}><BiUserCircle /></span>Thông tin tài khoản</button></li>
                                            <Link to='/cart'>      <li className={cx('subnav')}><button><span className={cx('icon-subnav')}><BsCartCheck /></span>Quản lý đơn hàng</button></li></Link>
                                            <li className={cx('subnav')}><button><span className={cx('icon-subnav')}><GrNotification /></span>Thông báo</button></li>
                                            <li className={cx('subnav')}><button onClick={handleLogout} > <span className={cx('icon-subnav', 'last-icon')}><GrLogout /></span>Đăng xuất</button></li>
                                        </ul>
                                    </div >
                                </div>



                            </Link>


                        </div>
                    ) : (
                        <div className={cx('item')} >
                            <Link to='/login'>   <button className={cx('icon')}> <AiOutlineUser style={{ width: '2rem', height: '2rem' }} /></button></Link>
                            <span className={cx('subtiltle')}>Đăng nhập</span>
                        </div>
                    )}
                </div>
                {/* Logo,search,icon */}
            </div>
            <ModalConfirmLogout
                handleClose={handleClose}
                show={isShowModalConfirm}
            />
        </header>

    );
}

export default Header;