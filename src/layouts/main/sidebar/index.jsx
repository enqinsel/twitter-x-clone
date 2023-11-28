import Logo from "./logo/index.jsx";
import Menu from "./menu/index.jsx";

export default function Sidebar() {
    return (
        <aside className="w-[275px] min-h-screen max-h-screen px-2 flex flex-col ">
            <Logo/>
            <Menu/>
            <div className="mt-auto">
                <div className="my-3">
                    test
                </div>
            </div>
        </aside>
    )
}