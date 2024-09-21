import { HiOutlineLogout, HiOutlineSearch, HiOutlineCog, HiOutlineUser } from "react-icons/hi";
import { Menu, MenuItems, MenuItem } from '@headlessui/react'
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
const avatarUrlBase = process.env.REACT_APP_AVATAR_URL;
function Header() {
    const navigate = useNavigate();
    const { logout, user } = useAuth();

    const handleLOgout = () => {
        const token = localStorage.getItem('ACCESS_TOKEN');
        logout({ token: token });
    }
    return (
        <div className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-400">
            <div className="relative">
                <HiOutlineSearch fontSize={20} className=" text-gray-400 absolute top-1/2 -translate-y-1/2 left-2" />
                <input type="text" placeholder="Search..." className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-400 rounded-sm pr-4 pl-11" />
            </div>
            <div className="flex items-center">
                {user && (<span className="text-gray-600 text-sm">Hello!{user.name ? user.name : ''}</span>)}
                <Menu as="div" className="relative">
                    {/* avatar */}
                    <div className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                        style={{
                            backgroundImage: user && user.avatar_url
                                ? `url(${avatarUrlBase}/${user.avatar_url})`
                                : 'url("https://project-nerd.com/wp-content/uploads/2020/05/ang.jpeg")'
                        }}>
                        <span className="sr-only">hello kayden</span>
                    </div>
                    <MenuItems
                        transition
                        anchor="bottom end"
                        className=" text-gray-500 w-48 origin-top-riht z-10 absolute right-0 mt-2 rounded-sm shadow-md p-1 bg-white ring-1 ring-opacity-5 focus:outline-none"
                    >
                        <MenuItem>
                            <button onClick={() => navigate("/profile")}
                                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                <HiOutlineUser fontSize={20} />
                                Your Profile

                            </button>
                        </MenuItem>
                        <MenuItem>
                            <button
                                onClick={() => (navigate("/setting"))}

                                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                <HiOutlineCog fontSize={20} />
                                Setting

                            </button>
                        </MenuItem>

                        <MenuItem>
                            <button onClick={handleLOgout} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                <HiOutlineLogout fontSize={20} />
                                SignOut

                            </button>
                        </MenuItem>

                    </MenuItems>
                </Menu>
            </div>

        </div>
    );
}

export default Header;