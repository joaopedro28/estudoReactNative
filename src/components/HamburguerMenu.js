import * as React from 'react';
import { Appbar, Drawer, List } from 'react-native-paper';

const HamburgerMenu = () => {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return (
        <>
            <Appbar.Header>
                <Appbar.Action icon="menu" onPress={openMenu} />
                <Appbar.Content title="Menu Hamburguer" />
            </Appbar.Header>
            <Drawer.Section title="Menu" visible={visible} onDismiss={closeMenu}>
                <List.Item title="Opção 1" onPress={closeMenu} />
                <List.Item title="Opção 2" onPress={closeMenu} />
                <List.Item title="Opção 3" onPress={closeMenu} />
            </Drawer.Section>
        </>
    );
};

export default HamburgerMenu;
