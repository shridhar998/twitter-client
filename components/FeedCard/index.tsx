import Image from 'next/image';
import React from 'react';
import {BiMessageRounded} from 'react-icons/bi';
import {FaRetweet} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
import {FiShare} from 'react-icons/fi';

const FeedCard : React.FC = ()=>{
    return(
        <div className='border border-r-0 border-b-0 border-l-0 border-gray-600 p-4 hover:bg-slate-900 transition-all cursor-pointer'>
            <div className='grid grid-cols-12 gap-3'>
                <div className='col-span-1'>
                    <Image
                    className='rounded-full'
                    src="https://avatars.githubusercontent.com/u/83115648?v=4"
                    alt="user-avatar"
                    width={50}
                    height={50}
                    />
                </div>
                <div className='col-span-11'>
                    <h5>Shridhar Sarraf</h5>
                    <p>
                        Is it just me or everyone else also getting no jobs for freshers.<br/>
                        #layoffs_suck
                    </p>
                    <div className='flex justify-around mt-4 w-[75%]'>
                        <div><BiMessageRounded/></div>
                        <div><FaRetweet/></div>
                        <div><AiOutlineHeart/></div>
                        <div><FiShare/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FeedCard;