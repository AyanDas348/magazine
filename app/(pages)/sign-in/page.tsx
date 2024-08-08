import Image from 'next/image';
import styles from './index.module.css'

const SignIn = () => {
    return (
        <div className={styles.signIn}>
            <div id='login-form' className={styles.loginForm}>
                <h1 className='font-bold text-2xl mb-6'>Welcome Back</h1>
                <h3 className='mb-6'>Advance your creative journey, Share your story, Together at MGZN</h3>
                <form className='flex flex-col'>
                    <div className='flex flex-col'>
                        <label>Email</label>
                        <input
                            type='email'
                            placeholder='Example@email.com'
                            className='!bg-white px-3 py-2 rounded-[12px]'
                            id='inputField'
                        />
                    </div>
                    <div className='flex flex-col mt-2'>
                        <label>Password</label>
                        <input
                            type='password'
                            placeholder='At least 8 characters'
                            className='!bg-white px-3 py-2 rounded-[12px]'
                        />
                    </div>
                </form>
                <p className='flex w-full justify-end mt-4 text-[#DD6545] cursor-pointer'>Forgot Password?</p>
                <button className='bg-[#4F4138] text-white w-full py-2 rounded-[12px] my-4'>
                    Sign In
                </button>

                <div className='flex w-full relative'>
                    <span className='w-full flex justify-center'>Or</span>
                </div>

                <div>
                    <button className='bg-white text-black w-full py-2 rounded-[12px] mt-4'>
                        Sign In With Google
                    </button>
                    <button className='bg-white text-black w-full py-2 rounded-[12px] mt-2'>
                        Sign In With Facebook
                    </button>
                </div>

                <p className='w-full text-center mt-6'>Don&apos;t have an account? <span className='text-[#DD6545] cursor-pointer'>Sign Up</span> </p>
            </div>
            <div className={styles.imageContainer}>
                <Image alt='image' src={''} />
            </div>
        </div>
    );
}

export default SignIn;