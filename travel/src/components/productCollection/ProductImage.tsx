import React from "react";
import {Image, Typography} from "antd";

interface PropsType {
    id: string | number
    size: "large" | "small"
    imageSrc: string
    price: number | string
    title: string
}

export const ProductImage: React.FC<PropsType> = ({
                                                      id,
                                                      size,
                                                      imageSrc,
                                                      price,
                                                      title
                                                  }) => {
    return <>
        {size === "large" ? (
            <Image src={imageSrc} height={300} width={420}/>
        ) : (
            <Image src={imageSrc} height={120} width={230}/>)}
        <div>
            <Typography.Text
                type='secondary'>{title.slice(0, 25)}</Typography.Text>
            <Typography.Text type='danger' strong>￥{price}起</Typography.Text>
        </div>
    </>
}
