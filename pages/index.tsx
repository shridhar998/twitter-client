import { Inter } from 'next/font/google'
import {BsTwitter, BsSearch, BsCardChecklist, BsPeople, BsPerson} from "react-icons/bs"
import React,{useCallback} from 'react';
import {BiHomeCircle} from 'react-icons/bi'
import { VscBell } from "react-icons/vsc";
import {FiMail} from 'react-icons/fi';
import FeedCard from '@/components/FeedCard';
import {CredentialResponse, GoogleLogin} from '@react-oauth/google';
import toast from 'react-hot-toast';
import { graphqlClient } from '@/clients/api';
import { verifyGoogleTokenQuery } from '@/graphql/queries/user';

// 

const inter = Inter({ subsets: ['latin'] })

interface TwitterSidebarButton {
  icon: React.ReactNode,
  title:String
}
const sideBarMenuButton : TwitterSidebarButton[] = [
  {
    title:"Home",
    icon:<BiHomeCircle/>
  },
  {
    title:"Explore",
    icon:<BsSearch/>
  },
  {
    title:"Notifications",
    icon:<VscBell/>
  },
  {
    title:"Messages",
    icon:<FiMail/>
  },
  {
    title:"Lists",
    icon:<BsCardChecklist/>
  },
  {
    title:"Communities",
    icon:<BsPeople/>
  },
  {
    title:"Profile",
    icon:<BsPerson/>
  }
];

export default function Home() {
  const handleLoginWithGoogle =useCallback(async(cred : CredentialResponse) => {
      const googleToken = cred.credential 
      if(!googleToken){
        return toast.error('Google Token not found')
      }
      const { verifyGoogleToken} = await graphqlClient.request(
        verifyGoogleTokenQuery,
        {token:googleToken}
      );

      toast.success('Verified Success');
      console.log(verifyGoogleToken)
      if(verifyGoogleToken){
        window.localStorage.setItem('__twitter_token',verifyGoogleToken);
      }
    },[])
  

  return (
    <div className='grid grid-cols-12 h-screen w-screen px-56'>
      <div className='col-span-3 flex justify-start pt-8'>
          <div className='text-3xl h-fit hover:bg-gray-400 rounded-full p-2 cursor-pointer transition-all'>
            <BsTwitter/>
          </div>
        <div className='mt-8 text-lg gap-4 h-fit mr-4'>
          <ul>
            {
              sideBarMenuButton.map((item,idx)=>(
                <li 
                className='flex items-center gap-2 hover:bg-slate-800 rounded-full cursor-pointer p-4'
                key={idx}>
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))
            }
          </ul>
          <button className='bg-[#1d9bf0] hover:bg-[#1df9] p-4 rounded-full w-full mt-4'>
            Tweet
          </button>
        </div>
      </div>

      <div className='col-span-6 border-r-[1px] border-l-[1px] h-screen overflow-y-scroll no-scrollbar border-gray-600'>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
      </div>

      <div className='col-span-3 p-5'>
        <div className='bg-slate-500 rounded-lg p-5 w-fit'>
          <h1 className='text-2xl my-2'>New to Twitter?</h1>
          <GoogleLogin
          onSuccess={(cred)=>{
            handleLoginWithGoogle(cred)
          }}
          />
        </div>
      </div>
    </div>
  )
}

