import Header from "@/components/Header";
import SidebarItem from "@/components/layout/SidebarItem";
import useCurrentUser from "@/hooks/useCurrentUser";
import useEditModal from "@/hooks/useEditModal";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FaArrowRight } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { LuArrowUpRight, LuGlobe2, LuLock, LuLogOut, LuSparkles } from "react-icons/lu";
import { RiDiscordLine } from "react-icons/ri";


const UserIcon = (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 12V11.1145C1 8.98025 2.47007 7.12712 4.54839 6.64154L6.02372 6.29685C7.23793 6.01316 8.09677 4.93052 8.09677 3.68361V3.05955C8.09677 1.92209 7.17468 1 6.03722 1V1C4.89976 1 3.97767 1.92209 3.97767 3.05955V3.68647C3.97767 4.93236 4.83426 6.01476 6.0468 6.30106L7.48883 6.64154C9.54642 7.12738 11 8.96413 11 11.0783V12"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );

  const UserBlock = (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 13.5C11.5 12 13.5 10 15 8"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M10 8C11.5 8.66667 14.6 10.7 15 13.5"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.47767 3.05955C3.47767 1.64595 4.62362 0.5 6.03722 0.5C7.45082 0.5 8.59677 1.64595 8.59677 3.05955V3.68361C8.59677 4.64888 8.16292 5.53118 7.46117 6.12126L7.60373 6.15492C7.79068 6.19907 7.97313 6.25326 8.15058 6.31684C7.97515 6.50965 7.82714 6.73341 7.71547 6.98465C7.68413 7.05518 7.65631 7.12638 7.63195 7.19805C7.54722 7.1721 7.46119 7.14877 7.37393 7.12816L6.02576 6.80984L4.66214 7.12843C2.81005 7.56115 1.5 9.21256 1.5 11.1145V12C1.5 12.2761 1.27614 12.5 1 12.5C0.723858 12.5 0.5 12.2761 0.5 12V11.1145C0.5 8.74793 2.13008 6.69309 4.43463 6.15466L4.60165 6.11563C3.90663 5.52501 3.47767 4.64668 3.47767 3.68648V3.05955ZM6.02885 5.77866C6.95354 5.50737 7.59677 4.65701 7.59677 3.68361V3.05955C7.59677 2.19824 6.89854 1.5 6.03722 1.5C5.1759 1.5 4.47767 2.19824 4.47767 3.05955V3.68648C4.47767 4.65435 5.11284 5.501 6.02885 5.77866Z"
        fill="white"
      />
    </svg>
  );

  const Proxima = (
   <svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.9181 10.4639L11.2055 10.2299L11.2055 10.2299L11.9181 10.4639ZM13.0633 10.2678L12.5251 10.7901L12.5251 10.7901L13.0633 10.2678ZM11.9694 3.6974L12.6867 3.47849L12.6867 3.47849L11.9694 3.6974ZM13.111 3.91443L12.5844 3.38041L12.5844 3.38041L13.111 3.91443ZM12.6306 10.698C12.6002 10.7906 12.5446 10.8351 12.528 10.8462C12.5137 10.8557 12.5188 10.8486 12.5471 10.8442C12.5744 10.8399 12.5958 10.8425 12.6026 10.8441C12.6112 10.8462 12.5731 10.8396 12.5251 10.7901L13.6016 9.74555C13.2251 9.35757 12.6868 9.30356 12.3133 9.36251C11.9483 9.42012 11.397 9.64691 11.2055 10.2299L12.6306 10.698ZM9.97275 13.4545C10.6683 13.4545 11.2333 13.067 11.6466 12.5807C12.0613 12.0925 12.3885 11.4351 12.6306 10.698L11.2055 10.2299C11.0003 10.8549 10.7513 11.3178 10.5035 11.6094C10.2541 11.9029 10.0702 11.9545 9.97275 11.9545V13.4545ZM6.77449 6.99972C6.77449 8.65182 7.06042 10.1831 7.55236 11.3294C7.79777 11.9012 8.10925 12.4119 8.49332 12.7904C8.88064 13.1721 9.38146 13.4545 9.97275 13.4545V11.9545C9.88798 11.9545 9.74473 11.9177 9.54624 11.7221C9.3445 11.5232 9.12843 11.1984 8.93079 10.7379C8.53663 9.81941 8.27449 8.49831 8.27449 6.99972H6.77449ZM9.97275 0.544918C9.38146 0.544918 8.88064 0.827326 8.49332 1.20906C8.10925 1.58759 7.79777 2.09821 7.55236 2.67004C7.06042 3.81633 6.77449 5.34763 6.77449 6.99972H8.27449C8.27449 5.50114 8.53663 4.18004 8.93079 3.2616C9.12843 2.80106 9.3445 2.47623 9.54624 2.2774C9.74473 2.08178 9.88798 2.04492 9.97275 2.04492V0.544918ZM12.6867 3.47849C12.4476 2.69513 12.1175 1.99651 11.6955 1.47767C11.2767 0.962789 10.6957 0.544918 9.97275 0.544918V2.04492C10.0737 2.04492 10.2692 2.1013 10.5318 2.42416C10.7912 2.74306 11.0474 3.24569 11.252 3.91632L12.6867 3.47849ZM12.5844 3.38041C12.6328 3.33262 12.6701 3.32715 12.6607 3.32925C12.6531 3.33094 12.6311 3.33309 12.6039 3.3283C12.5755 3.32331 12.5709 3.31618 12.5856 3.32638C12.6026 3.33822 12.658 3.38446 12.6867 3.47849L11.252 3.91632C11.4317 4.50522 11.9807 4.74175 12.3442 4.80565C12.7167 4.87113 13.2543 4.82645 13.6376 4.44844L12.5844 3.38041ZM14.7214 2.4516C13.8892 2.4516 13.1525 2.82011 12.5844 3.38041L13.6376 4.44844C13.9802 4.11059 14.3546 3.9516 14.7214 3.9516V2.4516ZM18.2694 7.11515C18.2694 5.896 17.9173 4.761 17.31 3.91165C16.7038 3.0637 15.7988 2.4516 14.7214 2.4516V3.9516C15.1893 3.9516 15.6834 4.21557 16.0898 4.78405C16.4952 5.35112 16.7694 6.1729 16.7694 7.11515H18.2694ZM14.7214 11.7787C15.7988 11.7787 16.7038 11.1666 17.31 10.3186C17.9173 9.4693 18.2694 8.3343 18.2694 7.11515H16.7694C16.7694 8.0574 16.4952 8.87917 16.0898 9.44625C15.6834 10.0147 15.1893 10.2787 14.7214 10.2787V11.7787ZM12.5251 10.7901C13.101 11.3837 13.8594 11.7787 14.7214 11.7787V10.2787C14.3422 10.2787 13.9537 10.1085 13.6016 9.74555L12.5251 10.7901ZM3.24331 11.1502C4.12239 11.1502 4.71702 10.458 5.04719 9.79863C5.39966 9.09477 5.59599 8.17488 5.59599 7.19975H4.09599C4.09599 7.99218 3.93355 8.67251 3.70596 9.12698C3.45607 9.62599 3.24936 9.6502 3.24331 9.6502V11.1502ZM0.890625 7.19975C0.890625 8.17488 1.08696 9.09477 1.43943 9.79863C1.76959 10.458 2.36422 11.1502 3.24331 11.1502V9.6502C3.23725 9.6502 3.03054 9.62599 2.78065 9.12698C2.55307 8.67251 2.39062 7.99218 2.39062 7.19975H0.890625ZM3.24331 3.2493C2.36422 3.2493 1.76959 3.94154 1.43943 4.60087C1.08696 5.30473 0.890625 6.22462 0.890625 7.19975H2.39062C2.39062 6.40732 2.55307 5.72699 2.78065 5.27251C3.03054 4.7735 3.23725 4.7493 3.24331 4.7493V3.2493ZM5.59599 7.19975C5.59599 6.22462 5.39966 5.30473 5.04719 4.60087C4.71702 3.94154 4.12239 3.2493 3.24331 3.2493V4.7493C3.24936 4.7493 3.45607 4.7735 3.70596 5.27251C3.93355 5.72699 4.09599 6.40732 4.09599 7.19975H5.59599ZM23.6074 7.13515C23.6074 8.36344 23.3853 9.43942 23.0571 10.1802C22.8925 10.5516 22.716 10.8056 22.5579 10.9565C22.4036 11.1038 22.3038 11.1212 22.2589 11.1212V12.6212C22.7935 12.6212 23.2458 12.3736 23.5936 12.0416C23.9376 11.7132 24.2133 11.2736 24.4285 10.7879C24.8598 9.81459 25.1074 8.52253 25.1074 7.13515H23.6074ZM22.2589 3.14906C22.3038 3.14906 22.4036 3.16647 22.5579 3.31375C22.716 3.46468 22.8925 3.71867 23.0571 4.09006C23.3853 4.83088 23.6074 5.90686 23.6074 7.13515H25.1074C25.1074 5.74777 24.8598 4.45571 24.4285 3.4824C24.2133 2.99673 23.9376 2.55713 23.5936 2.22874C23.2458 1.8967 22.7935 1.64906 22.2589 1.64906V3.14906ZM20.9104 7.13515C20.9104 5.90686 21.1325 4.83088 21.4608 4.09006C21.6253 3.71867 21.8019 3.46468 21.96 3.31375C22.1142 3.16647 22.214 3.14906 22.2589 3.14906V1.64906C21.7244 1.64906 21.2721 1.8967 20.9242 2.22874C20.5802 2.55713 20.3046 2.99673 20.0894 3.4824C19.6581 4.45571 19.4104 5.74777 19.4104 7.13515H20.9104ZM22.2589 11.1212C22.214 11.1212 22.1142 11.1038 21.96 10.9565C21.8019 10.8056 21.6253 10.5516 21.4608 10.1802C21.1325 9.43942 20.9104 8.36344 20.9104 7.13515H19.4104C19.4104 8.52253 19.6581 9.81459 20.0894 10.7879C20.3046 11.2736 20.5802 11.7132 20.9242 12.0416C21.2721 12.3736 21.7244 12.6212 22.2589 12.6212V11.1212Z" fill="white"/>
  </svg>
);

const Privacy = (
  <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.55824 2.51259C4.81847 2.16927 5.24484 1.78608 5.66846 1.65031C5.86571 1.58709 6.04189 1.58337 6.20519 1.63924C6.3693 1.6954 6.58146 1.83268 6.81251 2.15929C7.09789 2.56268 7.04596 2.72399 7.01585 2.79729C6.94882 2.96047 6.76679 3.14256 6.38358 3.45855C6.34742 3.48837 6.30993 3.51899 6.27135 3.5505C5.5847 4.11136 4.55416 4.95311 4.55416 6.53627C4.55416 6.86764 4.82279 7.13627 5.15416 7.13627C5.48553 7.13627 5.75416 6.86764 5.75416 6.53627C5.75416 5.53193 6.36671 5.02727 7.09729 4.42536L7.147 4.3844L7.14812 4.38347C7.48083 4.10913 7.92459 3.74322 8.12585 3.25325C8.36426 2.67285 8.22283 2.07503 7.79215 1.46625C7.45036 0.983105 7.0479 0.659287 6.59367 0.503867C6.13863 0.348169 5.69273 0.382405 5.30221 0.507565C4.55031 0.748549 3.9384 1.3438 3.60191 1.78772C3.40175 2.05181 3.45356 2.42816 3.71764 2.62832C3.98173 2.82849 4.35808 2.77668 4.55824 2.51259ZM2.5 4.54876H3.59855C3.45397 4.84907 3.3345 5.18162 3.25587 5.54876H2.5C1.67157 5.54876 0.999999 6.22033 1 7.04876L1.00001 14.6413C1 14.6875 1.04969 14.7167 1.09005 14.6942L4.76528 12.6444C5.13756 12.4368 5.55674 12.3278 5.98301 12.3278H6.88098H9.43884C10.2673 12.3278 10.9388 11.6562 10.9388 10.8278V7.04876C10.9388 6.22033 10.2673 5.54876 9.43884 5.54876H7.93525C7.96778 5.52169 8.00165 5.49363 8.03692 5.46455L8.08521 5.42496C8.28458 5.26193 8.64784 4.96489 8.97041 4.54876H9.43884C10.8196 4.54876 11.9388 5.66805 11.9388 7.04876V10.8278C11.9388 12.2085 10.8196 13.3278 9.43884 13.3278H6.88098H5.98301C5.72725 13.3278 5.47574 13.3932 5.25237 13.5178L1.57714 15.5675C0.870219 15.9618 0 15.4507 5.0962e-06 14.6413L0 7.04876C0 5.66805 1.11929 4.54876 2.5 4.54876Z" fill="white"/>
  </svg>
 );

 const Security = (
 <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path fill-rule="evenodd" clip-rule="evenodd" d="M5.16052 3.95579C5.24073 2.64129 6.33221 1.6 7.6669 1.6C9.00159 1.6 10.0931 2.64129 10.1733 3.95579L7.15386 3.95579H5.16052ZM3.95899 3.95579C4.0404 1.97824 5.66934 0.4 7.6669 0.4C9.66446 0.4 11.2934 1.97824 11.3748 3.9558L12.3333 3.9558C13.7693 3.9558 14.9333 5.11986 14.9333 6.5558L14.9333 12.1961C14.9333 13.6321 13.7693 14.7961 12.3333 14.7961H10.8888C10.8737 15.5324 10.777 16.316 10.6067 17.124C10.5383 17.4482 10.2201 17.6557 9.89584 17.5873C9.5716 17.519 9.36415 17.2007 9.43249 16.8765C9.59014 16.1286 9.67383 15.4304 9.6885 14.7961H6.81481C5.90671 14.7961 4.81027 14.2563 4.73907 13.0737C4.69957 12.4177 4.79049 11.6373 5.14184 10.9958C5.51345 10.3174 6.1743 9.81201 7.15383 9.81201C7.94894 9.81201 8.64567 10.0214 9.21829 10.4296C9.7881 10.8358 10.1979 11.4123 10.4676 12.0885C10.649 12.5435 10.7699 13.0501 10.8345 13.5961H12.3333C13.1065 13.5961 13.7333 12.9693 13.7333 12.1961L13.7333 6.5558C13.7333 5.7826 13.1065 5.1558 12.3333 5.1558L7.15386 5.15579L3.00002 5.15579C2.22682 5.15579 1.60002 5.78259 1.60002 6.55579L1.6 14.1961C1.6 14.5275 1.33137 14.7961 1 14.7961C0.668628 14.7961 0.399999 14.5275 0.4 14.1961L0.400019 6.55579C0.400022 5.11985 1.56408 3.95579 3.00002 3.95579H3.95899ZM9.35292 12.533C9.47717 12.8446 9.56831 13.2008 9.62442 13.5961H6.81481C6.24626 13.5961 5.95444 13.293 5.9369 13.0016C5.90562 12.4822 5.98758 11.9497 6.19432 11.5723C6.3808 11.2318 6.66326 11.012 7.15383 11.012C7.73128 11.012 8.17708 11.161 8.52169 11.4067C8.86911 11.6544 9.15124 12.0273 9.35292 12.533Z" fill="white"/>
 </svg>
 );

 const Interface = (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 14H1.72357C1.54313 14 1.48563 13.7568 1.64697 13.676V13.676C1.67075 13.6641 1.69697 13.6579 1.72357 13.6579H8.66509C8.92488 13.6579 9.13548 13.4473 9.13548 13.1875V13.1875V7.33761C9.13548 6.43436 8.40325 5.70213 7.5 5.70213V5.70213C6.59675 5.70213 5.86452 6.43436 5.86452 7.33761V7.82269C5.86452 8.99385 6.81393 9.94326 7.98508 9.94326H11C12.6569 9.94326 14 8.60012 14 6.94326V4C14 2.34315 12.6569 1 11 1H4C2.34315 1 1 2.34315 1 4V7.75C1 9.40685 2.34315 10.75 4 10.75H4.68587" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
  
 )



const SettingsPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const editModal = useEditModal();
  const { data: currentUser } = useCurrentUser();

  return (
    <>
      <Header label="Settings" showBackArrow />
      <div className="px-6 py-2">
        <h2 className="text-xl font-regular mb-4 text-white font-agrandir">You’re in control of your Y experience.</h2>
      </div>
      <div className="flex items-center px-6 py-4 cursor-pointer" onClick={editModal.onOpen} >
      <div className="h-7 w-10 mr-3 flex items-center justify-center rounded-full bg-neutral-800">
          <div className="h-5 w-5 flex items-center justify-center ">
        {UserIcon}
        </div>
        </div>
        <div>
        <h3 className="text-sm font-semibold text-white mb-1">Profile Details</h3>
        <p className="text-sm text-gray-400">Stuff like your profile photo and description.</p>
        </div>
        <FaArrowRight className="h-3.5 w-3.5 text-gray-500 ml-auto" />
      </div>
      <div>
      <div className="flex items-center px-6 py-2 cursor-pointer" >
      <div className="h-7 w-10 mr-3 flex items-center justify-center rounded-full bg-neutral-800">
          <div className="h-5 w-5 flex items-center justify-center ">
        {UserBlock}
        </div>
        </div>
        <div>
        <h3 className="text-sm font-semibold text-white mb-1">Blocked Yappers</h3>
        <p className="text-sm text-gray-400">Control who gets to interact with you.</p>
        </div>
      </div>
      <div className="border-b border-neutral-800"></div>
      </div>
      <div>
      <div className="flex items-center px-6 py-4 cursor-pointer" onClick={() => window.location.href = 'https://www.proxima.vercel.app/account'} >
      <div className="h-7 w-10 mr-3 flex items-center justify-center rounded-full bg-neutral-800">
          <div className="h-5 w-5 flex items-center justify-center ">
        {Proxima}
        </div>
        </div>        <div>
        <h3 className="text-sm font-semibold text-white mb-1">Subscription</h3>
        <p className="text-sm text-gray-400">Billing and info about Proxima Perks</p>
        </div>
        <LuArrowUpRight className="h-5 w-5 text-gray-500 ml-auto" />
      </div>
      <div className="border-b border-neutral-800"></div>
      </div>
      <div>
      <div className="flex items-center px-6 py-4 cursor-pointer" >
      <div className="h-7 w-10 mr-3 flex items-center justify-center rounded-full bg-neutral-800">
          <div className="h-6 w-6 flex items-center justify-center ">
        {Security}
        </div>
        </div>        <div>
        <h3 className="text-sm font-semibold text-white mb-1">Proxima Account Security</h3>
        <p className="text-sm text-gray-400">Password and account access.</p>
        </div>
      </div>
      </div>
      <div className="border-b border-neutral-800"></div>
      <div>
      <div className="flex items-center px-6 py-4 cursor-pointer" >
      <div className="h-7 w-10 mr-3 flex items-center justify-center rounded-full bg-neutral-800">
          <div className="h-6 w-6 flex items-center justify-center ">
        {Interface}
        </div>
        </div>        <div>
        <h3 className="text-sm font-semibold text-white mb-1">Interface</h3>
        <p className="text-sm text-gray-400">Language. theme and accessibility.</p>
        </div>
        <FaArrowRight className="h-3.5 w-3.5 text-gray-500 ml-auto" />
      </div>
      </div>
    
      <div className="border-b border-neutral-800"></div>
<div>
  <div 
    className={`flex items-center px-6 py-4 cursor-pointer ${currentUser ? 'text-red-500' : ''}`} 
  >
    {currentUser && (
      <SidebarItem onClick={() => signOut()} icon={FiLogOut} label="Logout" />
    )}
    <div className="h-7 w-10 mr-3 flex items-center justify-center rounded-full bg-neutral-800">
      <div className="flex items-center justify-center">
        <LuLogOut className="text-white h-5 w-5"/>
      </div>
    </div>
    <div>
      <h3 className="text-sm font-semibold text-white mb-1">Logout</h3>
    </div>
  </div>
</div>

    </>
  );
};

export default SettingsPage;


