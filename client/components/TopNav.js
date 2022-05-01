import {Menu} from "antd";
import Link from "next/link";
import { AppstoreOutlined, RightOutlined } from "@ant-design/icons";

const {Item} = Menu;

const TopNav = () => {

    return(
        <Menu mode="horizontal">
            <Item icon={<AppstoreOutlined />}>
                <Link href="/">
                <a>
                Acceuil
                </a>
                </Link>
            </Item>
            <Item icon={<RightOutlined />}>
                <Link href="/choisir">
                <a>
                Choisir un Desktop
                </a>
                </Link>
            </Item>
            <Item icon={<RightOutlined />}>
                <Link href="/choisir">
                <a>
                Demandfer un Devis
                </a>
                </Link>
            </Item>

        </Menu>
    )
};

export default TopNav;