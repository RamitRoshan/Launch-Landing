interface NavItemProps {
    href: string;
    text: string;
}

export const NavItem = ({ href, text}: NavItemProps) => {
    return (
         <li>
            <a href={href}>
                {text}
            </a>
         </li>
    );
}