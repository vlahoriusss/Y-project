import { useRouter } from "next/router";

const SidebarLogo = () => {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push('/')}
            className="
            rounded-full
            h-14
            w-14
            p-4
            flex
            items-center
            justify-center
            hover:bg-white-300
            hover:bg-opacity-10
            cursor-pointer
            transition
            "
        >
            <svg
                width="15"
                height="18"
                viewBox="0 0 15 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M1.95635 9.95299C-0.753161 6.90299 0.124682 1.17799 0.175327 0.927991H2.05764C1.88038 2.40299 1.75377 6.65299 3.50102 8.62799C4.13409 9.32799 4.96973 9.67799 6.0586 9.67799C7.45134 9.67799 8.54021 9.22799 9.40117 8.62799C9.40117 6.57799 9.45182 4.72799 9.60375 3.72799C9.93295 1.67799 10.7939 0.327992 12.0347 0.0529906C12.8704 -0.147008 13.7313 0.227991 14.2884 1.02799C15.0987 2.17799 14.491 4.92799 13.4275 6.92799C13.0223 7.67799 12.3892 8.67799 11.4523 9.55299C11.4776 13.378 11.6296 17.678 11.6296 17.728H9.60375C9.60375 17.503 9.47714 14.303 9.42649 10.953C8.48956 11.403 7.37537 11.678 6.0586 11.678C4.38731 11.678 2.99457 11.103 1.95635 9.95299ZM11.6296 4.02799C11.5536 4.55299 11.4776 5.97799 11.4523 6.92799C12.4905 5.10299 12.7437 2.62799 12.5918 2.15299C12.5412 2.07799 12.4905 2.02799 12.4652 2.02799C12.3133 2.10299 11.8575 2.60299 11.6296 4.02799Z" fill="#FFF"/>
            </svg>
            
        </div>
    );
}

export default SidebarLogo;
