import styles from './Register.module.scss'
import classNames from 'classnames/bind';
import { FaUserAlt } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import Footer from '~/components/Layout/components/Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
const cx = classNames.bind(styles)



function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    function handleRegister(event) {


        var confirmPassword = document.querySelector('.confirm-password input').value;

        // var message = document.querySelector('.message p')


        try {
            fetch('http://localhost:3002/sign-up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, confirmPassword, phone }),
            })
                .then((res) => {
                    if (res.status === 200) {
                        alert('The input is required or The input is email or The password is equal confirmPassword')
                    } else if (res.status === 404) {
                        alert('Hệ thống lỗi');
                    } else if (res.status === 500) {
                        alert('User đã tồn tại');
                    } else if (res.status === 501) {
                        alert('Vui lòng nhập thông tin');
                    }
                })

                .then((data) => {


                    console.log(data)


                })
        } catch (error) {
            console.error('Lỗi đăng ký:', error.message);
        }
        toast.success('Đăng ký thành công')

        event.preventDefault();



    }

    return (
        <div className={cx('container')}>

            <div className={cx('wrapper')}>
                <div className={cx('form')}>
                    <form action=''>
                        <h1 style={{ textAlign: 'center' }}>Register</h1>
                        <div className={cx('input-box')} style={{ marginTop: '10px' }}>
                            <input type='text' placeholder='Your Name' required onChange={(e) => setName(e.target.value)} />
                            <FaUserAlt className={cx('icon')} />
                        </div>
                        <div className={cx('input-box')} style={{ marginTop: '10px' }}>
                            <input type='text' placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />
                            <FaUserAlt className={cx('icon')} />
                        </div>
                        <div className={cx('input-box')} style={{ marginTop: '10px' }}>
                            <input type='text' placeholder='Phone' required onChange={(e) => setPhone(e.target.value)} />
                            <FaUserAlt className={cx('icon')} />
                        </div>
                        <div className={cx('input-box', 'password')} style={{ marginTop: '8px' }}>
                            <input type='password' placeholder='Password' required onChange={(e) => setPassword(e.target.value)} />
                            <FaLock className={cx('icon')} />
                        </div>
                        <div className={cx('input-box', 'confirm-password')} style={{ marginTop: '8px' }}>
                            <input type='password' placeholder='Confirm Password' required onChange={(e) => setConfirmPassword(e.target.value)} />
                            <FaLock className={cx('icon')} />
                        </div>
                        <div className={cx('message')} style={{
                            color: 'red',
                            fontSize: '1.6rem',
                            fontWeight: '600',
                            marginTop: '10px',
                            cursor: 'pointer'
                        }}>
                            <p></p>
                        </div>
                        <div className={cx('remember-forgot')}>
                            <div>     <a href='/'>Forgot password</a></div>
                        </div>
                        <button type='submit' className={cx('btn')} onClick={handleRegister}>Register</button>
                        <div className={cx('register-link')}>
                            <p style={{ marginRight: '5px', cursor: 'pointer' }}>Have an account?
                            </p>
                            <Link to='/login'>   <div><div href='/' style={{ color: 'red', fontWeight: '600' }} >Login</div></div></Link>
                        </div>
                    </form>
                </div>
            </div >
            <Footer></Footer>
        </div >
    )
}

export default Register;