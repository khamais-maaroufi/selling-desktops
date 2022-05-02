import { Menu } from "antd";
import Link from "next/link";
import { AppstoreOutlined, RightOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useEffect } from "react";

const { Item } = Menu;

const TopNav = () => {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    setCurrent(process.browser && window.location.pathname);
    // if (process.browser){ setCurrent(window.location.pathname)};
    console.log(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  return (
    <Menu mode="horizontal" selectedKeys={[current]} className="mb-2">
      <Item icon={<AppstoreOutlined />} onClick={(e) => setCurrent(e.key)}>
        <Link href="/">
          <a>Acceuil</a>
        </Link>
      </Item>
      <Item icon={<RightOutlined />} onClick={(e) => setCurrent(e.key)}>
        <Link href="/choisir">
          <a>Concevez Votre Bureau</a>
        </Link>
      </Item>
      <Item icon={<RightOutlined />} onClick={(e) => setCurrent(e.key)}>
        <Link href="/demander">
          <a>Demander un Devis</a>
        </Link>
      </Item>
    </Menu>
  );
};

export default TopNav;
