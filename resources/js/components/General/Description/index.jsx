import React from "react";
import Divider from "./Divider";
import Head from "./Head";
import Text from "./Text";
import DescriptionContainer from "./DescriptionContainer";


const Description = () =>
    <DescriptionContainer>
        <Head>ЦЕНТР НОВОГО ПОКОЛЕНИЯ</Head>
        <Divider/>
        <Text>
            <p>Наш центр представляет собой современный медицинский комплекс с мощной диагностической и
                лечебно-профилактической базой. Попав в Омикрон, Вы обеспечены полным спектром всего, что нужно для
                решения Вашей проблемы.</p>
        </Text>
    </DescriptionContainer>;

export default Description;
