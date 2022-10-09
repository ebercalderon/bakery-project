import {useTheme} from 'next-themes';

const Switcher = () => {
    const {theme, setTheme} = useTheme();
    return (
        <div className='fixed top-1/4 -right-1 z-3'>
			<span
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className='relative inline-block rotate-90'
            >
				<input
                    checked={theme === 'dark'}
                    type='checkbox'
                    className='checkbox opacity-0 absolute'
                />
				<label
                    className='label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8'
                    htmlFor='chk'
                >
					<i className='uil uil-moon text-[20px] text-yellow-500'/>
					<i className='uil uil-sun text-[20px] text-yellow-500'/>
					<span
                        className='ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7'/>
				</label>
			</span>
        </div>
    );
};

export default Switcher;
