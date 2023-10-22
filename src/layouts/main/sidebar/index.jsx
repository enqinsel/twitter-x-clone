import Logo from "./logo/index.jsx";
import Menu from "./menu/index.jsx";

export default function Sidebar() {
    return (
        <aside className="w-[275px] min-h-screen ">
            <Logo/>
            <Menu/>
        </aside>
    )
}